import { useEffect, useState } from "react";


const Products = () => {

    const [data, useData] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("https://catalog-management-system-dev-ak3ogf6zea-uc.a.run.app/cms/products");
                const data = await res.json();
                console.log(data)
            } catch (e) {
                console.log("Error in fetching products data")
            }
        }

        fetchData();
    }, [])

    return (
        <>
        
        </>
    );
};

export default Products;