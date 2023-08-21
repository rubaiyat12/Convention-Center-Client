import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/images/banner.png';
import img2 from '../../../assets/images/5.png';
import img3 from '../../../assets/images/6.png';
import img4 from '../../../assets/images/7.png';
import img5 from '../../../assets/images/1.jpg';


const Banner = () => {
    return (
        <Carousel>
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
        </Carousel>
    );
};

export default Banner;