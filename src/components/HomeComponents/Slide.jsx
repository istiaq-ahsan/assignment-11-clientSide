import { Link } from "react-router-dom";

const Slide = ({ image, text }) => {
    return (
        <div
            className='w-full bg-center bg-cover h-[38rem]'
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                <div className='text-center'>
                    <h1 className='text-xl font-semibold text-white lg:text-4xl w-4/5 mx-auto'>
                        {text}
                    </h1>
                    <br />
                    <Link to="/addMarathon"

                        className='btn btn-accent hover:bg-white'
                    >
                        Create Marathon Event
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Slide;