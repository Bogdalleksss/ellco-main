import { useState } from "react";

const Tabs = ({ tabs, className, value, onChange }) => {
  return (
    <div className={`tabs flex flex-aic flex-jcsb width-full ${className}`}>
      {
        tabs.map(tab => (
          <div
            key={tab.id}
            className={`tabs__tab pr-6 pl-6 pb-3 ${value === tab.id ? 'active' : ''}`}
            onClick={() => onChange(tab.id)}
          >
            <span className="body body-3">{ tab.title }</span>
          </div>
        ))
      }
    </div>
  )
}

export default Tabs;
