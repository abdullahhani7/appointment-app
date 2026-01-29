import Image from "next/image";
import React from "react";

const DoctorsList = ({ doctorsList }) => {
  return (
    <div className="md:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {doctorsList &&
        doctorsList.map((doctor, idx) => {
          return (
            <div key={idx}>
              <Image
                src={doctor.imageURL}
                width={500}
                        height={200}
                alt={doctor.name}
              />
              <h2>{doctor?.category?.name}</h2>
              <div>
                <p>{doctor.name}</p>
                <p>{doctor.year_of_experience}</p>
                <p>{doctor.address}</p>
                <p>{doctor.phone}</p>
              </div> 
            </div>
          );
        })}
    </div>
  );
};

export default DoctorsList;
