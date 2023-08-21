import SectionsTitle from "../../../components/SectionsTitle/SectionsTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reveiw.json')
            .then(res => res.json())
            .then(data=> setReviews(data))
        
    }, [])
    return (
        <section className="my-20">
            <SectionsTitle
                subHeading="What Our Client Says"
                heading={'Happy Clients'}

            ></SectionsTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center mx-24 my-16">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            ></Rating>
                            <p className="py-8">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{ review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;