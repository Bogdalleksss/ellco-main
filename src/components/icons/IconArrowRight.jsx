const IconArrowRight = ({ fill = '#054FD6' }) => {
  return (
    <svg
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="arrow"
    >
      <path
        d="M1.5 7H18.5M18.5 7L12.2262 1M18.5 7L12.2262 13"
        stroke={ fill }
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconArrowRight;
