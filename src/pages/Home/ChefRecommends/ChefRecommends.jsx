import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import salad from '../../../assets/home/Category/slide1.jpg'


const ChefRecommends = () => {
    return (
        <section>
            <SectionTitle
                subHeading={"---Should Try---"}
                heading={"CHEF RECOMMENDS"}
            >
            </SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* card-1 */}
                <div className="bg-[#F3F3F3]">
                    <div>
                        <img className="h-[300px] w-full object-cover" src={salad} alt="" />
                    </div>
                    <div className="text-center px-6 py-8">
                        <h3 className="text-2xl font-semibold mb-2">Caeser Salad</h3>
                        <p className="text-lg mb-4">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className="btn text-[#BB8506] bg-[#E8E8E8] border-b-4 border-b-[#BB8506]">Add To Cart</button>
                    </div>
                </div>
                {/* card-2 */}
                <div className="bg-[#F3F3F3]">
                    <div>
                        <img className="h-[300px] w-full object-cover" src={salad} alt="" />
                    </div>
                    <div className="text-center px-6 py-8">
                        <h3 className="text-2xl font-semibold mb-2">Caeser Salad</h3>
                        <p className="text-lg mb-4">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className="btn text-[#BB8506] bg-black ">Add To Cart</button>
                    </div>
                </div>
                {/* card-3 */}
                <div className="bg-[#F3F3F3]">
                    <div>
                        <img className="h-[300px] w-full object-cover" src={salad} alt="" />
                    </div>
                    <div className="text-center px-6 py-8">
                        <h3 className="text-2xl font-semibold mb-2">Caeser Salad</h3>
                        <p className="text-lg mb-4">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className="btn text-[#BB8506] bg-[#E8E8E8] border-b-4 border-b-[#BB8506]">Add To Cart</button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ChefRecommends;