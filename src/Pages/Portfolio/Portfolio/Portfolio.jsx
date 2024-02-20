import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import AboutMe from "../../AboutMe/AboutMe";
import Contact from "../../Contact/Contact";
import Skills from "../../Skills/Skills";


const Portfolio = () => {

    return (
        <div className="pt-28">
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <FeaturedProjects></FeaturedProjects>
            <Contact></Contact>
        </div>
    );
};

export default Portfolio;