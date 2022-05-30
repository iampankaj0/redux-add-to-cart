import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice';

const Cart = () => {

    const cartProducts = useSelector((state) => state.cart);
    console.log(cartProducts);


    const dispatch = useDispatch();
    const handleRemove = (productId) => {
        dispatch(remove(productId))
    }


    return (
        <div>
            <h3>Cart</h3>

            <div className="cartWrapper">
                {
                    cartProducts.map((product, id) => {
                        const { image, title, price } = product;
                        return (
                            <div className="cartCard" key={id}>
                                <img src={image} alt={title} />
                                <h5>{title}</h5>
                                <h5>{price}</h5>
                                <button className="btn" onClick={()=> handleRemove(product.id)}>Remove</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cart