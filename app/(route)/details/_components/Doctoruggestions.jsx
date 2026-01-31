import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getDoctors } from "@/app/_utils/Api";
function Doctoruggestions() {
  //    const [doctorList, setDoctorList] = useState([])
  //     useEffect(()=>{
  //       getDoctorsList()
  //     },[])

  //     const getDoctorsList=()=>{
  //       Api.getDoctors().then(resp =>{
  //         console.log("doctors",resp.data.data)
  //         setDoctorList(resp.data.data)
  //       })
  //     }

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
      <div className=" grid-cols-1 md:grid-cols-3 p-3">
        <h1>Suggesstions</h1>
        {doctorsList.slice(0, 5).map((doctor, index) => (
          <Link key={index} href={`/details/${doctor?.documentId}`}>
            <div className="border rounded-lg p-3 m-3 flex ">
              {doctor?.imageURL && (
                <Image
                  src={doctor?.imageURL}
                  width={150}
                  height={150}
                  className=" rounded-full "
                  alt="image"
                />
              )}
              <div className="items-baseline flex flex-col">
                <span className="text-lime-600 mt-3 bg-lime-200 rounded-full p-1 text-[12px] text-bold">
                  {doctor?.category?.name}
                </span>

                <span className="mt-2"> {doctor?.name}</span>
                <span className="mt-2">
                  {doctor?.year_of_experience} years Experience
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Doctoruggestions;
