import { Routes, Route, Navigate } from "react-router-dom";

import { ROUTES } from "./routeNames";

import ProductsPageContainer from "../pages/ProductsPage/containers/ProductsPageContainer";
import ProductDetailsPageContainer from "../pages/ProductPageDetails/containers/ProductDetailsPageContainer";
import ProductsCategoryPageContainer from "../pages/ProductsCategoryPage/containers/ProductsCategoryPageContainer";
import ProductsSearchPageContainer from "../pages/ProductsSearchPage/containers/ProductsSearchPageContainer";
import CartPageContainer from "../pages/CartPage/containers/CartPageContainer";
import RegistrationPageContainer from "../pages/RegistrationPage/containers/RegistrationPageContainer";
import UserPageContainer from "../pages/UserPage/containers/UserPageContainer";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.PRODUCTS_PAGE} element={<ProductsPageContainer />} />
      <Route
        path={ROUTES.PRODUCT_DETAILS_PAGE}
        element={<ProductDetailsPageContainer />}
      />
      <Route
        path={ROUTES.PRODUCTS_CATEGORY_PAGE}
        element={<ProductsCategoryPageContainer />}
      />
      <Route
        path={ROUTES.PRODUCTS_SEARCH_PAGE}
        element={<ProductsSearchPageContainer />}
      />
      <Route path={ROUTES.CART_PAGE} element={<CartPageContainer />} />
      <Route
        path={ROUTES.REGISTRATION_PAGE}
        element={<RegistrationPageContainer />}
      />
      <Route path={ROUTES.USER_PAGE} element={<UserPageContainer />} />

      <Route path="*" element={<Navigate to={ROUTES.PRODUCTS_PAGE} />} />
    </Routes>
  );
};

export default AppRoutes;
