import { Link } from "react-router-dom";
import { Person } from "@mui/icons-material";

import { ROUTES } from "../../../routes/routeNames";

import style from "./styles.module.scss";

const SignupIconButton = () => {
  return (
    <Link className={style.signup} to={ROUTES.REGISTRATION_PAGE}>
      <Person className={style.signupIcon} fontSize="inherit" />
      <p className={style.signupText}>Signup</p>
    </Link>
  );
};

export default SignupIconButton;
