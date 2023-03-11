import React, { FC, MouseEvent } from "react";
import { Menu as MenuIcon } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";

import style from "./styles.module.scss";

interface CatalogProps {
  isOpen: boolean;
  anchorEl: HTMLElement | null;
  handleClick: (event: MouseEvent<HTMLElement>) => void;
  handleClose: () => void;
}

const CatalogLayout: FC<CatalogProps> = ({
  anchorEl,
  isOpen,
  handleClick,
  handleClose,
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
        <>
          <MenuItem className={style.catalogItem} onClick={handleClose}>
            Item
          </MenuItem>
        </>
      </Menu>
    </>
  );
};

export default CatalogLayout;
