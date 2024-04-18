import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const ProductPage = ( { idP, obr, nazev} ) => {
    const { id } = useParams();
    const [vyrobek, setVyrobek] = useState(null);

    useEffect (() => {
        const oneProduct = async() => {
            try {
                const responseP = await fetch(`https://apps.kodim.cz/react-2/xxxmuck/products/${id}`);
                const dataP = await responseP.json();
                setVyrobek(dataP);
            } catch (ex) {
                console.log("Chyba pri nacitani jednoho produktu");
            }
        };

        oneProduct();
    }, [id]);

    return(
        <>
          {vyrobek===null ?
            <div onClick={() => setVyrobek(idP)}>
                <img src={obr} width="50%" height="50%" />
                <div>{nazev}</div>
                <div></div>
            </div> :
            <div>
                <img src={vyrobek.image} />
                <div align="center">{vyrobek.name}</div>
            </div>

          }   
        </>
    );
}
//2c6VoCaD