"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { getCategory } from "../_utils/Api";
import Image from "next/image";

const CategorySearch = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const categories = await getCategory();
      setCategoryList(categories);
      // console.log("categories:", categories);
    };
    fetchData();
  }, []);

  return (
    <div className=" flex flex-col items-center mb-10">
      <h2 className="font-bold text-4xl mt-7 mb-7">
        <span className="text-lime-600">Search</span> Categories
      </h2>
      <div className="w-full  max-w-sm flex">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </div>
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10">
        {categoryList &&
          categoryList.map((cat, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col p-5 items-center text-center bg-lime-200 rounded-xl cursor-pointer hover:scale-110 transition-all ease-in-out"
              >
                <Image
                  src={cat.iconURL}
                  width={70}
                  height={70}
                  alt={cat.name}
                />
                <label htmlFor="">{cat.name}</label>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CategorySearch;
