"use client";


import { getDoctorsByCategory } from "@/app/_utils/Api";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = ( ) => {
  // const { cname } = React.use(params);
  const params = useParams();
  const { cname } = params;

  const [doctorsByCategoryList, setDoctorsByCategoryList] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const doctors = await getDoctorsByCategory(cname);
      console.log("doctorsByCategoryList: ", doctors);
      setDoctorsByCategoryList(doctors);
    };
    fetchDoctors();
  }, [cname]);

  console.log(cname);

  return <div>page</div>;
};

export default page;
