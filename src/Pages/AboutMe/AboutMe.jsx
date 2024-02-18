import SectionTitle from "../../Components/SectionTitle/SectionTitle";


const AboutMe = () => {
    return (
        <div className="py-10">
            <SectionTitle
                heading="About Me" subHeading="______________________________"
            ></SectionTitle>
            <p className="w-[650px] text-sm p-2 text-center text-gray-500 mx-auto">
                I'm Creative Junior Front End Web Developer from Dhaka, Bangladesh, working in web development. I enjoy turning complex problems into simple, beautiful and intuitive designs.My aim is to bring across your message and identity in the most creative way.
            </p>
            <div>
                <div className="flex justify-center items-center gap-4 p-6">
                    <div className="flex">
                        <button className="btn btn-ghost btn-sm">
                            <img className="avatar w-8" src="https://i.ibb.co/7WY8H12/gmail2.png" alt="" />
                        </button>
                        <div className="flex-col">
                            <p className="text-yellow-600 font-bold text-lg italic">Email</p>
                            <small className="text-xs text-gray-400">faridayasmeencse@gmail.com</small>
                        </div>
                    </div>  
                    <div className="flex">
                        <button className="btn btn-ghost btn-sm">
                            <img className="avatar w-8 rounded-full" src="https://i.ibb.co/hZG2XFZ/mobile3.jpg" alt="" />
                        </button>
                        <div className="flex-col">
                            <p className="text-yellow-600 font-bold text-lg italic">Mobile</p>
                            <small className="text-xs text-gray-400">01737509870</small>
                        </div>
                    </div>  
                    <div className="flex">
                        <button>
                            <img className="avatar w-8 rounded-full" src="https://i.ibb.co/bvq56d8/location22.png"/>
                        </button>
                        <div className="flex-col">
                            <p className="text-yellow-600 font-bold text-lg italic">Location</p>
                            <small className="text-xs text-gray-400">Dhaka,Bangladesh</small>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default AboutMe;