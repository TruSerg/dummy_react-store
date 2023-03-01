import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useSwiper } from "swiper/react";

import "swiper/scss";
import "swiper/scss/free-mode";

import sprite from "../../static/sprite.svg";

import style from "./styles.module.scss";

interface SliderProps {
  images: string[];
}

const Slider: FC<SliderProps> = ({ images }) => {
  const swiper = useSwiper();
  return (
    <Swiper
      className={style.swiperSlider}
      grabCursor={true}
      modules={[Navigation]}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
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
      <svg className={style.sliderBtnRight} onClick={() => swiper.slideNext()}>
        <use href={sprite + "#i-arrow_btn"} />
      </svg>
      <svg className={style.sliderBtnLeft} onClick={() => swiper.slidePrev()}>
        <use href={sprite + "#i-arrow_btn"} />
      </svg>
      {images?.map((imgUrl) => (
        <SwiperSlide key={imgUrl}>
          <div className={style.images}>
            <img className={style.img} src={imgUrl} alt="product" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
