import supabase from "../supabase";

export const getCategory = async () => {
  let { data, error } = await supabase.from("category").select();
  if (error) {
    console.log("error", error.message);
    return null;
  }
  return data;
};
