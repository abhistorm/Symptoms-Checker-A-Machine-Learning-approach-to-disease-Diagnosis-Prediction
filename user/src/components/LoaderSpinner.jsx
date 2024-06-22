import React from 'react';

const LoaderSpinner = () => {
  return (
    <div className="flex justify-center items-center mt-6">
      <div className="w-10 h-10 relative">
        <div className="absolute top-0 left-0 w-full h-full border-2 border-black rounded-full animate-spin border-l-0 border-t-1 border-r-0">
          <div className="absolute top-0 left-0 w-full h-full rounded-full animate-ping"></div>
          <div className="absolute top-0 left-0 w-full h-full rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoaderSpinner;
