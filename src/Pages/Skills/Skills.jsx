import SectionTitle from "../../Components/SectionTitle/SectionTitle";


const Skills = () => {
    return (
        <div className="pb-20">
            <SectionTitle
                heading="Skills" subHeading="What I Do"
            ></SectionTitle>
            <div className="flex justify-center items-center gap-10">
                <div className="card card-compact w-24 h-36 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/yFsS49q/js.png"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-xs text-yellow-600">JavaScript</h2>
                    </div>
                </div>
                <div className="card card-compact w-24 h-36 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/R4ZpvyG/html5.png"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-xs text-yellow-600">Html 5</h2>
                    </div>
                </div>
                <div className="card card-compact w-24 h-36 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/jMQJsLX/css1.png"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-xs text-yellow-600">CSS3</h2>
                    </div>
                </div>
                <div className="card card-compact w-24 h-36 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/SxGfJ7N/react.png"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-xs text-yellow-600">React</h2>
                    </div>
                </div>
                <div className="card card-compact w-24 h-36 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/fCj0cqP/mongo1.jpg"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-xs text-yellow-600">MongoDB</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;