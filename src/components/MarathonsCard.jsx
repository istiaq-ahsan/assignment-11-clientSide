import { format } from 'date-fns'
import { Link } from 'react-router-dom';

const MarathonsCard = ({ marathon }) => {

    const { _id, title, image, startRegistration, endRegistration } = marathon || {}

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className='p-3'>
                <figure>
                    <img className='rounded-xl h-[220px] w-full'
                        src={image}
                        alt="Shoes" />
                </figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Start Registration: {format(new Date(startRegistration), 'P')}</p>
                <p>End Registration: {format(new Date(endRegistration), 'P')}</p>
                <div className="card-actions justify-end">
                    <Link to={`/marathonDetails/${_id}`} className="btn btn-neutral">See More</Link>
                </div>
            </div>
        </div>
    );
};

export default MarathonsCard;