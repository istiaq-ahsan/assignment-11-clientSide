import { format } from "date-fns";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Link } from "react-router-dom";

const SixMarathonCard = ({ marathon }) => {

    const { _id, title, image, marathonStartDate } = marathon || {}
    const startDate = new Date(marathonStartDate);

    return (
        <div className="card shadow-xl border border-gray-300 h-auto w-80">
            <div className="h-[50%] p-3">
                <figure>
                    <img className="h-[200px] w-full rounded-xl"
                        src={image}
                        alt="Shoes" />
                </figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h2 className="flex justify-between items-center font-semibold">Marathon Start :
                    <span className="text-center text-xs">
                        <CountdownCircleTimer
                            isPlaying
                            duration={
                                startDate > new Date()
                                    ? Math.floor((startDate - new Date()) / 1000)
                                    : 1
                            }
                            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                            colorsTime={[10, 5, 2, 0]}
                            size={90}
                            strokeWidth={6}
                        >
                            {({ remainingTime }) => {
                                if (startDate > new Date()) {
                                    const days = Math.floor(remainingTime / (24 * 60 * 60));
                                    const hours = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
                                    const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
                                    const seconds = remainingTime % 60;

                                    return (
                                        <div>
                                            {days > 0 && <p>{days}d</p>}
                                            <p>
                                                {hours}h {minutes}m {seconds}s
                                            </p>
                                        </div>
                                    );
                                } else {
                                    return <p>Already <br />Started!</p>;
                                }
                            }}
                        </CountdownCircleTimer>
                    </span>
                </h2>
                <div className="card-actions">
                    <Link to={`/marathonDetails/${_id}`} className="btn btn-neutral">See More</Link>
                </div>
            </div>
        </div>
    );
};

export default SixMarathonCard;