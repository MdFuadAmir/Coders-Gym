import { useLoaderData } from "react-router-dom";


const TrainerDetails = () => {
    const trainers = useLoaderData();
    const {name,email,address,phone,username} = trainers;
    return (
        <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-2xl font-bold font-serif text-center mb-4"><span className="text-green-400">{name}</span> Details</h1>
            <div className="border-2 p-2 rounded-md space-y-4 text-center">
            <h1 className="font-bold text-xl"> Full Name: {name}</h1>
            <h1 className="font-medium">User Name: {username}</h1>
            <p className="font-medium">Email: {email}</p>
            <p className="font-medium">Phone: {phone}</p>
            <p className="font-medium">Address: {address.street}</p>

            </div>
        </div>
    );
};

export default TrainerDetails;