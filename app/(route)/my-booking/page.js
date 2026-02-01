"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MyBookingList from "./_components/MyBookingList";
import { getMyBookingList } from "@/app/_utils/Api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const page = () => {
  const { user } = useKindeBrowserClient();
  const [bookingList, setBookingList] = useState([]);

  const myBooking = async () => {
    if (!user?.email) return;

    const userBookingList = await getMyBookingList(user.email);
    console.log("userBookingList", userBookingList);
    setBookingList(userBookingList);
  };

  useEffect(() => {
    user && myBooking();
  }, [user]);

  const filterBookingList = (type) => {
    return bookingList.filter((item) =>
      type === "upcoming"
        ? new Date(item?.date) >= new Date()
        : new Date(item?.date) <= new Date(),
    );
  };

  return (
    <div className="px-4 md:px-10">
      <h2 className="font-bold text-2xl">My Booking</h2>
      <Tabs defaultValue="account" className="w-full mt-8">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="upcoming">UpComing</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <MyBookingList bookingList={filterBookingList("upcoming")} />
        </TabsContent>
        <TabsContent value="past">
          <MyBookingList bookingList={filterBookingList("past")} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
