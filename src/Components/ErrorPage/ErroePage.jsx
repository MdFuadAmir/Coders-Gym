import { useRouteError } from "react-router-dom";


const ErroePage = () => {
    const error = useRouteError();
    return (
        <div className="h-screen w-full items-center flex justify-center flex-col">
            <h2>Oops!!!</h2>
            <p>{error.statusText || error.massage}</p>
        </div>
    );
};

export default ErroePage;