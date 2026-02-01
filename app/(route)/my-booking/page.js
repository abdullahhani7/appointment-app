"use client";
import React, { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MyBookingList from "./_components/MyBookingList";
import { getMyBookingList } from "@/app/_utils/Api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const page = () => {
  const { user } = useKindeBrowserClient();

  const myBooking = async () => {
    if (!user?.email) return;

    const userBookingList = await getMyBookingList(user.email);
    console.log("userBookingList", userBookingList);
  };

  useEffect(() => {
    myBooking();
  }, [user]);

  return (
    <div className="px-4 md:px-10">
      <h2 className="font-bold text-2xl">My Booking</h2>
      <Tabs defaultValue="account" className="w-full mt-8">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="UpComing">UpComing</TabsTrigger>
          <TabsTrigger value="Past">Past</TabsTrigger>
        </TabsList>
        <TabsContent value="UpComing">
          <MyBookingList />
        </TabsContent>
        <TabsContent value="Past">
          <MyBookingList />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
