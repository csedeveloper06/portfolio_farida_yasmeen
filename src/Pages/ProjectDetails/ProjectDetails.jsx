import { Link, useLoaderData, useParams } from "react-router-dom";


const ProjectDetails = () => {

    const project = useLoaderData();
    console.log(project);
    const { title,logo,description,frontEndLiveLink } = project;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={logo}/></figure>
            <div className="card-body mt-36">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
                <Link to={frontEndLiveLink}>
                    <button className="btn btn-primary">Live Link</button>
                </Link>
            </div>
            </div>
      </div>
    );
};

export default ProjectDetails;