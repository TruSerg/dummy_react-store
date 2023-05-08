import { FC, memo } from "react";

import style from "./styles.module.scss";

interface BasicErrorProps {
  error: string | null;
}

const BasicError: FC<BasicErrorProps> = ({ error }) => {
  return (
    <div className={style.error}>
      <p className={style.errorMessage}>{error}!</p>
      <p className={style.errorText}>Try visit later!</p>
    </div>
  );
};

export default memo(BasicError);
