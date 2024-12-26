import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const UpdatePostedMarathon = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [marathonDate, setMarathonDate] = useState(new Date());
    const [marathonInfo, setMarathonInfo] = useState();
    const { id } = useParams();

    useEffect(() => {
        fetchMarathonInfo()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const { title,
        location,
        distance,
        description,
        image,
    } = marathonInfo || {}

    const fetchMarathonInfo = async () => {
        const { data } = await axiosSecure.get(`/marathon-details/${id}`)
        setMarathonInfo(data);
        setStartDate(data.startRegistration);
        setEndDate(data.endRegistration);
        setMarathonDate(data.marathonStartDate);

    }

    const handleUpdateMarathon = async (e) => {
        e.preventDefault();

        const form = e.target
        const email = form.email.value
        const title = form.title.value
        const startRegistration = startDate
        const endRegistration = endDate
        const marathonStartDate = marathonDate
        const location = form.location.value
        const distance = form.distance.value
        const description = form.description.value
        const image = form.image.value

        const formData = {
            title,
            creator: {
                email,
                name: user?.displayName,
                photo: user?.photoURL,
            },
            startRegistration,
            endRegistration,
            marathonStartDate,
            location,
            distance,
            description,
            image
        }

        try {
            await axiosSecure.put(`/update-marathonInfo/${id}`, formData)
            toast.success("Update Information Successfully");
            navigate("/myMarathonList");
        } catch (err) {

            toast.error(err.message);
        }
    }

    return (
        <div className="py-16">
            <Helmet>
                <title>SprintSphere | Update Marathon</title>
            </Helmet>
            <div className="w-11/12 md:w-4/5 mx-auto">
                <div className="text-center text-gray-900">
                    <h1 className="text-5xl font-bold">Update Marathon Info</h1>
                    <p className="text-base my-5">
                        Provide the details of your marathon to share it with participants. Fill in all fields to ensure clarity and accuracy.
                    </p>
                </div>
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                    <form onSubmit={handleUpdateMarathon} className="card-body">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* user email */}
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">User Email</span>
                                </label>
                                <input
                                    type='email'
                                    name="email"
                                    defaultValue={user?.email}
                                    readOnly
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            {/* Marathon Title */}
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Marathon Title</span>
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    defaultValue={title}
                                    placeholder="Enter marathon title"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            {/* Start Registration Date */}
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Start Registration Date</span>
                                </label>
                                <DatePicker
                                    className="input input-bordered w-full"
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}


                                />
                            </div>

                            {/* End Registration Date */}
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">End Registration Date</span>
                                </label>
                                <DatePicker
                                    className="input input-bordered w-full"
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}

                                />
                            </div>

                            {/* Marathon Start Date */}
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Marathon Start Date</span>
                                </label>
                                <DatePicker
                                    className="input input-bordered w-full"
                                    selected={marathonDate}
                                    onChange={(date) => setMarathonDate(date)}

                                />
                            </div>

                            {/* Location */}
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    defaultValue={location}
                                    placeholder="Enter location"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            {/* Running Distance */}
                            {distance && (
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text">Running Distance</span>
                                    </label>
                                    <select
                                        name="distance"
                                        className="select select-bordered"
                                        defaultValue={distance}
                                        required
                                    >
                                        <option value="25k">25k</option>
                                        <option value="10k">10k</option>
                                        <option value="3k">3k</option>
                                    </select>
                                </div>
                            )}
                        </div>

                        {/* Description */}
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea
                                name="description"
                                defaultValue={description}
                                placeholder="Provide a detailed description"
                                className="textarea textarea-bordered"
                                required
                            ></textarea>
                        </div>

                        {/* Marathon Image */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Marathon Image URL</span>
                            </label>
                            <input
                                type="text"
                                name="image"
                                defaultValue={image}
                                placeholder="Enter image URL"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Update Marathon</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdatePostedMarathon;