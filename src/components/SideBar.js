import React from "react";
import { useState } from "react";
import Tab from "./Tab";
import tabsDetail from "../constants/tabsDetail";
import "./SideBar.css";

const SideBar = () => {
  const [activeTab, setActiveTab] = useState(tabsDetail[0].title);

  const onTabClick = (title) => {
    setActiveTab(title);
  };

  console.log(activeTab);
  return (
    <div className="sidebar">
      {tabsDetail.map((tabDetail) => (
        <Tab
          key={tabDetail.title}
          imgUrl={tabDetail.imgUrl}
          title={tabDetail.title}
          onTabClick={onTabClick}
          activeTab={activeTab}
        />
      ))}
    </div>
  );
};

export default SideBar;
