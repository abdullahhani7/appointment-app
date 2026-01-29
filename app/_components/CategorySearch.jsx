import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CategorySearch = () => {
  return (
    <div className=" flex flex-col items-center mb-10">
      <h2 className="font-bold text-4xl mt-7 mb-7">
        <span className="text-lime-600">Search</span> Categories
      </h2>
      <div className="w-full  max-w-sm flex">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </div>
    </div>
  );
};

export default CategorySearch;
