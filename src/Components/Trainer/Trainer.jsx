import { useLoaderData } from "react-router-dom";
import Trainere from "./Trainere";


const Trainer = () => {
    const trainers = useLoaderData();
    return (
        <div className="max-w-6xl mx-auto py-12">
                <h1 className="text-3xl font-bold font-serif text-center">All trainers</h1>
                <p className="text-center max-w-2xl mx-auto text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, praesentium doloremque doloribus odio a modi repudiandae unde reprehenderit ratione hic!</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    {
                        trainers.map(trainer => <Trainere key={trainer.id} trainer={trainer}></Trainere>)
                    }
                </div>
            
            
        </div>
    );
};

export default Trainer;