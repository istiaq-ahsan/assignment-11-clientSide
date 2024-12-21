
const AddMarathon = () => {

    const handleAddMarathon = e => {
        e.preventDefault();
    }

    return (
        <div>
            <div className="w-11/12 md:w-4/5 mx-auto">
                <div className="text-center text-gray-900">
                    <h1 className="text-5xl font-bold">Create a New Marathon</h1>
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
                                <input
                                    type="date"
                                    name="startRegistration"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            {/* End Registration Date */}
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">End Registration Date</span>
                                </label>
                                <input
                                    type="date"
                                    name="endRegistration"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            {/* Marathon Start Date */}
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Marathon Start Date</span>
                                </label>
                                <input
                                    type="date"
                                    name="startDate"
                                    className="input input-bordered"
                                    required
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
                                    placeholder="Enter location"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            {/* Running Distance */}
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Running Distance</span>
                                </label>
                                <select
                                    name="distance"
                                    className="select select-bordered"
                                    defaultValue=""
                                    required
                                >
                                    <option value="" disabled selected>
                                        Select distance
                                    </option>
                                    <option value="25k">25k</option>
                                    <option value="10k">10k</option>
                                    <option value="3k">3k</option>
                                </select>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea
                                name="description"
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
                                placeholder="Enter image URL"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Create Marathon</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddMarathon;