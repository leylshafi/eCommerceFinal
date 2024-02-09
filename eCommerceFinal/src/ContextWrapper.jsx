import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Context = createContext();

export default Context;

export const ContextWrapper = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState("All");
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const navigate = useNavigate();

    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            return null;
        }
    };

    const getProducts = async () => {
        const data = await fetchData("http://localhost:5000/api/products");
        if (data) {
            setProducts(data.product);
        }
    };

    const getCategories = async () => {
        const data = await fetchData("http://localhost:5000/api/products");
        if (data) {
            const { product } = data;
            const cat = Array.from(new Set(product.map(p => p.category)));
            setCategories(["All", ...cat]);
        }
    };

    const filterProducts = (category) => {
        if (category === "All") {
            setFilteredProducts([...products]);
        } else {
            const filtered = products.filter((p) => p.category === category);
            setFilteredProducts(filtered);
        }
    };

    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    const contextData = {
        getCategories,
        categories,
        navigate,
        currentCategory,
        setCurrentCategory,
        filterProducts,
        filteredProducts,
        products,
        getProducts
    };

    return (
        <Context.Provider value={contextData}>{children}</Context.Provider>
    );
};
