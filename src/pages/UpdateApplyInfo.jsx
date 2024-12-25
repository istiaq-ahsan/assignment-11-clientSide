import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import useAxiosSecure from "../hooks/useAxiosSecure";

const UpdateApplyInfo = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [applyInfo, setApplyInfo] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetchApplyInfo()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const { title,

        marathonStartDate,
        firstName,
        lastName,
        contact,
        additionalInfo

    } = applyInfo || {}

    const fetchApplyInfo = async () => {
        const { data } = await axiosSecure.get(`/applyInfo/${id}`)
        setApplyInfo(data);
        console.log(applyInfo);
    }

    const handleUpdateMarathon = async (e) => {
        e.preventDefault();

        const form = e.target
        const email = form.email?.value
        const title = form.title?.value

        const firstName = form.firstName?.value
        const lastName = form.lastName?.value
        const contact = form.contact?.value
        const additionalInfo = form.additionalInfo?.value




        const formData = {

            title,
            email,
            firstName,
            lastName,
            contact,
            additionalInfo,
        }

        console.log(formData);

        try {
            await axiosSecure.put(`/update-applyInfo/${id}`, formData)
            toast.success("Update Information Successfully");
            navigate("/myApplyList");
        } catch (err) {
            console.log(err.message);
            toast.error(err.message);
        }
    }

    return (
        <div className="py-12">
            <div className="w-11/12 md:w-4/5 mx-auto">
                <div className="text-center text-gray-900">
                    <h1 className="text-4xl md:text-5xl font-bold"> Update Your Info</h1>
                    <p className="text-base my-5">
                        Provide the details of yourself to share it with Organizer. Fill in all fields to ensure clarity and accuracy.
                    </p>
                </div>
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                    <form onSubmit={handleUpdateMarathon} className="card-body">
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

                            {/* First Name */}
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    defaultValue={firstName}
                                    placeholder="Enter location"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            {/* Last Name */}
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    defaultValue={lastName}
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
                                    defaultValue={contact}
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
                                defaultValue={additionalInfo}
                                placeholder="Provide a detailed information"
                                className="textarea textarea-bordered"
                                required
                            ></textarea>
                        </div>


                        {/* Submit Button */}
                        <div className="form-control mt-6">
                            <button onClick={() => handleUpdateMarathon()} className="btn btn-neutral">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateApplyInfo;