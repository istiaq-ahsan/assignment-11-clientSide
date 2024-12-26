import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import ApplicantTable from "../components/ApplicantTable";
import { Helmet } from "react-helmet-async";



const Dashboard = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const [applicants, setApplicants] = useState([]);
    useEffect(() => {
        fetchMyMarathonApplicant();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])
    const fetchMyMarathonApplicant = async () => {
        const { data } = await axiosSecure.get(`/myMarathonApplicant/${user?.email}`)
        setApplicants(data);
    }

    return (
        <div className="pt-12">
            <Helmet>
                <title>SprintSphere | Dashboard</title>
            </Helmet>
            <div className="hero w-11/12 mx-auto gap-5 flex flex-col lg:flex-row lg:justify-around lg:items-start">
                <div className="card bg-blue-100 hero-content 
                    flex-col border border-blue-300 md:col-span-1 p-10">
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-40 rounded-full ring ring-offset-2">
                            <img src={user?.photoURL} />
                        </div>
                    </div>

                    <div className="text-left">
                        <h1 className="text-xl">Name : {user?.displayName}</h1>
                        <p className="py-6">Email : {user?.email}</p>

                        <div className="my-5 text-center">
                            <Link to="/" className="btn btn-outline">Back to Home</Link>
                        </div>
                    </div>



                </div>

                <div className="w-full overflow-x-auto">
                    <h1 className="text-4xl mt-10 font-bold text-center">Marathon Applicant </h1>
                    <table className="table w-full border-collapse bg-white shadow-lg my-10">
                        <thead className="bg-gray-700 text-white">
                            <tr className="text-center">
                                <th className="px-4 py-3 text-sm font-semibold">Title</th>
                                <th className="px-4 py-3 text-sm font-semibold">First Name</th>
                                <th className="px-4 py-3 text-sm font-semibold">Last Name</th>
                                <th className="px-4 py-3 text-sm font-semibold">Contact</th>
                                <th className="px-4 py-3 text-sm font-semibold">Additional Info</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                applicants.map((applicant, index) => <ApplicantTable
                                    key={index}
                                    applicant={applicant}

                                ></ApplicantTable>)
                            }

                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    );
};

export default Dashboard;