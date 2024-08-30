import { IoBarbellSharp } from "react-icons/io5";
import { GiGymBag } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
const Offer = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="space-y-4 p-4">
                    <h1 className="text-3xl font-bold font-serif">What we offer for you</h1>
                    <p className="font-serif text-gray-500">It is a long established fact that a reader readable.</p>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    {/* 1 */}
                    <div className="p-4 bg-gray-400/20 rounded-2xl space-y-4 hover:bg-white hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)] duration-300">
                    <GrYoga className="text-4xl"/>
                    <h1 className="text-3xl font-bold font-serif">Yoga Equipments</h1>
                    <p className="font-serif text-gray-500">It is a long established fact that a reader readable.</p>
                    </div>
                    {/* 2 */}
                    <div className="p-4 bg-gray-400/20 rounded-2xl space-y-4 hover:bg-white hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)] duration-300">
                    <IoBarbellSharp className="text-4xl"/>
                    <h1 className="text-3xl font-bold font-serif">Muscles Equipments</h1>
                    <p className="font-serif text-gray-500">It is a long established fact that a reader readable.</p>
                    </div>
                    {/* 3 */}
                    <div className="p-4 bg-gray-400/20 rounded-2xl space-y-4 hover:bg-white hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)] duration-300">
                    <GiGymBag className="text-4xl"/>
                    <h1 className="text-3xl font-bold font-serif">Fitness Equipments</h1>
                    <p className="font-serif text-gray-500">It is a long established fact that a reader readable.</p>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Offer;