import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import ApplyListTable from "../components/ApplyListTable";
import { toast } from "react-toastify";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";


const MyApplyList = () => {
    const axiosSecure = useAxiosSecure();

    const { user } = useContext(AuthContext);
    const [applyList, setApplyList] = useState([]);
    const [search, setSearch] = useState('');


    useEffect(() => {
        fetchMyApplyList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search, user])

    const fetchMyApplyList = async () => {
        const { data } = await axiosSecure.get(`/my-apply/${user?.email}?search=${search}`)
        setApplyList(data);

    }

    const handleDelete = async (id) => {

        try {
            const { data } = await axiosSecure.delete(`/applyInfo/${id}`)
            toast.success("Deleted Successfully")
            fetchMyApplyList();
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <section className='container px-4 mx-auto pt-12'>
            <Helmet>
                <title>SprintSphere | My Apply</title>
            </Helmet>
            <div className="flex flex-col gap-5 md:gap-0 md:flex-row md:justify-between">
                <div className='flex items-center gap-x-3 mx-auto md:mx-0'>
                    <h2 className='text-lg font-medium text-gray-800 '>
                        My Applied Marathon<span className='px-3 py-2 border border-blue-500 text-xs ml-3 text-blue-900 bg-blue-100 rounded-full '>
                            {applyList.length}
                        </span></h2>
                </div>


                <div className='flex flex-col md:flex-row 
                justify-center items-center gap-5 '>

                    <div className='flex overflow-hidden border bg-white
                    rounded-lg focus-within:ring focus-within:ring-opacity-40
                     focus-within:border-blue-400 focus-within:ring-blue-300'>
                        <input
                            className='px-6 py-3 text-gray-700 placeholder-gray-500
                             bg-white outline-none focus:placeholder-transparent'
                            type='text'
                            name='search'
                            onChange={e => setSearch(e.target.value)}
                            value={search}
                            placeholder='Enter Marathon Title'
                            aria-label='Enter Marathon Title'

                        />

                        <button onClick={() => setSearch('')}
                            className='px-4 m-1 rounded-md text-xs 
                        font-medium tracking-wider text-gray-100 
                        uppercase transition-colors duration-300 
                        transform bg-gray-700 hover:bg-gray-500
                         focus:bg-gray-600 focus:outline-none'>
                            Reset
                        </button>
                    </div>
                </div>
            </div>

            <div className="py-10 mx-3">
                <div className="overflow-x-auto">
                    <table className="table w-11/12 mx-auto border-collapse bg-white shadow-lg">
                        <thead className="bg-gray-700 text-white">
                            <tr className="text-center">
                                <th className="px-4 py-3 text-sm font-semibold">Title</th>
                                <th className="px-4 py-3 text-sm font-semibold">Marathon Start</th>
                                <th className="px-4 py-3 text-sm font-semibold">First Name</th>
                                <th className="px-4 py-3 text-sm font-semibold">Last Name</th>
                                <th className="px-4 py-3 text-sm font-semibold">Contact</th>
                                <th className="px-4 py-3 text-sm font-semibold">Update</th>
                                <th className="px-4 py-3 text-sm font-semibold">Delete</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                applyList.map((apply, index) => <ApplyListTable
                                    key={index}
                                    apply={apply}
                                    handleDelete={handleDelete}
                                ></ApplyListTable>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </section >
    );
};

export default MyApplyList;