"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Basic Swiper styles
import 'swiper/css/navigation'; // Navigation module
import 'swiper/css/scrollbar'; // Scrollbar module
import 'swiper/css/free-mode'; // FreeMode module
import SwiperCore, { Navigation, Scrollbar, FreeMode } from 'swiper/modules';



const SwiperCarousel = ({ images }) => {
  return (
    <div className="container mx-auto mt-[-80px] rounded-lg px-3 block ">
      <Swiper
      slidesPerView={4}
      className="w-full h-full rounded-lg"
      navigation={true}
      scrollbar={true}
      freeMode={true}
      modules={[Navigation, Scrollbar, FreeMode]} // Explicitly pass modules
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
     
      breakpoints={{
        300: {
          slidesPerView: 1,
         
        },
        768: {
          slidesPerView: 3,
        
        },
        1024: {
          slidesPerView: 3,
         
          
        },
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="flex justify-center items-center rounded-lg">
          <img
            className="block w-full h-full object-cover"
            src={image}
            alt={`Slide ${index}`}
            loading="lazy"
          />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default SwiperCarousel;
