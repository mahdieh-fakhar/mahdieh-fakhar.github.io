import React from "react";

interface MFLogoProps {
  className?: string;
}

const MFLogo: React.FC<MFLogoProps> = ({ className = "h-10 w-auto" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 60 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="60" height="60" rx="5" fill="#F5F7FA" className="dark:fill-gray-800" />
      
      {/* Bar graph */}
      <rect x="10" y="10" width="10" height="15" fill="#1E5A87" className="dark:fill-primary-light" />
      <rect x="25" y="5" width="10" height="20" fill="#1E5A87" className="dark:fill-primary-light" />
      <rect x="40" y="2" width="10" height="23" fill="#1E5A87" className="dark:fill-primary-light" />
      
      {/* Horizontal line */}
      <rect x="7" y="30" width="46" height="3" fill="#1E5A87" className="dark:fill-primary-light" />
      
      {/* MF Letters */}
      <path d="M20 38V58H15V38H7V33H28V38H20Z" fill="#1E5A87" className="dark:fill-primary-light" />
      <path d="M53 33V38H45V43H53V48H45V58H40V33H53Z" fill="#1E5A87" className="dark:fill-primary-light" />
    </svg>
  );
};

export default MFLogo;
