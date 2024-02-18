import { Link } from "react-router-dom";


const ProjectCard = ({project}) => {

    const { _id,title,logo } = project;

    return (
        <div className="card w-60 bg-base-100 shadow-xl image-full">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body flex-col justify-center items-center gap-3">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-center">
                    <Link to={`/projectdetails/${_id}`}>
                        <button className="btn btn-warning w-full">View Details</button> 
                    </Link>    
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;