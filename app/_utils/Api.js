import supabase from "../supabase";

export const getCategory = async () => {
  let { data, error } = await supabase.from("category").select("*");
  if (error) {
    console.log("error", error.message);
    return null;
  }
  return data;
};

export const getDoctors = async () => {
  let { data, error } = await supabase.from("doctor").select(`
    id,
    name,
    about,
    address,
    phone,
    year_of_experience,
    imageURL,
    category (
      id,
      name
    )
  `)
  if (error) {
    console.log("error", error.message);
    return null;
  }
  return data;
};
