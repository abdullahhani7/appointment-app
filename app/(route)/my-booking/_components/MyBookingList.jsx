import Image from "next/image";
import React from "react";
import CancelAppointment from "./CancelAppointment";
import { deleteBooking } from "@/app/_utils/Api";
import { toast } from "sonner";

const MyBookingList = ({ bookingList, past, updateAppointment }) => {
  //   console.log("bookingListbookingList", bookingList);

  const onDeleteBooking = async (item) => {
    const deleted = await deleteBooking(item.id);
    if (deleted) {
      toast("Appointment has been canceled");
      updateAppointment();
    } else {
      toast("Failed to cancel appointment");
    }
  };

  return (
    <div className="h-screen">
      {bookingList.map((item, index) => {
        return (
          <div key={index} className="flex gap-2 items-center">
            <Image
              src={item?.doctor?.imageURL}
              width={150}
              height={120}
              alt="image"
              className="rounded-full object-cover w-[120] h-[120] mt-8"
            />

            <div className="mt-8 gap-2 ml-15 w-full">
              <h2 className="font-bold flex justify-between items-center">
                Name : {item?.doctor?.name}
                {!past && (
                  <CancelAppointment
                    cancelClick={() => onDeleteBooking(item)}
                  />
                )}
              </h2>
              <h2>Address: {item?.doctor?.address}</h2>
              <h2>phone: {item?.doctor?.phone}</h2>
              <h2>Date and Time: {new Date(item?.date).toLocaleString()}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyBookingList;
