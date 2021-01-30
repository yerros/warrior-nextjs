import axios from "axios";
import Router from "next/router";

export const BaseUrl = "http://localhost:9901/";

const setHeader = () => {
  const token = localStorage.getItem("token");
  return {
    headers: { secret_token: token },
  };
};

export const isLoggedIn = () => {
  const token = localStorage.getItem("token");
  const loggedIn = localStorage.getItem("isLoggedIn");
  if (!token) {
    return Router.push("/sign-in");
  } else if (loggedIn) {
    Get("v1/user/auth")
      .then((res) => {
        if (res.message == "UNAUTHORIZED") {
          localStorage.setItem("isLoggedIn", false);
          localStorage.setItem("token", "");
          return Router.push("/sign-in");
        }
      })
      .catch((err) => alert("error"));
  }
};

export const Post = (path, body) => {
  return new Promise((resolve, reject) => {
    axios
      .post(BaseUrl + path, body, setHeader())
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};

export const Auth = (path) => {
  return new Promise((resolve, reject) => {
    axios
      .get(BaseUrl + path, setHeader())
      .then((res) => resolve(res))
      .catch((err) => console.log(err));
  });
};

export const Get = (path) => {
  return new Promise((resolve, reject) => {
    axios
      .get(BaseUrl + path, setHeader())
      .then((res) => resolve(res.data))
      .catch((err) => console.log(err));
  });
};

export const Delete = (path) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(BaseUrl + path, setHeader())
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};

export const Put = (path, body) => {
  return new Promise((resolve, reject) => {
    axios
      .put(BaseUrl + path, body, setHeader())
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};
