import profile from"../../assets/15-103x103.jpg"

const customerData =[
    {
        id:"1",
        name:"John Doe",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat odit minus dolor deserunt optio accusamus labore dolore laboriosam ad quae?",
        img: profile
    },
    {
        id:"2",
        name:"Steve Smith",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat odit minus dolor deserunt optio accusamus labore dolore laboriosam ad quae?",
        img:profile
    },
    {
        id:"3",
        name:"Kristen",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat odit minus dolor deserunt optio accusamus labore dolore laboriosam ad quae?",
        img:profile
    },
    {
        id:"4",
        name:"Ariana",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat odit minus dolor deserunt optio accusamus labore dolore laboriosam ad quae?",
        img:profile
    },
    {
        id:"5",
        name:"Zerin",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat odit minus dolor deserunt optio accusamus labore dolore laboriosam ad quae?",
        img:profile
    },
    {
        id:"6",
        name:"Mahmud",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat odit minus dolor deserunt optio accusamus labore dolore laboriosam ad quae?",
        img:profile
    },
]
const AboutUs = () => {
    return (
        <div className="max-w-6xl mx-auto py-12">
            <h1 className="w-full md:max-w-xl font-bold font-serif text-4xl">What Are The Costumer Saying About Us</h1>
            <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    customerData.map((data) =>(<div key={data.id} className="p-6 rounded-2xl bg-primary/10 shadow-xl">
                        <div className="flex items-center gap-4">
                            <img src={data.img} alt="" className="w-16 rounded-full"/>
                            <h1 className="font-bold font-serif text-xl">{data.name}</h1>
                        </div>
                        <div className="py-6">
                            <p>{data.description}</p>
                        </div>
                    </div>))
                }
                
            </div>
            
        </div>
    );
};

export default AboutUs;