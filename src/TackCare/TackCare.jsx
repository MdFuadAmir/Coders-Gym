import img from"../assets/2-D6fIL54y.png"

const TackCare = () => {
    return (
        <div className="px-4 py-12 max-w-6xl mx-auto bg-gray-200/20">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-6">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="space-y-6 p-4">
                    <h1 className="text-3xl md:text-4xl font-bold font-serif">The Importants To Take Care Of Yourself</h1>
                    <p>The Importants To Take Care Of Yourself Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam obcaecati sequi odio dolore officia magni reiciendis, architecto, eos, aut asperiores reprehenderit quas rerum omnis facilis quam eius doloribus maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae vero inventore assumenda ducimus alias doloribus.</p>
                    <button className="primary-btn">Explore More</button>

                </div>
            </div>
            
        </div>
    );
};

export default TackCare;