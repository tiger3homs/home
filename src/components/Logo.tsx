import React from 'react';

const Logo: React.FC = () => {
  return (
    <img 
      src="https://raw.githubusercontent.com/tiger3homs/home/refs/heads/main/public/logo.png" 
      alt="Logo" 
      className="mx-auto mb-6 w-24 h-24"
      style={{ pointerEvents: 'none', userSelect: 'none' }}
    />
  );
};

export default Logo;