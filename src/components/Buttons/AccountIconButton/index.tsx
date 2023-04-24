import { Link } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";

import { useAppSelector } from "../../../hooks/useStoreHooks";

import { ROUTES } from "../../../routes/routeNames";

import style from "./styles.module.scss";

const AccountIconButton = () => {
  const { userInfo } = useAppSelector((state) => state.signupUser);

  return (
    <Link className={style.account} to={ROUTES.USER_PAGE}>
      <AccountCircle className={style.accountIcon} fontSize="inherit" />
      <p
        className={style.accountName}
        style={{ color: userInfo.gender === "male" ? "#1a8ec1" : "#a84d98" }}
      >
        {userInfo.username}
      </p>
    </Link>
  );
};

export default AccountIconButton;
