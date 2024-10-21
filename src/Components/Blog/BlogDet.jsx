import { Link, useNavigate } from "react-router-dom";


const BlogDet = ({blog}) => {
    const navigate = useNavigate();
    const handelShowNavigate= () =>{
        navigate(`/blogs/${blog.id}`)
    }
    return (
        <div className="p-2 border-2 rounded-md">
            <p className="font-medium text-green-400">Blog of id: {blog.id}</p>
            <h1 className="text-xl font-semibold">{blog.title}</h1>
            <Link to={`/blogs/${blog.id}`} className="btn my-4">Show Details</Link>
            <button onClick={handelShowNavigate} className="btn">Show Navigate</button>
        </div>
    );
};

export default BlogDet;