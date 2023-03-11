import { memo } from "react";
import { Badge, IconButton } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";

import style from "./styles.module.scss";

const CartIconButton = () => {
  return (
    <IconButton>
      <Badge className={style.iconCart} badgeContent={5} color="success">
        <ShoppingCartOutlined className={style.cartIcon} fontSize="inherit" />
      </Badge>
    </IconButton>
  );
};

export default memo(CartIconButton);
