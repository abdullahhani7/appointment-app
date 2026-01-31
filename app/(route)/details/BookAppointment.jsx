import React, { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const BookAppointment = () => {
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState();
  const [selectedTime, setSelectedTime] = useState();

  const pastDay = (day) => {
    return day <= new Date();
  };

  const now = new Date();
console.log("now",now);

  const timeList = [];

  useEffect(() => {
    calcTime();
    console.log("timeList", timeList);
  }, []);

  const calcTime = () => {
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + ":00",
      });

      timeList.push({
        time: i + ":30",
      });
    }

    for (let i = 1; i <= 5; i++) {
      timeList.push({
        time: i + ":00",
      });

      timeList.push({
        time: i + ":30",
      });
    }

    setTimeSlot(timeList);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-3 rounded-full">Book Appointment</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book Appointment</DialogTitle>
          {/* <DialogDescription> */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled={pastDay}
              />
            </div>
            <div className="mt-5 md:mt-0">
              <div className="grid grid-cols-3 gap-3 border border-lg p-3">
                {timeSlot?.map((item, index) => (
                  <h2
                    onClick={() => setSelectedTime(item.time)}
                    className={`border text-center hover:bg-lime-300 hover:text-lime-800 cursor-pointer  p-2  rounded-full ${item.time == selectedTime && "bg-lime-300"}   `}
                  >
                    {item.time}
                  </h2>
                ))}
              </div>
            </div>
          </div>
          {/* </DialogDescription> */}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default BookAppointment;
