import Banner from "../components/HomeComponents/Banner";
import Facilities from "../components/HomeComponents/Facilities";
import Faq from "../components/HomeComponents/Faq";
import SixMarathon from "../components/HomeComponents/SixMarathon";
import UpComingMarathon from "../components/HomeComponents/UpComingMarathon";
import Welcome from "../components/HomeComponents/Welcome";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>SprintSphere || Home</title>
            </Helmet>
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