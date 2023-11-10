import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/home/Carousel/01.jpg'
import img2 from '../../../assets/home/Carousel/02.jpg'
import img3 from '../../../assets/home/Carousel/03.png'
import img4 from '../../../assets/home/Carousel/04.jpg'
import img5 from '../../../assets/home/Carousel/05.png'
import img6 from '../../../assets/home/Carousel/06.png'

const Banner = () => {
    
    return (
        <Carousel autoPlay infiniteLoop interval={3000}>
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />
            </div>
            <div>
                <img src={img5} />
            </div>
            <div>
                <img src={img6} />
            </div>
        </Carousel>
    );
};

export default Banner;