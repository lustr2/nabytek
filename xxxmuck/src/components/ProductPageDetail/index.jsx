import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const ProductPageDetail = () => {
    const { id } = useParams();
    const [vyrobek, setVyrobek] = useState(null);

    useEffect (() => {
        const oneProduct = async() => {
            try {
                console.log(`https://apps.kodim.cz/react-2/xxxmuck/products/${id}`);
                const responseP = await fetch(`https://apps.kodim.cz/react-2/xxxmuck/products/${id}`);
                const dataP = await responseP.json();
                setVyrobek(dataP);
            } catch (ex) {
                console.log("Chyba pri nacitani jednoho produktu" + {id});
            }
        };

        oneProduct();
    },[]);

    if (vyrobek === null) return;

    return(
        <>
            {vyrobek===null ? <div>Nacitam produkt ....</div>: 
            <div>
                <img className="product-image" src={vyrobek?.image}/>
                <div align="center">{vyrobek?.name}</div>
            </div>
            }
        </>
    );
}
//2c6VoCaD