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
  `);
  if (error) {
    console.log("error", error.message);
    return null;
  }
  return data;
};

export const getDoctorsByCategory = async (categoryName) => {
  try {
    const { data, error } = await supabase
      .from("doctor")
      .select("*, category!inner(*)")
      .eq("category.name", categoryName);

    if (error) throw error;

    return data;
  } catch (error) {
    console.error("Error fetching doctors by category:", error.message);
    return [];
  }
};

export const getDoctorById = async (doctorId) => {
  try {
    let { data, error } = await supabase
      .from("doctor")
      .select("*")
      .eq("id", doctorId)
      .single();

    if (error) throw error;

    return data;
  } catch (error) {
    console.error("Error fetching doctors by category:", error.message);
    return [];
  }
};

export const bookAppiontment = async (appointmentData) => {
  try {
    const { data, error } = await supabase
      .from("appointment")
      .insert(appointmentData)
      .select()
      .single();

    if (error) throw error;

    return data;
  } catch (error) {
    console.error("Error booking appointment:", error.message);
    return null;
  }
};

export const getMyBookingList = async (email) => {
  if (!email) return [];

  try {
    let { data, error } = await supabase
      .from("appointment")
      .select(
        `
    *,
    doctor (
      id,
      name,
      imageURL,
      address,
      about
    )
  `,
      )
      .eq("email", email)
      .order("created_at", { ascending: false });

    if (error) throw error;

    return data;
  } catch (error) {
    console.error("Error booking appointment:", error.message);
    return null;
  }
};
