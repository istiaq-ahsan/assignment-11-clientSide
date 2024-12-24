import axios from "axios";
import { useEffect, useState } from "react";
import MarathonsCard from "../components/marathonsCard";

const AllMarathons = () => {

    const [marathons, setMarathons] = useState([]);

    useEffect(() => {
        fetchAllMarathons()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchAllMarathons = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-marathons`, marathons)
        setMarathons(data);
        console.log(data);
    }

    return (
        <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-4/5 mx-auto">
                {
                    marathons.map((marathon, index) => <MarathonsCard
                        key={index}
                        marathon={marathon}
                    ></MarathonsCard>)
                }
            </div>
        </div>
    );
};

export default AllMarathons;