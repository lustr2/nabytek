import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ProductPageDetail } from "../ProductPageDetail";

export const ProductPage = ( { idP, obr, nazev, onClick  } ) => {
    const [vyrobek, setVyrobek] = useState(null);

    const onClickProduct = () => {
        const detailId = idP;
        setVyrobek(detailId);
        onClick(detailId);
//        <ProductPageDetail id={detailId} />
//        console.log('KLik na detail:' + {vyrobek});

    }

    return(
        <>
          {vyrobek===null ?
            <div className="product" onClick={onClickProduct}>
                <img className="product-image" src={obr} />
                <div align="center">{nazev}</div>
            </div> :
            <div>
                <img className="product-image" src={vyrobek.image}/>
                <div align="center">{vyrobek.name}</div>
            </div>

          }   
        </>
    );
}
//2c6VoCaD