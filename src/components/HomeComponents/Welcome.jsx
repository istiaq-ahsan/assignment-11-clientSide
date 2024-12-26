import { Link } from "react-router-dom";
import image1 from "../../assets/images/Welcome1.jpeg"
import image2 from "../../assets/images/Welcome2.jpeg"

const Welcome = () => {
    return (
        <div className="w-11/12 md:w-4/5 mx-auto pt-20">
            <div className="grid grid-cols-1 md:grid-cols-6 justify-center items-center gap-5">
                <div className="flex flex-col md:col-span-3">
                    <img className="w-[400px] h-72 relative lg:ml-14 rounded-3xl" src={image2} alt="" />
                    <img className="w-64 h-48 -top-10 mx-auto lg:mx-0 relative rounded-3xl" src={image1} alt="" />
                </div>
                <div className="space-y-3 md:col-span-3">
                    <p className="text-xl font-medium">Welcome to the SprintSphere</p>
                    <h1 className="text-4xl font-bold">We Are The Best Running Club in Town</h1>
                    <hr />
                    <p>We are the best running club in town, bringing runners together to achieve their goals and celebrate fitness.</p>
                    <div>
                        <Link to="/allMarathons" className="btn btn-neutral">See All Marathon</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;