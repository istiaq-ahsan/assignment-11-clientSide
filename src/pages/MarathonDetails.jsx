import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MarathonDetails = () => {

    const { id } = useParams();
    const [marathon, setMarathon] = useState({});

    useEffect(() => {
        fetchMarathonDetails()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const { title,
        startRegistration,
        endRegistration,
        marathonStartDate,
        location,
        distance,
        description,
        image
    } = marathon || {}

    const fetchMarathonDetails = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/marathon-details/${id}`)
        setMarathon(data);
        console.log(marathon);
    }

    return (
        <div>
            <div className="hero bg-base-200 border border-gray-500">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="lg:w-1/2 border border-gray-500">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                            className=" rounded-lg w-full" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <h2>Start Registration : {startRegistration ? format(new Date(startRegistration), "P") : "TBA"}
                        </h2>
                        <h2>End Registration : {endRegistration ? format(new Date(endRegistration), "P") : "TBA"}
                        </h2>
                        <h2>Marathon Start : {marathonStartDate ? format(new Date(marathonStartDate), "P") : "TBA"}
                        </h2>
                        <h3>Location: {location}</h3>
                        <h3>Distance: {distance}</h3>
                        <p className="py-6">
                            {description}
                        </p>
                        <button className="btn btn-neutral">Registration</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarathonDetails;