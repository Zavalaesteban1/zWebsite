import React from 'react';

interface CppIconProps {
  size?: number;
  className?: string;
}

const CppIcon: React.FC<CppIconProps> = ({ size = 32, className = '' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`min-w-[${size}px] min-h-[${size}px] ${className}`}
    >
      <circle cx="50" cy="50" r="45" fill="#00599C"/>
      <text
        x="50"
        y="63"
        fontSize="45"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
      >
        C++
      </text>
      <rect x="70" y="35" width="4" height="12" fill="white"/>
      <rect x="66" y="39" width="12" height="4" fill="white"/>
      <rect x="85" y="35" width="4" height="12" fill="white"/>
      <rect x="81" y="39" width="12" height="4" fill="white"/>
    </svg>
  );
};

export default CppIcon;