import Image from "next/image";
import Link from "next/link";
import React from "react";

const DoctorsList = ({ doctorsList, heading = "Popular Doctors" }) => {
  return (
    <div>
      <h2 className="font-bold text-xl text-lime-600">{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {doctorsList?.length > 0
          ? doctorsList.map((doctor, idx) => {
              return (
                <Link href={`/details/${doctor?.id}`} key={idx}>
                  <div className="border border-gray-200 rounded-lg p-3 m-3 ">
                    <Image
                      src={doctor.imageURL}
                      width={500}
                      height={200}
                      className="h-75 w-full object-contain"
                      alt={doctor.name}
                    />
                    <div className="items-baseline flex flex-col">
                      <h2 className="text-lime-600 mt-3 bg-lime-200 rounded-full p-2 text-bold">
                        {doctor?.category?.name}
                      </h2>
                      <h2 className="mt-2">
                        <span className="text-lime-600 text-bold">Name: </span>
                        {doctor.name}
                      </h2>
                      <h2 className="mt-2">
                        <span className="text-lime-600 text-bold">
                          Year Of Experience:
                        </span>
                        {doctor.year_of_experience}
                      </h2>
                      <h2 className="mt-2">
                        <span className="text-lime-600 text-bold">
                          Adress:{" "}
                        </span>
                        {doctor.address}
                      </h2>
                      <h2 className="mt-2">
                        <span className="text-lime-600 text-bold">Phone: </span>
                        {doctor.phone}
                      </h2>
                      <h2 className="border p-3 border-lime-600 mt-5  hover:bg-lime-300 cursor-pointer hover:scale-110 transition-all ease-in-out">
                        Book Now
                      </h2>
                    </div>
                  </div>
                </Link>
              );
            })
          : [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <div
                key={index}
                className="h-55 bg-lime-100 m-15 animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
};

export default DoctorsList;
