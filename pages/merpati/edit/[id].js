import React, { useState, useEffect } from "react";
import { Delete, Get, Post, Put } from "../../../lib";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import Layout from "../../../component/Layout";
import moment from "moment";
import Router, { useRouter } from "next/router";
import Notiflix from "notiflix";

function edit() {
  const [items, setItems] = useState([]);
  const [picture, setPicture] = useState("");
  const [achievement, setAchievement] = useState([]);
  const [achievementAdd, setAchievementAdd] = useState("");
  const [name, setName] = useState("");
  const [ring, setRing] = useState("");
  const [ppmbsi, setPpmbsi] = useState("");
  const [color, setColor] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [parrents, setParrents] = useState([]);

  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  useEffect(async () => {
    const result = await Get("v1/merpati");
    setItems(result);
    const res = await Get(`v1/merpati/${id}`);
    if (!res) {
      return Router.push("/merpati");
    }
    setPicture(res.picture);
    setAchievement(res.achievement);
    setName(res.name);
    setRing(res.ring);
    setPpmbsi(res.ppmbsi);
    setColor(res.color);
    setDob(moment(res.dob).format("YYYY-MM-DD"));
    setGender(res.gender);
    setParrents(res.parrents);
  }, []);

  const handleUpload = (event) => {
    const files = event.target.files[0];
    const formData = new FormData();
    formData.append("file", files);
    formData.append("upload_preset", "kyqfnn6h");
    const options = {
      method: "POST",
      body: formData,
    };
    return fetch(
      "https://api.Cloudinary.com/v1_1/diiizbyxa/image/upload",
      options
    )
      .then((res) => res.json())
      .then((res) => setPicture(res.secure_url))
      .catch((err) => console.log(err));
  };

  const handlePrestasi = (e) => {
    setAchievement(achievement.concat([{ name: achievementAdd }]));
    setAchievementAdd("");
  };

  const handleRemovePrestasi = (id) => {
    setAchievement(achievement.filter((s, sid) => id !== sid));
  };

  const handleSubmit = () => {
    const body = {
      picture,
      achievement,
      name,
      ring,
      ppmbsi,
      color,
      dob,
      gender,
      parrents,
    };
    Put(`v1/merpati/${id}`, body).then((res) => {
      Notiflix.Notify.Success("Data Berhasil diedit");
      return Router.push("/merpati");
    });
  };

  const handleDelete = () => {
    const confirm = window.confirm("Are you sure to delete this Property?");
    Delete(`v1/merpati/${id}`).then((res) => {
      Notiflix.Notify.Success("Data Berhasil dihapus");
      return Router.push("/merpati");
    });
  };

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    // If useCached is true and results are are cached it
    // returns cached results
    console.log(string, results);
  };

  const handleOnSelectMale = (item) => {
    // the item selected
    setParrents(parrents.concat(item._id));
    console.log(item);
  };

  const handleOnSelectFemale = (item) => {
    // the item selected
    setParrents(parrents.concat(item._id));
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };
  return (
    <Layout title="Tambah Merpati">
      <div className="max-w-xl mx-auto md:max-w-6xl lg:max-w-4xl">
        <div className="grid items-start grid-cols-1 gap-6 p-6 mt-8 bg-white md:grid-cols-2">
          <div className="grid grid-cols-1 gap-6">
            {picture ? (
              <div className="relative">
                <img
                  className="relative w-full h-auto rounded"
                  src={picture}
                  alt="picture"
                />
                <button
                  onClick={(e) => setPicture("")}
                  className="absolute top-0 right-0 px-3 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-pink-600 rounded shadow outline-none active:bg-green-600 hover:shadow-lg hover:bg-pink-500 focus:outline-none"
                  type="button"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            ) : (
              <label className="block">
                <span className="text-gray-700">Image</span>
                <input
                  type="file"
                  name="picture"
                  onChange={handleUpload}
                  className="block w-full mt-1"
                />
              </label>
            )}
            <div className="block">
              <div
                className={`px-6 py-4 border rounded  bg-grey-100 ${
                  achievement.length ? "" : "hidden"
                }`}
              >
                <div className="flex flex-col">
                  {achievement.map((e, id) => {
                    return (
                      <div className="flex items-center justify-between">
                        <div className="py-2">🏆 &nbsp;&nbsp;{e.name}</div>
                        <button
                          onClick={() => handleRemovePrestasi(id)}
                          className="h-8 px-3 ml-auto text-xs text-white bg-gray-400 rounded shadow outline-none active:bg-green-600 hover:shadow-lg focus:outline-none"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <label className="block">
              <span className="text-gray-700">Prestasi</span>
              <div className="flex items-center">
                <input
                  type="text"
                  name="achievementAdd"
                  value={achievementAdd}
                  onChange={(e) => setAchievementAdd(e.target.value)}
                  className="block my-1 mr-2 bg-gray-100 border-transparent rounded shadow-md w-96 focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder=""
                />
                <button
                  name="achievement"
                  className="h-8 px-3 text-sm text-white bg-gray-400 rounded shadow outline-none active:bg-green-600 hover:shadow-lg hover:bg-pink-600 focus:outline-none"
                  type="button"
                  onClick={handlePrestasi}
                  style={{ transition: "all .15s ease" }}
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </label>
          </div>
          <div className="grid grid-cols-1 gap-6 p-2 lg:p-0">
            <label className="block">
              <span className="text-gray-700">Nama Burung</span>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block my-1 bg-gray-100 border-transparent rounded shadow-md w-96 focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder=""
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Ring Kandang</span>
              <input
                type="text"
                name="ring"
                value={ring}
                onChange={(e) => setRing(e.target.value)}
                className="block my-1 bg-gray-100 border-transparent rounded shadow-md w-96 focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder=""
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Ring Pusat</span>
              <input
                type="text"
                name="ppmbsi"
                value={ppmbsi}
                onChange={(e) => setPpmbsi(e.target.value)}
                className="block my-1 bg-gray-100 border-transparent rounded shadow-md w-96 focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder=""
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Warna</span>
              <input
                type="text"
                name="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="block my-1 bg-gray-100 border-transparent rounded shadow-md w-96 focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder=""
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Tanggal Menetas</span>
              <input
                type="date"
                name="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="block my-1 bg-gray-100 border-transparent rounded shadow-md w-96 focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder=""
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Kelamin?</span>
              <select
                onChange={(e) => setGender(e.target.value)}
                value={gender}
                className="block my-1 bg-gray-100 border-transparent rounded shadow-md w-96 focus:border-gray-500 focus:bg-white focus:ring-0"
              >
                <option>Pilih salah satu</option>
                <option value="jantan">Jantan</option>
                <option value="betina">Betina</option>
              </select>
            </label>

            <div className="flex items-center justify-end rounded-b">
              <button
                onClick={handleDelete}
                className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase bg-transparent rounded outline-none hover:bg-gray-200 focus:outline-none"
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                Delete{" "}
              </button>
              <button
                onClick={handleSubmit}
                className="px-3 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-pink-600 rounded shadow outline-none active:bg-green-600 hover:shadow-lg focus:outline-none"
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default edit;
