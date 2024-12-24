import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import MarathonListTable from "../components/MarathonListTable";
import { toast } from "react-toastify";


const MyMarathonList = () => {

    const { user } = useContext(AuthContext);
    const [marathonsList, setMarathonsList] = useState([]);
    const [sort, setSort] = useState('');

    useEffect(() => {
        fetchMyMarathonsList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sort, user])

    const fetchMyMarathonsList = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/my-marathons/${user?.email}?sort=${sort}`)
        setMarathonsList(data);
        console.log(marathonsList);
    }

    const handleDelete = async (id) => {
        console.log(id);
        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/postedMarathon/${id}`)
            toast.success("Deleted Successfully")
            fetchMyMarathonsList();
        } catch (err) {
            console.log(err.message);
        }
    }



    return (
        <section className='container px-4 mx-auto pt-12'>
            <div className="flex flex-col md:flex-row md:justify-between gap-5 md:gap-0">
                <div className='flex items-center gap-x-3'>
                    <h2 className='text-lg font-medium text-gray-800 '>My Posted Jobs

                        <span className='px-3 py-2 border border-blue-500 ml-2 text-xs text-blue-900 bg-blue-100 rounded-full '>
                            {marathonsList.length}
                        </span></h2>
                </div>
                <div className="mx-auto md:mx-0">
                    <select
                        name='category'
                        id='category'
                        onChange={(e) => setSort(e.target.value)}
                        value={sort}
                        className='py-3 px-2 border rounded-md'
                    >
                        <option value=''>Sort By Deadline</option>
                        <option value='dsc'>Descending Order</option>
                        <option value='asc'>Ascending Order</option>
                    </select>
                </div>
            </div>

            <div className="py-10 mx-3">
                <div className="overflow-x-auto">
                    <table className="table w-11/12 mx-auto border-collapse bg-white shadow-lg">
                        <thead className="bg-gray-700 text-white">
                            <tr className="text-center">
                                <th className="px-4 py-3 text-sm font-semibold">Title</th>
                                <th className="px-4 py-3 text-sm font-semibold">Marathon Start</th>
                                <th className="px-4 py-3 text-sm font-semibold">Location</th>
                                <th className="px-4 py-3 text-sm font-semibold">Distance</th>
                                <th className="px-4 py-3 text-sm font-semibold">Description</th>
                                <th className="px-4 py-3 text-sm font-semibold">Update</th>
                                <th className="px-4 py-3 text-sm font-semibold">Delete</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                marathonsList.map((marathon, index) => <MarathonListTable
                                    key={index}
                                    marathon={marathon}
                                    handleDelete={handleDelete}
                                ></MarathonListTable>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>


        </section>
    );
};

export default MyMarathonList;