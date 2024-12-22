import axios from "axios";
import { compareAsc, format } from "date-fns";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const MarathonDetails = () => {

    const { id } = useParams();
    const [marathon, setMarathon] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetchMarathonDetails()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const { title,
        _id,
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

    const handleGoReg = () => {
        if (compareAsc(new Date(), new Date(endRegistration)) === 1) {
            return toast.error("Registration Deadline is Over");
        }
        else {
            navigate(`/marathonReg/${_id}`)
        }

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
                        <button onClick={handleGoReg} className="btn btn-neutral">Registration</button >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarathonDetails;