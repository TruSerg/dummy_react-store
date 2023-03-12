import { MouseEvent, useState } from "react";

const UseCatalog = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isCatalogOpen = Boolean(anchorEl);

  const handleCatalogClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCatalogClose = () => {
    setAnchorEl(null);
  };

  return { anchorEl, isCatalogOpen, handleCatalogClick, handleCatalogClose };
};

export default UseCatalog;
