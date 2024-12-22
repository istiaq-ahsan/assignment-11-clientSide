import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import ApplyListTable from "../components/ApplyListTable";
import { toast } from "react-toastify";

const MyApplyList = () => {

    const { user } = useContext(AuthContext);
    const [applyList, setApplyList] = useState([]);

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
            <div className='flex items-center gap-x-3'>
                <h2 className='text-lg font-medium text-gray-800 '>My Applied Marathon</h2>

                <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                    {applyList.length}
                </span>
            </div>

            <div className='flex flex-col mt-6'>
                <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                        <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-200'>
                                <thead className='bg-gray-50'>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <div className='flex items-center gap-x-3'>
                                                <span>Title</span>
                                            </div>
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <span>Marathon Start</span>
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <span>First Name</span>
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <span>Last Name</span>
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <span>Contact</span>
                                        </th>


                                        <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            Edit
                                        </th>

                                        <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            Delete
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='bg-white divide-y divide-gray-200 '>
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
                </div>
            </div>
        </section>
    );
};

export default MyApplyList;