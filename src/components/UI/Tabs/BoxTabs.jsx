import React, { useEffect, useState } from 'react';
import BoxTab from "./BoxTab";

const BoxTabs = ({ tabs = [] }) => {
  const [currentTab, updateCurrentTab] = useState(null);

  useEffect(() => {
    updateCurrentTab(tabs[0].id);
  }, []);

  return (
    <div className="tabs-box flex flex-aic gap-1">
      {
        tabs.map(tab => (
          <BoxTab
            key={tab.id}
            id={tab.id}
            isActive={currentTab === tab.id}
            title={tab.title}
            select={(val) => updateCurrentTab(val)}
          />
        ))
      }
    </div>
  );
};

export default BoxTabs;
