import "../styles/globals.css";
import "../style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { useEffect } from "react";
import App from "next/app";
import { isLoggedIn } from "../lib";

class MyApp extends App {
  componentDidMount() {
    isLoggedIn();
  }
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps}></Component>;
  }
}

export default MyApp;
