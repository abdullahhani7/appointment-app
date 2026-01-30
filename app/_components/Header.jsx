"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

const Header = () => {
  const { user, isAuthenticated } = useKindeBrowserClient();
  useEffect(() => {
    console.log("user", user);
  }, [user]);

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
          <Link href="/">
            <Image
              src="/assets/images/logo.png"
              width={100}
              height={100}
              alt="logo"
            />
          </Link>

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

        {user ? (
          <Popover>
            <PopoverTrigger asChild>
              <Image
                src={user.picture}
                width={35}
                height={35}
                alt={user.family_name}
                className="rounded-full cursor-pointer"
              />
            </PopoverTrigger>
            <PopoverContent className="w-45 flex flex-col ">
              <ul>
                <ul>
                  <li className="mt-2 cursor-pointer hover:bg-lime-300 p-2">
                    My Profile
                  </li>
                  <Link
                    href={"/my-booking"}
                    className="mt-2 cursor-pointer hover:bg-lime-300 p-2"
                  >
                    My Booking
                  </Link>
                  <li className="mt-2 cursor-pointer hover:bg-lime-300 p-2">
                    <LogoutLink> Logout</LogoutLink>
                  </li>
                </ul>
              </ul>
            </PopoverContent>
          </Popover>
        ) : (
          <LoginLink>
            <Button>Get Started</Button>
          </LoginLink>
        )}
      </div>
    </header>
  );
};

export default Header;
