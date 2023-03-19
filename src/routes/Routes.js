import { Routes, Route, Navigate } from "react-router-dom";

import { ROUTES } from "./routeNames";

import ProductsPageContainer from "../pages/ProductsPage/containers/ProductsPageContainer";
import ProductDetailsPageContainer from "../pages/ProductPageDetails/containers/ProductDetailsPageContainer";
import ProductsCategoryPageContainer from "../pages/ProductsCategoryPage/containers/ProductsCategoryPageContainer";
import ProductsSearchPageContainer from "../pages/ProductsSearchPage/containers/ProductsSearchPageContainer";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.PRODUCTS_PAGE} element={<ProductsPageContainer />} />
      <Route
        path={ROUTES.PRODUCT_PAGE_DETAILS}
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

      <Route path="*" element={<Navigate to={ROUTES.PRODUCTS_PAGE} />} />
    </Routes>
  );
};

export default AppRoutes;
