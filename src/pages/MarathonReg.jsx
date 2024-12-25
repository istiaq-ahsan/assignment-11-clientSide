import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from "react-datepicker";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MarathonReg = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const [MarathonInfo, setMarathonInfo] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        fetchMarathonInfo()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const fetchMarathonInfo = async () => {
        const { data } = await axiosSecure.get(`/marathon-details/${id}`)
        setMarathonInfo(data);

    }

    const { title,
        _id,
        marathonStartDate,
        creator,
    } = MarathonInfo || {}

    const handleAddMarathon = async (e) => {
        e.preventDefault();

        const form = e.target
        const email = form.email.value
        const title = form.title.value

        const firstName = form.firstName.value
        const lastName = form.lastName.value
        const contact = form.contact.value
        const additionalInfo = form.additionalInfo.value
        const marathonId = _id

        if (user.email === creator?.email) {
            return toast.error("Action not permitted")
        }

        const formData = {
            marathonId,
            title,
            email,
            firstName,
            lastName,
            contact,
            additionalInfo,
            marathonStartDate,
            organizer: creator?.email,
        }

        try {
            await axiosSecure.post(`/marathon-reg`, formData)
            toast.success("Marathon Added Successfully");
            navigate("/myApplyList");
        } catch (err) {

            toast.error(err.message);
        }
    }

    return (
        <div>
            <div className="w-11/12 md:w-4/5 mx-auto py-12">
                <div className="text-center text-gray-900">
                    <h1 className="text-4xl md:text-5xl font-bold">{title} Registration Form</h1>
                    <p className="text-base my-5">
                        Provide the details of your marathon to share it with participants. Fill in all fields to ensure clarity and accuracy.
                    </p>
                </div>
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                    <form onSubmit={handleAddMarathon} className="card-body">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            {/* Marathon Title */}
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Marathon Title</span>
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    defaultValue={title}
                                    readOnly
                                    className="input input-bordered"
                                    required
                                />
                            </div>


                            {/* Marathon Start Date */}
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Marathon Start Date</span>
                                </label>
                                <DatePicker
                                    className="input input-bordered w-full"
                                    selected={marathonStartDate}
                                    readOnly

                                />
                            </div>

                            {/* Location */}
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="Enter location"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            {/* Running Distance */}
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Enter location"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Contact Number</span>
                                </label>
                                <input
                                    type="number"
                                    name="contact"
                                    placeholder="Enter Contact Number"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

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
                        </div>


                        {/* Description */}
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Additional Information</span>
                            </label>
                            <textarea
                                name="additionalInfo"
                                placeholder="Provide a detailed information"
                                className="textarea textarea-bordered"
                                required
                            ></textarea>
                        </div>


                        {/* Submit Button */}
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Registration</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MarathonReg;