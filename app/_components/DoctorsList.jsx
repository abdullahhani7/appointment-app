import Image from "next/image";
import React from "react";

const DoctorsList = ({ doctorsList }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {doctorsList &&
        doctorsList.map((doctor, idx) => {
          return (
            <div key={idx}>
              <Image
                src={doctor.imageURL}
                width={200}
                height={300}
                alt={doctor.name}
              />
            </div>
          );
        })}
    </div>
  );
};

export default DoctorsList;
