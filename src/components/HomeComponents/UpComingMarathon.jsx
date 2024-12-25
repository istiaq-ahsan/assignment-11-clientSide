import axios from "axios";
import { useEffect, useState } from "react";
import UpcomingMarathonCard from "./UpcomingMarathonCard";

const UpComingMarathon = () => {
    const [upcomingMarathons, setUpcomingMarathons] = useState([]);

    useEffect(() => {
        fetchUpcomingMarathons()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchUpcomingMarathons = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/upcoming-marathons`, upcomingMarathons)
        const currentDate = new Date();
        const runningMarathons = data.filter((marathon) => {
            const marathonDeadline = new Date(marathon.endRegistration);
            return marathonDeadline >= currentDate;
        });

        setUpcomingMarathons(runningMarathons.slice(0, 6));


    }

    return (
        <div className="">
            <div className="text-center">
                <h1 className="text-5xl font-bold">Upcoming Marathons</h1>
                <p className="text-base my-10 w-4/5 mx-auto">
                    Join us for thrilling marathons and races across the country!
                    Whether you're a seasoned runner or a first-time participant,
                    our events cater to all levels.
                </p>
            </div>


            <div className="flex overflow-x-auto gap-5 px-2 w-11/12 mx-auto">
                {
                    upcomingMarathons.map((upcomingMarathon, index) => <UpcomingMarathonCard
                        key={index}
                        upcomingMarathon={upcomingMarathon}
                    ></UpcomingMarathonCard>)
                }
            </div>

        </div>
    );
};

export default UpComingMarathon;