import React from "react";
import CategoryList from "./_components/CategoryList";

const layout = ({ children }) => {
  return (
    <div className="grid grid-cols-4">
      <div className="md:block hidden"> 
        <CategoryList />
      </div>

      <div className="col-span-3">{children}</div>
    </div>
  );
};

export default layout;
