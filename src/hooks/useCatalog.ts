import { MouseEvent, useState } from "react";

const useCatalog = () => {
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

export default useCatalog;
