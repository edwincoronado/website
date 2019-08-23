import React from "react";
import MenuButton from "./MenuButton";

const Menu = props => {
  return (
    <>
      <div className="fixed flex flex-col right-0 items-center z-50 pr-4 align-middle">
        <MenuButton active={true} />
        <MenuButton active={false} />
        <MenuButton active={false} />
      </div>
      {props.children}
    </>
  );
};

export default Menu;
