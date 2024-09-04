import TackCare from "../../TackCare/TackCare";
import AboutUs from "../AboutUs/AboutUs";
import Hero from "../Hero/Hero";
import Offer from "../Offer/Offer";
import TabCamp from "../Tab/TabCamp";

const Home = () => {
    return (
        <div>
            <Hero/>
            <Offer/>
            <TackCare/>
            <TabCamp/>
            <AboutUs/>
        </div>
    );
};

export default Home;