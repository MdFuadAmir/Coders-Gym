import { FaDumbbell } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
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

const Header = () => {
    const [open,setOpen] = useState(false);

    return (
        <>
        <nav>
            <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
                {/* logo section */}
                <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                    <FaDumbbell/>
                    <p>Coders</p>
                    <p className="text-secondary">Gym</p>
                </div>
                {/* menu section */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-6 text-gray-800 font-semibold">
                        {
                            navberMenu.map((menu) =>(<li key={menu.id}><Link className="inline-block py-1 px-3 hover:text-primary duration-300" to={menu.path}>{menu.name}</Link></li>))
                        }
                    </ul>
                </div>
                {/* icon  or login section */}
                <div className="flex items-center gap-4">
                    <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2">
                        <CiSearch/>
                    </button>
                    <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2">
                        <LuShoppingCart/>
                    </button>
                    <button className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block">
                        Login
                    </button>
                    
                </div>
                {/* mobile menu section */}
                <div className="md:hidden" onClick={() =>setOpen(!open)}>
                    <HiOutlineMenuAlt3 className="text-3xl"/>
                </div>
            </div>
        </nav>
        {/* mobile sideber section */}
        <ResponsiveMenu open={open}/>
        </>
    );
};

export default Header;