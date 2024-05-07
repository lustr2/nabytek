import { ProductPage } from "../ProductPage";
import { useState, useEffect } from "react";
import { ProductPageDetail } from "../ProductPageDetail";
import { useNavigate } from "react-router-dom";

export const ProductsList = () => {
    const [product, setProduct] = useState(null);
    const [idProd, setIdProd] = useState(null);
    const [vybrano, setVybrano] = useState(false);

    useEffect (() => {
        const fetchProducts = async() => {
            const response = await fetch('https://apps.kodim.cz/react-2/xxxmuck/products');
            const data = await response.json();
            setProduct(data);
        };

        fetchProducts();

    }, []);

    const handleClick = (naCoKlikl) => {
      console.log('cliknuto na produkt: ' + naCoKlikl);
      setIdProd(naCoKlikl);
      setVybrano(true);
    }

    return(
      <>
          <>
            <div className="seznam-produktu">Seznam produktu ...</div>
            <div className="list-of-products">  
              {product === null ? 
                <p>Nacitam ...</p> : 
                product?.map(p => <ProductPage key={p.id} idP={p.id} obr={p.image} nazev={p.name} onClick={handleClick} />)
              }
              {vybrano && 
                  <ProductPageDetail id={idProd} />  
              } 
            </div> 
          </>
      </>
    );
}