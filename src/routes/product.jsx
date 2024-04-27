import React from "react";
import { useLoaderData } from "react-router-dom";

export async function loader(){
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return { data }
}

function Product(){
    const { data } = useLoaderData()
    console.log(data)
    return(
        <>
        <main>
           <div className="container">
            {data.map(product =>
                <article key={product.id} className="product-card">
                <img className="image" src={product.image} alt="" />
                <h1 className="product-title">{product.title}</h1>
                <p>{product.description}</p>
                <span className="product-price">$ {product.price}</span>
                <button className="add-button">add</button>
            </article>)}
            
            </div> 

        </main>
       
        </>
)
}

export { loader as productLoader }
export default Product