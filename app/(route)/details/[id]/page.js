"use client";

import { getDoctorById } from "@/app/_utils/Api";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import DoctorDetails from "../_components/DoctorDetails";
import Doctoruggestions from "../_components/Doctoruggestions";

const page = () => {
  const { id } = useParams();

  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    const fetchDoctor = async () => {
      const doctorDetails = await getDoctorById(id);
      setDoctor(doctorDetails);
      // console.log("doctorDetails", doctorDetails);
    };
    fetchDoctor();
  }, []);

  return (
    <div className="p-5 md:px-20">

      <div className="grid md:grid-cols-4 grid-cols-1">
        {/* doctor details*/}
        <div className=" col-span-3 ">
          <DoctorDetails doctor={doctor} />
        </div>

        {/* doctor suggestions*/}
        <div>
          <Doctoruggestions />
        </div>
      </div>
    </div>
  );
};

export default page;
