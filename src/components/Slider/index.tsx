import { FC, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/scss";

import style from "./styles.module.scss";

interface SliderProps {
  images: string[];
}

const Slider: FC<SliderProps> = ({ images }) => {
  return (
    <Swiper
      grabCursor={true}
      modules={[Navigation]}
      breakpoints={{
        1336: {
          slidesPerView: 5,
        },
        1024: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
        490: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      }}
    >
      {images?.map((imgUrl, index) => (
        <SwiperSlide className={style.imageSlide} key={index}>
          <div className={style.slideImg}>
            <img className={style.img} src={imgUrl} alt="product" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default memo(Slider);
