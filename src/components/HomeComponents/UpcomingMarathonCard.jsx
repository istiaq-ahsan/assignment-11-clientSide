import { format } from "date-fns";

const UpcomingMarathonCard = ({ upcomingMarathon }) => {

    const { _id, title, image, location, marathonStartDate, endRegistration } = upcomingMarathon || {}


    return (
        <div className="w-11/12 mx-auto py-2 hover:scale-[1.05] transition-all">
            <div className="rounded-2xl bg-base-100 shadow-xl border border-gray-300 gap-3
            flex flex-col md:flex-row items-center h-[350px] md:h-[200px] w-[300px] md:w-[440px]">
                <div className="md:w-1/2">
                    <figure>
                        <img className="p-2 md:h-[180px] w-full rounded-xl"
                            referrerPolicy='no-referrer'
                            src={image}
                            alt="image" />
                    </figure>
                </div>
                <div className=" md:w-1/2">
                    <h2 className="card-title font-bold">{title}</h2>
                    <h2 className="text-lg font-medium">{location}</h2>
                    <p className="mt-5">Marathon Start: <span className="font-medium">{format(new Date(marathonStartDate), 'P')}</span></p>
                    <p className="mb-5">End Registration: <span className="font-medium text-red-600">{format(new Date(endRegistration), 'P')} </span></p>


                </div>
            </div>
        </div>
    );
};

export default UpcomingMarathonCard;
