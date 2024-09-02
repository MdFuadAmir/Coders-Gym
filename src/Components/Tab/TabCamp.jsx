import image1 from"../../assets/1-BIkZI8kX (1).png"
import image2 from"../../assets/2-GA8HnIcz.png"
import image3 from"../../assets/3-qzw4f8AR.png"
import image4 from"../../assets/4-C2Y78JXs.png"

const allData = [
    {
        id:1,
        name:"Yoga Mat",
        category:"Muscles",
        img: image1
    },
    {
        id:2,
        name:"Fresh Air",
        category:"Yoga",
        img:image2
    },
    {
        id:3,
        name:"Body Yoga",
        category:"Yoga",
        img:image3
    },
    {
        id:4,
        name:"Dumbells",
        category:"Fitness",     
        img:image4
    },
    {
        id:5,
        name:"Yoga Mat",
        category:"Muscles",
        img:image1
    },
    {
        id:6,
        name:"Fresh Air",
        category:"Yoga",
        img:image2
    },
    {
        id:7,
        name:"Body Yoga",
        category:"Yoga",
        img:image3
    },
]

const TabCamp = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    allData.map((data)=>(<div key={data.id} className="p-4 border rounded-lg space-y-4">
                        <img src={data.img} alt="" />
                        <h1 className="text-xl font-bold font-serif">{data.name}</h1>
                        <p className="text-gray-500">{data.category}</p>
                    </div>))
                }

            </div>
            
            
        </div>
    );
};

export default TabCamp;