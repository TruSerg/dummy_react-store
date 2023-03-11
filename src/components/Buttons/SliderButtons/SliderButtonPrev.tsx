import { FC, memo } from "react";
import { useSwiper } from "swiper/react";

import sprite from "../../../static/sprite.svg";

import style from "./styles.module.scss";

interface SliderButtonPrevProps {
  className: string;
}

const SliderButtonPrev: FC<SliderButtonPrevProps> = ({ className }) => {
  const swiper = useSwiper();

  return (
    <button className={className} onClick={() => swiper.slidePrev()}>
      <svg className={style.swiperButtonPrev}>
        <use href={sprite + "#i-arrow_btn"} />
      </svg>
    </button>
  );
};

export default memo(SliderButtonPrev);
