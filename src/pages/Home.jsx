import Banner from "../components/HomeComponents/Banner";
import Facilities from "../components/HomeComponents/Facilities";
import Faq from "../components/HomeComponents/Faq";
import SixMarathon from "../components/HomeComponents/SixMarathon";
import UpComingMarathon from "../components/HomeComponents/UpComingMarathon";
import Welcome from "../components/HomeComponents/Welcome";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Facilities></Facilities>
            <Welcome></Welcome>
            <SixMarathon></SixMarathon>
            <UpComingMarathon></UpComingMarathon>
            <Faq></Faq>
        </div>
    );
};

export default Home;