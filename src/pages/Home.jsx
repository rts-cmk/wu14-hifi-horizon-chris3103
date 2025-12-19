import { useEffect, useState } from "react"
import HeroImage from "../assets/Homepage hero.png"
import fetchProducts from "../fetchProducts"
import ProductCard from "../components/ProductCard"

export default function Home () {

    const [productData, setProductData] = useState([])

    useEffect( () => {
        fetchProducts().then(data => setProductData(data)) 
    }, [] )
    console.log(productData);
     

    return (

        <>
        <img src={HeroImage} alt="Homepage hero" width="1750px" height="600px" />

        <section className="popular-products">
            <div className="section-top">
                <h2 className="section-title">POPULAR PRODUCTS</h2>

                <button className="section-button" type="button">
                    See all products
                </button>
            </div>
        </section>
     
        <div className="product-grid">
            {productData.map(data => <ProductCard product={data}/> )}
        </div>
        
        </>

    )
}