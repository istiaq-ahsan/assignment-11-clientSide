import axios from "axios";
import { useEffect, useState } from "react";
import SixMarathonCard from "./SixMarathonCard";


const SixMarathon = () => {

    const [sixMarathon, setSixMarathon] = useState([]);

    useEffect(() => {
        fetchSixMarathon()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchSixMarathon = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/six-marathons`, sixMarathon)
        setSixMarathon(data);
        console.log(data);
    }

    return (
        <div>
            <div className="text-center">
                <h1 className="text-5xl font-bold">Explore Our Events</h1>
                <p className="text-base my-10 w-4/5 mx-auto">
                    Join us for thrilling marathons and races across the country!
                    Whether you're a seasoned runner or a first-time participant,
                    our events cater to all levels.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-4/5 mx-auto">
                {
                    sixMarathon.map((marathon, index) => <SixMarathonCard
                        key={index}
                        marathon={marathon}
                    ></SixMarathonCard>)
                }
            </div>
        </div>
    );
};

export default SixMarathon;