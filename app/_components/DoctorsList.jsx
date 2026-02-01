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
          : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
              <div
                className="border border-gray-200 rounded-lg p-3 m-3 animate-pulse"
                key={index}
              >
                <div className="h-67.5 w-full bg-gray-200 rounded-lg"></div>

                <div className="items-baseline flex flex-col">
                  <div className="h-8 w-24 bg-gray-200 rounded-full mt-3"></div>

                  <div className="h-5 bg-gray-200 rounded w-3/4 mt-4"></div>

                  <div className="h-5 bg-gray-200 rounded w-2/3 mt-3"></div>

                  <div className="h-5 bg-gray-200 rounded w-5/6 mt-3"></div>

                  <div className="h-5 bg-gray-200 rounded w-1/2 mt-3"></div>

                  <div className="h-12 w-1/3 border border-gray-200 mt-5 rounded-md bg-gray-100"></div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default DoctorsList;
