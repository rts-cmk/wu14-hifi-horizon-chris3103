import { Link } from "react-router";
import "../style/Product.css"

export default function ProductCard ({product} ) {

    return (

        <div>
            <img src = {product.image} />

            <h3>{product.name}</h3>

            <p>{product.price}</p>

            <Link to={`/products/${product.id}`}>Read more</Link>
        </div>

    )
}