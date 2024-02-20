import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ProjectCard from "../ProjectCard/ProjectCard";
import { data } from "autoprefixer";


const FeaturedProjects = () => {

    const [ projects,setProjects ] = useState([]);

    useEffect(()=> {
        fetch('https://my-portfolio-server-iota-henna.vercel.app/assignments')
        .then(res=>res.json())
        .then(data => setProjects(data))
    },[])

    console.log(projects);

    return (
       <section>
            <SectionTitle
                heading="Featured Projects"
                subHeading="My Project Works"
            >
            </SectionTitle>
            <div className="grid mb-24 ml-16 md:grid-cols-2 p-10 lg:ml-44">
                {
                    projects.map(project => <ProjectCard 
                        key={project._id}
                        project={project}
                    ></ProjectCard>)
                }
            </div>
       </section>
    );
};

export default FeaturedProjects;