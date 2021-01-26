import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import Layout from '../../../component/Layout'

function edit() {
    const [items, setItems] = useState([])
    const [picture, setPicture] = useState('/img/pigeon.jpeg')

    useEffect(async () => {
        const result = await axios(
            '/api/merpati',
        );
        console.log(result)
        setItems(result.data);
    }, []);


    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        // If useCached is true and results are are cached it
        // returns cached results
        console.log(string, results)
    }

    const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
    }

    const handleOnFocus = () => {
        console.log('Focused')
    }
    return (
        <Layout title="Edit Merpati">
            <div className="max-w-xl mx-auto md:max-w-6xl lg:max-w-4xl">
                <div className="grid items-start grid-cols-1 gap-6 p-6 mt-8 bg-white md:grid-cols-2">
                    <div className="grid grid-cols-1 gap-6">
                        {picture ? <img className="w-full h-auto rounded" src={picture} alt="picture" /> : <label class="block">
                            <span class="text-gray-700">Image</span>
                            <input type="file" class="mt-1 block w-full" />
                        </label>}
                        <div className="block">
                            <div className="px-6 py-4 border rounded bg-grey-100">
                                <div className="flex flex-col">
                                    <div className="flex items-center justify-between my-2">
                                        <div className="mb-2">🏆 Juara 2 Aniversary</div>
                                        <button className="h-8 px-3 ml-auto text-xs text-white bg-gray-400 rounded shadow outline-none active:bg-green-600 hover:shadow-lg hover:bg-pink-600 focus:outline-none" type="button" style={{ transition: "all .15s ease" }} ><i className="fas fa-trash"></i></button>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="mb-2">🏆 Juara 2 Aniversary</div>
                                        <button className="h-8 px-3 ml-auto text-xs text-white bg-gray-400 rounded shadow outline-none active:bg-green-600 hover:shadow-lg focus:outline-none" type="button" style={{ transition: "all .15s ease" }} ><i className="fas fa-trash"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <label className="block">
                            <span className="text-gray-700">Prestasi</span>
                            <div className="flex items-center">
                                <input type="text" name="name" className="block my-1 mr-2 bg-gray-100 border-transparent rounded shadow-md w-96 focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="" />
                                <button className="h-8 px-3 text-sm text-white bg-gray-400 rounded shadow outline-none active:bg-green-600 hover:shadow-lg hover:bg-pink-600 focus:outline-none" type="button" style={{ transition: "all .15s ease" }} ><i className="fas fa-plus"></i></button>
                            </div>
                        </label>
                    </div>
                    <div className="grid grid-cols-1 gap-6 p-2 lg:p-0">
                        <label className="block">
                            <span className="text-gray-700">Ring Kandang / Nama Burung</span>
                            <input type="text" name="name" className="block my-1 bg-gray-100 border-transparent rounded shadow-md w-96 focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="" />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Ring Pusat</span>
                            <input type="text" name="SI" className="block my-1 bg-gray-100 border-transparent rounded shadow-md w-96 focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="" />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Warna</span>
                            <input type="text" name="color" className="block my-1 bg-gray-100 border-transparent rounded shadow-md w-96 focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="" />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Tanggal Menetas</span>
                            <input type="date" name="dob" className="block my-1 bg-gray-100 border-transparent rounded shadow-md w-96 focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="" />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Kelamin?</span>
                            <select className="block my-1 bg-gray-100 border-transparent rounded shadow-md w-96 focus:border-gray-500 focus:bg-white focus:ring-0">
                                <option>Pilih salah satu</option>
                                <option>Jantan</option>
                                <option>Betina</option>
                            </select>
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Induk Jantan</span>
                            <div className="block my-1 border-transparent rounded w-96 focus:border-gray-500 focus:bg-white focus:ring-0">
                                <ReactSearchAutocomplete
                                    items={items}
                                    onSearch={handleOnSearch}
                                    onSelect={handleOnSelect}
                                    onFocus={handleOnFocus}
                                />
                            </div>
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Induk Betina</span>
                            <div className="block my-1 border-transparent rounded w-96 focus:border-gray-500 focus:bg-white focus:ring-0">
                                <ReactSearchAutocomplete
                                    items={items}
                                    onSearch={handleOnSearch}
                                    onSelect={handleOnSelect}
                                    onFocus={handleOnFocus}
                                />
                            </div>
                        </label>
                        <div className="flex items-center justify-end rounded-b">
                            <button className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase bg-transparent outline-none focus:outline-none" type="button" style={{ transition: "all .15s ease" }} >Delete </button>
                            <button className="px-3 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-pink-600 rounded shadow outline-none active:bg-green-600 hover:shadow-lg focus:outline-none" type="button" style={{ transition: "all .15s ease" }} >Simpan</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default edit
