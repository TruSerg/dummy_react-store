import { FC, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { Menu as MenuIcon } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";

import { ROUTES } from "../../routes/routeNames";

import style from "./styles.module.scss";

interface CatalogProps {
  categories: string[];
  isOpen: boolean;
  anchorEl: HTMLElement | null;
  handleClick: (event: MouseEvent<HTMLElement>) => void;
  handleClose: () => void;
  handleGetProductsCategory: (category: string) => void;
}

const CatalogLayout: FC<CatalogProps> = ({
  categories,
  anchorEl,
  isOpen,
  handleClick,
  handleClose,
  handleGetProductsCategory,
}) => {
  return (
    <>
      <IconButton onClick={handleClick}>
        <MenuIcon
          className={style.catalog}
          fontSize="large"
          id="basic-button"
          aria-controls={isOpen ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={isOpen ? "true" : undefined}
        />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {categories?.map((category) => (
          <Link
            key={category}
            onClick={() => handleGetProductsCategory(category)}
            to={ROUTES.PRODUCTS_CATEGORY_PAGE}
          >
            <MenuItem className={style.catalogItem} onClick={handleClose}>
              {category}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </>
  );
};

export default CatalogLayout;
