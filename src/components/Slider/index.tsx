import { FC, memo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/scss";

import SliderButtonNext from "../Buttons/SliderButtons/SliderButtonNext";
import SliderButtonPrev from "../Buttons/SliderButtons/SliderButtonPrev";

import style from "./styles.module.scss";

interface SliderProps {
  images: string[];
}

const Slider: FC<SliderProps> = ({ images }) => {
  // const [isVisibleButton, setIsVisibleButton] = useState(true);

  return (
    <Swiper
      grabCursor={true}
      modules={[Navigation]}
      // onReachEnd={() => setIsVisibleButtonNext(false)}
      // onReachBeginning={() => setIsVisibleButtonNext(false)}
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
      <SliderButtonNext className={style.sliderButtonNext} />

      <SliderButtonPrev className={style.sliderButtonPrev} />

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
