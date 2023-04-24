import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../../hooks/useStoreHooks";

import { ROUTES } from "../../../routes/routeNames";

import UserPageLayout from "../components/UserPageLayout";

const UserPageContainer = () => {
  const navigate = useNavigate();

  const { userInfo } = useAppSelector((state) => state.signupUser);
  const { ordersList } = useAppSelector((state) => state.userOrder);

  useEffect(() => {
    if (userInfo.firstName === undefined) {
      navigate(ROUTES.PRODUCTS_PAGE);
    }
  }, [navigate, userInfo.firstName]);

  return <UserPageLayout userInfo={userInfo} ordersList={ordersList} />;
};

export default UserPageContainer;
