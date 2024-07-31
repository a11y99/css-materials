import React, { ReactNode } from 'react';

interface BodyProps {
  children: ReactNode;
}

const Body: React.FC<BodyProps> = ({ children }) => {
    return (
      <div className="w-[80%] mx-auto">
        {children}
      </div>
    );
};

export default Body;