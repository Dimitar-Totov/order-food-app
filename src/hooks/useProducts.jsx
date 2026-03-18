import { useState, useEffect } from "react";
import { productService } from "../services";

export function useFetchCategory(category) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            setLoading(true);
            try {
                const data = await productService.getProductsByCategory(category);
                setProducts(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetch();
    }, [category]);

    return { products, loading, error };
}