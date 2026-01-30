import React from "react";

const page = async ({ params }) => {
  const { cname } = await params;

  console.log(cname);

  return <div>page</div>;
};

export default page;
