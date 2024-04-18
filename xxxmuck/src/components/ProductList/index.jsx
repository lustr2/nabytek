import { ProductPage } from "../ProductPage";
import { useState, useEffect } from "react";

export const ProductsList = () => {
    const [product, setProduct] = useState(null);

    useEffect (() => {
        const fetchProducts = async() => {
            const response = await fetch('https://apps.kodim.cz/react-2/xxxmuck/products');
            const data = await response.json();
            setProduct(data);
        };

        fetchProducts();

    }, []);

    return(
      <>
        <div>Seznam produktu ...</div>
           
        {product === null ? 
            <p>Nacitam ...</p> : 
            product?.map(p => <ProductPage key={p.id} idP={p.id} obr={p.image} nazev={p.name} />)
        }
      </>
    );
}