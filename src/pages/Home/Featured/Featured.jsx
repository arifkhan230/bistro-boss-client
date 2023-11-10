import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <section className="featured-item bg-fixed bg-[#000000b3] bg-blend-overlay bg-cover text-white pt-8 my-20">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}>
            </SectionTitle>
            <div className="md:flex gap-12 justify-center items-center pt-12 pb-20  px-36">
                <div className="">
                    <img className="" src={featuredImg} alt="" />
                </div>
                <div className="">
                    <p>Aug 20 2029</p>
                    <p className="uppercase">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rem dolore id consequuntur dolorem laudantium suscipit quaerat omnis adipisci ipsa, odit non earum quo eius quae unde doloribus aspernatur! Voluptatem sit dignissimos delectus amet eum eos, cumque qui vitae expedita architecto nisi reprehenderit recusandae, fuga corrupti voluptas accusamus adipisci ipsa.</p>
                    <button className="btn btn-outline mt-4 border-0 border-b-2 text-white "  >Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;