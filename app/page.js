"use client";

import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorsList from "./_components/DoctorsList";
import { useEffect, useState } from "react";
import { getDoctors } from "./_utils/Api";

export default function Home() {
  const [doctorsList, setDoctorsList] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const doctors = await getDoctors();
      // console.log("doctors: ", doctors);
      setDoctorsList(doctors);
    };
    fetchDoctors();
  }, []);

  return (
    <div>
      <Hero />
      <CategorySearch />
      <DoctorsList doctorsList={doctorsList} />
    </div>
  );
}
