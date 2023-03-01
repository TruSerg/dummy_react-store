import { FC, memo } from "react";
import { CircularProgress } from "@mui/material";

import style from "./styles.module.scss";

const Loader: FC = () => {
  return (
    <div className={style.loaderArea}>
      <CircularProgress color="inherit" />
    </div>
  );
};

export default memo(Loader);
