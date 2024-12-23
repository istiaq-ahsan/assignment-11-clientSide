import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import ApplyListTable from "../components/ApplyListTable";
import { toast } from "react-toastify";

const MyApplyList = () => {

    const { user } = useContext(AuthContext);
    const [applyList, setApplyList] = useState([]);
    const [search, setSearch] = useState('');


    useEffect(() => {
        fetchMyApplyList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchMyApplyList = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/my-apply/${user?.email}`)
        setApplyList(data);
        console.log(applyList);
    }

    const handleDelete = async (id) => {
        console.log(id);
        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/applyInfo/${id}`)
            toast.success("Deleted Successfully")
            fetchMyApplyList();
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <section className='container px-4 mx-auto pt-12'>
            <div className="flex justify-between">
                <div className='flex items-center gap-x-3'>
                    <h2 className='text-lg font-medium text-gray-800 '>
                        My Applied Marathon<span className='px-4 py-2 text-xs ml-3 text-blue-600 bg-blue-100 rounded-full '>
                            {applyList.length}
                        </span></h2>
                </div>


                <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>

                    <div className='flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                        <input
                            className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                            type='text'
                            name='search'
                            onChange={e => setSearch(e.target.value)}
                            value={search}
                            placeholder='Enter Marathon Title'
                            aria-label='Enter Marathon Title'
                        />

                        <button className='p-2 text-xs font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                            Search
                        </button>
                    </div>
                    <button className='btn'>Reset</button>
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