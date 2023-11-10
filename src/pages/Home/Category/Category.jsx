import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
// import './styles.css';
import slide1 from '../../../assets/home/Category/slide1.jpg'
import slide2 from '../../../assets/home/Category/slide2.jpg'
import slide3 from '../../../assets/home/Category/slide3.jpg'
import slide4 from '../../../assets/home/Category/slide4.jpg'
import slide5 from '../../../assets/home/Category/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle 
            subHeading={"From 11.00am to 10.00pm"}
            heading={"ORDER ONLINE"}>

            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='text-4xl uppercase text-center text-white -mt-16' >Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-4xl uppercase text-center text-white -mt-16 ' >Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-4xl uppercase text-center text-white -mt-16 ' >pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='text-4xl uppercase text-center text-white -mt-16' >Deserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='text-4xl uppercase text-center text-white -mt-16' >Salads</h3>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;