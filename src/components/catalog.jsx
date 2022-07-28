import {useEffect, useState} from 'react';
import "./catalog.css";
import Product from "./product";
import DataService from "../services/dataService"

const Catalog = () => {
    let [products, setProducts] = useState([]);

    const loadCatalog = async () => {
        let service = new DataService();
        let data = await service.getCatalog();
        setProducts(data);
    }
    useEffect(()=>{
        loadCatalog();
    },[])
    return (
        <div className="catalog">
            <div className='catalog-header'>
                <h2>This is our amazing catalog</h2>
                <h3>We have {products.length} products!</h3>
            </div>
            <div className="products-container">
            {
                products.map((prod)=>(
                    <Product key={prod.id} data={prod}></Product>
                ))
            }
            </div> 
        </div>
    );
}

export default Catalog;