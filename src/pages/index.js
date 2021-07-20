import * as React from "react"
import NavBar from "../components/nav";
import Home from "../components/home";

// markup
const IndexPage = () => {
  return (
    <div className="cover-page-layout">
      <header>
        <NavBar />
      </header>
      <main>
        <Home />
      </main>
    </div>
  )
}

export default IndexPage
