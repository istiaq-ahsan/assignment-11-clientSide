import Banner from "../components/HomeComponents/Banner";
import Faq from "../components/HomeComponents/Faq";
import SixMarathon from "../components/HomeComponents/SixMarathon";
import UpComingMarathon from "../components/HomeComponents/UpComingMarathon";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SixMarathon></SixMarathon>
            <UpComingMarathon></UpComingMarathon>
            <Faq></Faq>
        </div>
    );
};

export default Home;