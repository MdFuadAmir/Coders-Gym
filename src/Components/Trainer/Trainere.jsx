import { Link } from "react-router-dom";


const Trainere = ({trainer}) => {
    return (
        <div className="p-2 border-2 rounded-md space-y-2">
            <h1 className="font-bold text-xl"> Full Name: {trainer.name}</h1>
            <h1 className="font-medium">User Name: {trainer.username}</h1>
            <p className="font-medium">Email: {trainer.email}</p>
            <p className="font-medium">Phone: {trainer.phone}</p>
            <p className="font-medium">Address: {trainer.address.street}</p>
            <Link to={`/trainer/${trainer.id}`} className="btn">Show Details</Link>
        </div>
    );
};

export default Trainere;