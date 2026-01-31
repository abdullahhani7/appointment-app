"use client";

import { getDoctorById } from "@/app/_utils/Api";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const { id } = useParams();

  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    const fetchDoctor = async () => {
      const doctorDetails = await getDoctorById(id);
      setDoctor(doctorDetails);
      console.log("doctorDetails", doctorDetails);
    };
    fetchDoctor();
  }, []);

  return <div>page</div>;
};

export default page;
