import { useLoaderData } from "react-router-dom";


const BlogDetails = () => {
    const blog = useLoaderData();
    return (
        <div className="max-w-6xl mx-auto p-4">
            <h1 className="font-medium text-green-400 text-center text-3xl">Blog of id: {blog.id}</h1>
            <div className="text-center mt-4 border-2 rounded-md p-2 space-y-3">
            <h1 className="text-xl font-semibold">Blog Title: {blog.title}</h1>
            <p className="max-w-3xl text-center mx-auto">{blog.body}</p>
            </div>
        </div>
    );
};

export default BlogDetails;