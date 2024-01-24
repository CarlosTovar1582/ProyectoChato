import React from "react";
import "./DropdownItem.css";

const DropdownItem = (props) => {
  return (
    <>
      <a
        className="block  text-gray-900 group-hover:text-slate-200"
        onClick={() => props.goToMenu && props.setActive(props.goToMenu)}
      >
        
        {props.children}
      </a>
    </>
  );
};

export default DropdownItem;
