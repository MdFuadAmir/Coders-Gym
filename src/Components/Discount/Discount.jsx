

const Discount = () => {
    return (
        <div className="max-w-6xl mx-auto bg-gray-300/20 flex flex-col items-center justify-center py-12 rounded-2xl space-y-6 mb-12">
            <h1 className="font-bold font-serif text-5xl text-center max-w-2xl">Get 20% Discount On Your First Order, Are You Ready To Buy</h1>
            <p>We will make sure you get the right and the best quality products for your workout</p>
            <div className="flex items-center justify-center gap-8">
                <button className="primary-btn">Learn More</button>
                <button className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block">
                        Say in Touch
                    </button>

            </div>

                        
        </div>
    );
};

export default Discount;