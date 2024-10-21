import { useLoaderData } from "react-router-dom";
import BlogDet from "./BlogDet";

const Blog = () => {
    const blogs = useLoaderData();
    
    return (
        <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-3xl font-bold font-serif text-center">All Blogs</h1>
            <p className="max-w-2xl text-center mx-auto text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sit reiciendis architecto deleniti eveniet suscipit magnam recusandae exercitationem incidunt possimus.</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    blogs.map(blog => <BlogDet key={blog.id} blog={blog}></BlogDet>)
                }

            </div>
        </div>
    );
};

export default Blog;