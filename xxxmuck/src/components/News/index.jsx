import { ProductPageDetail } from "../ProductPageDetail";

export const News = () => {
    const aktId = ['2c6VoCaD','iT6EZ0EO','MMQbHGDY'];
    return(
        <>
         <div>Aktualni nabidka ...</div>
            <div className="list-of-products-akt">  
                <ProductPageDetail id={aktId[0]}/>
                <ProductPageDetail id={aktId[1]}/>
                <ProductPageDetail id={aktId[2]}/>
            </div>
        </>
    );
}
//div*3>Product*2>b>lorem>
