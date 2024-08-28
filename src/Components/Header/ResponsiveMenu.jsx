import {motion,AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const navberMenu =[
    {
        id:1,
        name:"Home",
        path:"/home"
    },
    {
        id:2,
        name:"Trainer",
        path:"/trainer"
    },
    {
        id:3,
        name:"Program",
        path:"/program"
    },
    {
        id:4,
        name:"Blogs",
        path:"/blogs"
    },
    {
        id:5,
        name:"Pricing",
        path:"/pricing"
    },
]

const ResponsiveMenu = ({open}) => {
    return (
       <AnimatePresence mode="wait">
        {
            open && (
                <motion.div
                initial={{opacity:0,y:-100}}
                animate={{opacity:1, y:0}}
                exit={{opacity:0, y:-100}}
                transition={{duration:0.3}}
                className=" absolute top-20 left-0 w-full h-screen z-10"
                >
                    <div className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl">
                        <ul className="flex flex-col justify-center items-center gap-10">
                            {
                                navberMenu.map((menu) =>(<div key={menu.id}>
                                    <li><Link to={menu.path}>{menu.name}</Link></li>
                                </div>))
                            }
                        </ul>
                    </div>

                </motion.div>
            )
        }

       </AnimatePresence>
    );
};

export default ResponsiveMenu;

// className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl"