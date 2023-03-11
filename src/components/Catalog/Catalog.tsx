import { MouseEvent } from "react";
import { useState } from "react";
import { memo } from "react";

import CatalogLayout from "./CatalogLayout";

const Catalog = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <CatalogLayout
      anchorEl={anchorEl}
      isOpen={isOpen}
      handleClick={handleClick}
      handleClose={handleClose}
    />
  );
};

export default memo(Catalog);
