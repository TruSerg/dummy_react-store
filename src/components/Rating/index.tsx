import { FC, memo } from "react";
import { Rating } from "@mui/material";

interface RatingProps {
  value: number;
}

const BasicRating: FC<RatingProps> = ({ value }) => {
  return <Rating defaultValue={value} precision={0.1} readOnly />;
};

export default memo(BasicRating);
