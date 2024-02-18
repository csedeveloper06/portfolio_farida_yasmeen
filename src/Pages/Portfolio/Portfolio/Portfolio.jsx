import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import AboutMe from "../../AboutMe/AboutMe";


const Portfolio = () => {

    return (
        <div className="pt-28">
            <Banner></Banner>
            <AboutMe></AboutMe>
            <FeaturedProjects></FeaturedProjects>
        </div>
    );
};

export default Portfolio;