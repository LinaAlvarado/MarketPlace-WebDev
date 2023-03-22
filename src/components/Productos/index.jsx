import { useEffect, useState } from "react";
import "./style.css";

export const Products = () => {

    const [products, setProducts] = useState([]);

     async function getProducts() {
        const url = "https://dummyjson.com/products"
        const res = await fetch(url)
        const data = await res.json()
        console.log(data.products);
        setProducts(data.products)
    };

    useEffect(()=>{
        getProducts()
    },[])


    return (    
        <div class="sectionProducts">
            <h3>Nuestros Productos</h3>


            {products === [] ? (
                 <h1>Cargando ...</h1>
            ) : (
                <div className="container_products" >
                    {
                        products.map((element)=>{
                            return (
                                <span>{element.title}</span>
                            )
                        })
                    }
                </div>
            )}
        </div>
    );
};
