import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="relative">
        <div className="w-16 h-16 border-purple-200 border-4 rounded-full"></div>
        <div className="w-16 h-16 border-purple-700 border-t-4 animate-spin rounded-full absolute left-0 top-0"></div>
      </div>
    </div>
  );
};

export default Loading;
