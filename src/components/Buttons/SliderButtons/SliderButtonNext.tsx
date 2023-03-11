import { FC, memo } from "react";
import { useSwiper } from "swiper/react";

import sprite from "../../../static/sprite.svg";

import style from "./styles.module.scss";

interface SliderButtonNextProps {
  className: string;
}

const SliderButtonNext: FC<SliderButtonNextProps> = ({ className }) => {
  const swiper = useSwiper();

  return (
    <button className={className} onClick={() => swiper.slideNext()}>
      <svg className={style.swiperButtonNext}>
        <use href={sprite + "#i-arrow_btn"} />
      </svg>
    </button>
  );
};

export default memo(SliderButtonNext);
