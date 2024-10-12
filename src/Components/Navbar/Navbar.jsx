import React from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
import logo from '../../Assets/House_Logos.png';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useCart } from '../../CartContext'; 

const YourComponent = () => {
    const { cartItems } = useCart(); 

    return (
        <header className='header'>
            <nav className={`navbar navbar-expand-lg bg-white fixed-top p-3 ${style.navbar}`}>
                <div className="container-fluid">
                    <div className="logoDiv d-flex align-items-center mx-4">
                        <Link className="nav-link active text-dark" aria-current="page" to="/">
                            <img src={logo} alt="logo" className={style.logo} />
                            <span className={style.logoText}>Furniro</span>
                        </Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center fs-5" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item pe-5">
                                <Link 
                                    className="nav-link active text-dark" 
                                    aria-current="page" 
                                    to="/" 
                                    onClick={() => window.scrollTo(0, 0)}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item pe-5">
                                <Link 
                                className="nav-link text-dark"
                                to="/shop"
                                onClick={() => window.scrollTo(0, 0)}>
                                    Shop
                                </Link>
                            </li>
                            <li className="nav-item pe-5">
                                <Link className="nav-link text-dark" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                className="nav-link text-dark"
                                to="/contact"
                                onClick={() => window.scrollTo(0, 0)}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav  d-flex align-items-center">
                        <li className="nav-item d-flex align-items-center"> 
                            <i className="fa-regular fa-user me-4 fs-5"></i>
                            <i className="fa-solid fa-magnifying-glass me-4 fs-5"></i>
                            <i className="fa-regular fa-heart me-4 fs-4"></i>
                            <Link className =  {style.iconShop} to="/cart"> 
                                <HiOutlineShoppingCart/>
                                <div className={style.cartCount}>
                                    <span>{cartItems.length}</span> 
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default YourComponent;
