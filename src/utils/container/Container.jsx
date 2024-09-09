import React from "react";

function Container({ children }) {
  return (
    <div className="p-4 border-2 bg-white rounded-lg dark:border-gray-700 mt-3 w-full">{children}</div>
  );
}

export default Container;
