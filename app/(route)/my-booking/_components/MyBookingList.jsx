import Image from "next/image";
import React from "react";

const MyBookingList = ({ bookingList }) => {
  console.log("bookingListbookingList", bookingList);

  return (
    <div>
      {bookingList.map((item, index) => {
        return (
          <div key={index} className="flex gap-2 items-cener">
            <Image
              src={item?.doctor?.imageURL}
              width={150}
              height={120}
              alt="image"
              className="rounded-full object-cover w-[120] h-[120]"
            />

            <div className="mt-15 gap-2 ml-15 w-full">
              <h2 className="font-bold flex justify-between items-center">
                Name : {item?.doctor?.name}
                {/* {!past&&<CancelAppointment cancelClick={()=>onDeleteBooking(item)}/>} */}
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
