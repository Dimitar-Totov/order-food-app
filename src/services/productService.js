import { supabase } from "../supabase";

export const getProductsByCategory = async (categoryName) => {
    const { data, error } = await supabase
        .from("products")
        .select(`
            id,
            name,
            description,
            price,
            image_url,
            categories!inner(name)
        `)
        .eq("categories.name", categoryName)
        .order("name", { ascending: true });

    if (error) {
        console.error(`Error fetching ${categoryName} products:`, error);
        return [];
    }

    return data.map(item => ({
        ...item,
        categories: item.categories.name,
    }));
};

export const getProductById = async (id) => {
  const { data, error } = await supabase
    .from("products")
    .select(`
      id,
      name,
      description,
      price,
      image_url,
      categories!inner(name)
    `)
    .eq("id", id)
    .single();

  if (error) {
    console.error(`Error fetching product ${id}:`, error);
    return null;
  }

  return {
    ...data,
    categories: data.categories.name,
  };
};