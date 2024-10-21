import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import Trainer from "../Components/Trainer/Trainer";
import Program from "../Components/Program/Program";
import Blog from "../Components/Blog/Blog";
import Pricing from "../Components/Pricing/Pricing";
import TrainerDetails from "../Components/TrainerDetails/TrainerDetails";
import BlogDetails from "../Components/BlogDetails/BlogDetails";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/trainer",
                loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
                element:<Trainer/>
            },
            {
                path:"/trainer/:trainerId",
                loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.trainerId}`),
                element:<TrainerDetails/>
            },
            {
                path:"/program",
                element:<Program/>
            },
            {
                path:"/blogs",
                loader:()=> fetch('https://jsonplaceholder.typicode.com/posts'),
                element:<Blog/>
            },
            {
                path:"/blogs/:blogsId",
                loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogsId}`),
                element: <BlogDetails/>
            },
            {
                path:"/pricing",
                element:<Pricing/>
            },
        ]
    }
])
export default router;