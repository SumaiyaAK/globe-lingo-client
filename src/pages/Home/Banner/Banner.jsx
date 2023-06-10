import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



import banner from '../../../assets/pictures/npr.brightspotcdn.png'
import banner2 from '../../../assets/pictures/milesTone 10.jpg'
import banner3 from '../../../assets/pictures/languages3.png'
import banner4 from '../../../assets/pictures/lingo10.avif'

const Banner = () => {
    return (
        
        <Carousel>
            

            <div>
                <img src={banner4} />

            </div>
            <div className="h-60">
                <img className="" src={banner} />

            </div>
            <div>
                <img src={banner2} />

            </div>

            <div>
                <img src={banner3} />

            </div>
        </Carousel>
        
    );
};

export default Banner;