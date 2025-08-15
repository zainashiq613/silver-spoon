import React from 'react';

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-[#5FCDB2]"></div>
    </div>
  );
}

export default Loader;
