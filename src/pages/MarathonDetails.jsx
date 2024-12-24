import axios from "axios";
import { compareAsc, format } from "date-fns";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
        image,
        reg_count
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
        <div className="py-12">
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row space-x-5">
                    <div className="lg:w-1/2">
                        <img
                            src={image}
                            className=" rounded-lg w-full" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold text-center">{title}</h1>
                        <div className="flex flex-col md:flex-row md:justify-between gap-4 mt-10">
                            <h2 className="text-lg font-medium">Start Registration :
                                <span className="font-semibold badge badge-outline p-3 ml-2">
                                    {startRegistration ? format(new Date(startRegistration), "P") : "TBA"}
                                </span>
                            </h2>
                            <h2 className="text-lg font-medium text-red-600">End Registration :
                                <span className="font-semibold badge badge-outline p-3 ml-2">
                                    {endRegistration ? format(new Date(endRegistration), "P") : "TBA"}
                                </span>
                            </h2>
                        </div>
                        <h2 className="text-lg font-medium my-5 text-left md:text-center">Marathon Start :
                            <span className="font-semibold badge badge-outline p-3 ml-2">
                                {marathonStartDate ? format(new Date(marathonStartDate), "P") : "TBA"}
                            </span>
                        </h2>


                        <div className="font-medium space-y-2 my-2">
                            <h3>Location: <span className="font-bold">{location}</span></h3>
                            <h3>Distance: <span className="font-bold">{distance}</span></h3>
                            <p className="">Description : <span className="font-bold">{description}</span></p>
                            <h2>Total Registration Count : <span className="font-bold">{reg_count}</span></h2>
                        </div >
                        <div className="text-center mt-5">
                            <button onClick={handleGoReg} className="btn btn-neutral">Registration</button >

                        </div>
                    </div >
                </div >
            </div >
        </div >
    );
};

export default MarathonDetails;