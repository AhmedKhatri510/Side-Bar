import React from "react";
import "./SideBar.css";

const Tabs = ({ title, imgUrl, activeTab, onTabClick }) => {
  return (
    <div>
      <div
        className={`tabs ${activeTab === title ? "border-left" : ""}`}
        onClick={() => onTabClick(title)}
      >
        <div className="bg-circle">
          <img
            src={require(`../tabsImage/${imgUrl}`).default}
            className={`image ${activeTab === title ? "image-moveup" : ""}`}
            alt={title}
          />
        </div>
        <p className={`title ${activeTab === title ? "title-color" : ""}`}>
          {title}
        </p>
      </div>
    </div>
  );
};

export default Tabs;
