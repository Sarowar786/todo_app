// components/Loading.js
import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-bodyColor text-white flex items-center justify-center">
        <p className="text-xl flex items-center gap-2">
            <span className="w-10 h-10 rounded-full bg-transparent border-4 border-white inline-flex relative">
                <span className="w-10 h-10 absolute border-4 border-r-red-600 rounded-full -top-1 -right-1 inline-block animate-spin">

                </span>

            </span>
            Todo app is loading....
        </p>
    </div>
    
  );
};

export default Loading;
