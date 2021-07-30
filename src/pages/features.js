import * as React from "react";
import NavBar from "../components/nav";
import FeaturesComp from "../components/features-comp";

const Features = () => {
    return (
        <div className="container cover-page-layout">
            <header>
                <NavBar />
            </header>
            <main>
                <FeaturesComp />
            </main>
        </div>
    )
}

export default Features
