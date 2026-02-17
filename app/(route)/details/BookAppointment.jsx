"use client";

import React, { useState, useMemo } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { bookAppiontment } from "@/app/_utils/Api";
import { toast } from "sonner";

const BookAppointment = ({ doctor }) => {
  const today = useMemo(() => new Date(), []);
  const [date, setDate] = useState(today);
  const [selectedTime, setSelectedTime] = useState();
  const { user } = useKindeBrowserClient();

  // Generate time slots once
  const timeSlot = useMemo(() => {
    const list = [];
    for (let i = 10; i <= 12; i++) {
      list.push({ time: i + ":00 AM" });
      list.push({ time: i + ":30 AM" });
    }
    for (let i = 1; i <= 5; i++) {
      list.push({ time: i + ":00 PM" });
      list.push({ time: i + ":30 PM" });
    }
    return list;
  }, []);

  const pastDay = (day) => day <= today;

  const handleBooking = async () => {
    if (!user || !selectedTime) return;

    const appointmentData = {
      userName: `${user?.given_name} ${user?.family_name}`,
      email: user?.email,
      date,
      time: selectedTime,
      doctor_id: doctor?.id,
    };

    try {
      const result = await bookAppiontment(appointmentData);
      console.log("Booked:", result);
      toast.success("Appointment booked successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to book appointment.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-3 rounded-full w-full md:w-auto">
          Book Appointment
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Book Appointment</DialogTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {/* Calendar */}
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled={pastDay}
              />
            </div>

            {/* Time Slots */}
            <div className="mt-4 md:mt-0">
              <div className="grid grid-cols-3 gap-3">
                {timeSlot.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTime(item.time)}
                    className={`flex items-center justify-center p-2 rounded-full border transition-all duration-200
                      ${
                        item.time === selectedTime
                          ? "bg-lime-400 text-white border-lime-400"
                          : "bg-white text-black border-gray-300 hover:bg-lime-100 hover:text-lime-800"
                      }`}
                    style={{ minHeight: "50px" }}
                  >
                    {item.time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Book Button */}
          <Button
            disabled={!(date && selectedTime)}
            onClick={handleBooking}
            className="mt-6 w-full"
          >
            Book Appointment
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default BookAppointment;
