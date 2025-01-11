import { format } from "date-fns";
import { Link } from "react-router-dom";

const MarathonsCard = ({ marathon }) => {
  const { _id, title, image, startRegistration, endRegistration } =
    marathon || {};

  return (
    <div className="card bg-green-100 shadow-xl hover:scale-[1.05] transition-all">
      <div className="p-3">
        <figure>
          <img
            className="rounded-xl md:h-[150px] lg:h-[180px] w-full"
            referrerPolicy="no-referrer"
            src={image}
            alt="Shoes"
          />
        </figure>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="text-xs md:text-base">
          <p>Start Registration: {format(new Date(startRegistration), "P")}</p>
          <p>End Registration: {format(new Date(endRegistration), "P")}</p>
        </div>
        <div className="card-actions justify-start">
          <Link
            to={`/marathonDetails/${_id}`}
            className="btn btn-neutral btn-sm lg:btn-md"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MarathonsCard;
