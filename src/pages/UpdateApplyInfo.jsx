import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";

const UpdateApplyInfo = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdateMarathon = async (e) => {
        e.preventDefault();

        const form = e.target
        const email = form.email.value
        const title = form.title.value

        const firstName = form.firstName.value
        const lastName = form.lastName.value
        const contact = form.contact.value
        const additionalInfo = form.additionalInfo.value




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
            await axios.put(`${import.meta.env.VITE_API_URL}/update-info`, formData)
            toast.success("Marathon Added Successfully");
            navigate("/myApplyList");
        } catch (err) {
            console.log(err.message);
            toast.error(err.message);
        }
    }

    return (
        <div>
            <div className="w-11/12 md:w-4/5 mx-auto">
                <div className="text-center text-gray-900">
                    <h1 className="text-5xl font-bold"> Update Form</h1>
                    <p className="text-base my-5">
                        Provide the details of your marathon to share it with participants. Fill in all fields to ensure clarity and accuracy.
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
                            <button className="btn btn-neutral">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateApplyInfo;