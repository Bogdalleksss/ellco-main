import React from 'react';

const PlusIcon = ({ fill = '#00004F' }) => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 13V7M7 7V1M7 7H13M7 7H1" stroke={ fill} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
};

export default PlusIcon;
