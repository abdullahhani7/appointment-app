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
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { bookAppiontment } from "@/app/_utils/Api";
import { toast } from "sonner";

const BookAppointment = ({ doctor }) => {
  const today = useMemo(() => new Date(), []);
  const [date, setDate] = useState(today);
  const [selectedTime, setSelectedTime] = useState();

  const { user, isAuthenticated, isLoading } = useKindeBrowserClient();

  const timeSlot = useMemo(() => {
    const slots = [];
    for (let i = 10; i <= 12; i++) {
      slots.push({ time: `${i}:00 AM` });
      slots.push({ time: `${i}:30 AM` });
    }
    for (let i = 1; i <= 5; i++) {
      slots.push({ time: `${i}:00 PM` });
      slots.push({ time: `${i}:30 PM` });
    }
    return slots;
  }, []);

  const pastDay = (day) => day <= today;

  const handleBooking = async () => {
    if (!isAuthenticated) {
      toast.custom((t) => (
        <div className="p-4 bg-white border shadow rounded-lg">
          <p className="  font-bold text-md">Login Required</p>
          <p className="text-gray-600 text-[12px]">
            You need to login first to book an appointment.
          </p>
          <div className="mt-3">
            <LoginLink className="px-2 py-1 bg-lime-500 text-white rounded">
              Sign In
            </LoginLink>
          </div>
        </div>
      ));
      return;
    }

    if (!selectedTime) {
      toast.error("Please select a time slot.");
      return;
    }

    const appointmentData = {
      userName: `${user?.given_name} ${user?.family_name}`,
      email: user?.email,
      date,
      time: selectedTime,
      doctor_id: doctor?.id,
    };

    try {
      await bookAppiontment(appointmentData);
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
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled={pastDay}
              />
            </div>

            <div className="mt-4 md:mt-0">
              <div className="grid grid-cols-3 gap-3">
                {timeSlot.map((slot, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTime(slot.time)}
                    className={`flex items-center justify-center p-2 rounded-full border transition-all duration-200
                      ${
                        slot.time === selectedTime
                          ? "bg-lime-400 text-white border-lime-400"
                          : "bg-white text-black border-gray-300 hover:bg-lime-100 hover:text-lime-800"
                      }`}
                    style={{ minHeight: "50px" }}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
            </div>
          </div>

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
