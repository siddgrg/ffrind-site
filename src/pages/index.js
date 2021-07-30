import React, { useEffect } from "react";
import LogoSvg from "../components/logo-svg";
import NavBar from "../components/nav";

const IndexPage = () => {

  useEffect(() => {
    document.body.classList.add('home-bg');

    return () => {
      document.body.classList.remove('home-bg');
    }
  })

  return (
    <div className="container home-layout flex">
      <NavBar />
      <LogoSvg id="logo-home" />
    </div>
  )
}

export default IndexPage
