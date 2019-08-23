import React from "react";

const MenuButton = props => {
  const btSize  = props.active ? "h-5 w-5" : "h-3 w-3";
  const btColor = props.active ? "bg-desert-sand" : "bg-gray-500";

  const cssName = `cursor-pointer rounded-full ${btSize} flex items-center justify-center ${btColor} m-4`;

  return <div className={cssName} />;
};

export default MenuButton;
