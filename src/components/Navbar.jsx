import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const cartCount = useSelector((state) => state.cart)

    return (
        <div className='navbar_component' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span> Add To Cart </span>
            <div className="">
                <Link className='navLink' to='/'>Home</Link>
                <Link className='navLink' to='/cart'>Cart</Link>
                <span className='cartCount'> Cart tems: {cartCount.length} </span>
            </div>
        </div>
    )
}

export default Navbar;