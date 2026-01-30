"use client";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import { getCategory } from "@/app/_utils/Api";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
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
    <div className="h-screen flex flex-col mt-5">
      <Command className="max-w-sm rounded-lg  ">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {categoryList &&
              categoryList.map((cat, idx) => {
                return (
                  <CommandItem key={idx}>
                    <Link
                      href={`/search/${cat?.name}`}
                      className="p-2 flex gap-2 w-full hover:bg-lime-300 cursor-pointer"
                    >
                      <Image
                        src={cat.iconURL}
                        width={70}
                        height={70}
                        alt={cat.name}
                        className="w-7.5 h-7.5"
                      />

                      <label>{cat?.name}</label>
                    </Link>
                  </CommandItem>
                );
              })}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export default CategoryList;
