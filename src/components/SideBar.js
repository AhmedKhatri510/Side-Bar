import React from "react";
import { useState } from "react";
import Tabs from "./Tabs";
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
        <Tabs
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
