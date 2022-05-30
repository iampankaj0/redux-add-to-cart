import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

const Products = () => {

    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);


    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
            .catch((err) => {
                console.log('Error ', err);
            })
        setProducts(response.data)
        console.log(response.data);
    }


    useEffect(() => {
        fetchProducts()
    }, [])



    const handleAdd = (product) => {
        dispatch(add(product));
    }



    return (
        <div className='productsWrapper'>
            {
                products.map((product, id) => {
                    const { image, title, price } = product;
                    return (
                        <div className="card" key={id}>
                            <img src={image} alt={title} />
                            <h4> {title} </h4>
                            <h5> {price} </h5>
                            <button onClick={() => handleAdd(product)} className='btn'>Add to cart</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products