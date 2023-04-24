import { memo } from "react";
import { Link } from "react-router-dom";
import { Badge, IconButton } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";

import { useAppSelector } from "../../../hooks/useStoreHooks";

import { ROUTES } from "../../../routes/routeNames";

import style from "./styles.module.scss";

const CartIconButton = () => {
  const { cartList } = useAppSelector((state) => state.cart);

  return (
    <Link to={ROUTES.CART_PAGE}>
      <IconButton>
        <Badge
          className={style.cartBadge}
          badgeContent={cartList.length}
          color="success"
        >
          <ShoppingCartOutlined className={style.cartIcon} fontSize="inherit" />
        </Badge>
      </IconButton>
    </Link>
  );
};

export default memo(CartIconButton);
