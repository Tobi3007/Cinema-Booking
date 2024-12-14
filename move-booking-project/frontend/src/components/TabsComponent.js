import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState(0); // Set initial value to 0

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue); // Update active tab when clicked
  };

  return (
    <Tabs value={activeTab} onChange={handleTabChange}>
      <Tab label="Tab 1" />
      <Tab label="Tab 2" />
      <Tab label="Tab 3" />
    </Tabs>
  );
};

export default TabsComponent;
