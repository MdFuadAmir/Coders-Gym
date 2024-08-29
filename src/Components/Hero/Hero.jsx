import { FaPlay } from "react-icons/fa";
import banner from"../../assets/dumbell-Bcy4gPfV.png"
const Hero = () => {
    return (
        <section className="bg-primary/5 py-12">
            <div className="flex flex-col-reverse md:flex-row max-w-6xl mx-auto items-center justify-between gap-6 p-4">
            {/* banner information */}
            <div className="w-full md:w-1/2 space-y-8 md:p-8">
                <h1 className="text-5xl font-bold font-serif">Gym Gives you the perfect <span className="text-primary">Health</span></h1>
                <p className="font-serif text-gray-700 w-full md:max-w-xl">It is a long established fact that a reader will be by readable content of a page when are the best product.Order Now</p>
                <div className="flex items-center gap-6">
                    <button className="primary-btn">Order Now</button>
                    <button className="flex items-center gap-2 font-mono font-semibold"><FaPlay/> Order Now</button>
                </div>
            </div>
            {/* banner image */}
            <div className="w-full md:w-1/2">
                <img src={banner} alt="" />
            </div>

            </div>
        </section>
    );
};

export default Hero;