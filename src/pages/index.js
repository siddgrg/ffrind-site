import * as React from "react"
import NavBar from "../components/nav";
import Home from "../components/home";

// markup
const IndexPage = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Home />
      </main>
    </>
  )
}

export default IndexPage
