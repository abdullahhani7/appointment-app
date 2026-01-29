import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/explore",
    },
    {
      id: 3,
      name: "Contact Us",
      path: "/contact-us",
    },
  ];

  return (
    <header className="px-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-10">
          <Image
            src="/assets/images/logo.png"
            width={100}
            height={100}
            alt="logo"
          />
          <ul className="md:flex gap-8 hidden">
            {menu.map((item) => (
              <Link key={item.id} href={item.path}>
                <li className="hover:text-lime-600 cursor-pointer hover:scale-105 transition-all">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <Button>Get Started</Button>
      </div>
    </header>
  );
};

export default Header;
