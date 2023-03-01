import { Routes, Route, Navigate } from "react-router-dom";

import { ROUTES } from "./routeNames";

import ProductsPageContainer from "../pages/ProductsPage/containers/ProductsPageContainer";
import ProductDetailsPageContainer from "../pages/ProductPageDetails/containers/ProductDetailsPageContainer";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.PRODUCTS_PAGE} element={<ProductsPageContainer />} />
      <Route
        path={ROUTES.PRODUCT_PAGE_DETAILS}
        element={<ProductDetailsPageContainer />}
      />

      <Route path="*" element={<Navigate to={ROUTES.PRODUCTS_PAGE} />} />
    </Routes>
  );
};

export default AppRoutes;
