import React, { useEffect, useState } from 'react';
import BoxTab from "./BoxTab";

const BoxTabs = ({ tabs = [], value, onChange }) => {
  return (
    <div className="tabs-box flex flex-aic gap-1">
      {
        tabs.map(tab => (
          <BoxTab
            key={tab.id}
            id={tab.id}
            isActive={value === tab.id}
            title={tab.title}
            select={(val) => onChange(val)}
          />
        ))
      }
    </div>
  );
};

export default BoxTabs;
