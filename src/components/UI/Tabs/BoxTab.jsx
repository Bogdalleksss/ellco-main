import React from 'react';

const BoxTab = ({ title, id, select, isActive }) => {
  return (
    <div
      className={`tabs-box__tab body body-9 font-color-bld ${isActive ? 'active' : ''}`}
      onClick={() => select(id)}
    >
      <span>
        { title }
      </span>
    </div>
  );
};

export default BoxTab;
