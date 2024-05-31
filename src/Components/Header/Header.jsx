import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {

    const [isMobModeActive, setIsMobModeActive] = useState(false)

    const activeMobMode = () => {
        setIsMobModeActive(!isMobModeActive)
    }

    const deActiveMobMode = () => {
        setIsMobModeActive(false)
    }

    return (
        <>
            <header>
                <div className="top-sec">Avail 10% Off, Use Code - HARSH001</div>
                <head>

                    <div className="bar" onClick={activeMobMode}>
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <div className="left">
                        <Link to="/" className="logo">
                            LOGO
                        </Link>
                    </div>

                    
                    <nav class="main-menu">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li class="menu-item-has-children">
                                <Link to="#">Hindu Deities</Link>
                                <ul class="sub-menu">
                                    <li class="menu-item-has-children">
                                        <Link to="#">Deity 1</Link>
                                        <ul class="sub-menu">
                                            <li><Link to="#">Subcategory 1</Link></li>
                                            <li><Link to="#">Subcategory 2</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="#">Deity 2</Link></li>
                                    <li><Link to="#">Deity 3</Link></li>
                                </ul>
                            </li>
                            <li class="menu-item-has-children">
                                <Link to="#">Home Decor</Link>
                                <ul class="sub-menu">
                                    <li class="menu-item-has-children">
                                        <Link to="#">Decor 1</Link>
                                        <ul class="sub-menu">
                                            <li><Link to="#">Subcategory 1</Link></li>
                                            <li><Link to="#">Subcategory 2</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="#">Decor 2</Link></li>
                                    <li><Link to="#">Decor 3</Link></li>
                                </ul>
                            </li>
                            <li class="menu-item-has-children">
                                <Link to="#">Home Kitchen</Link>
                                <ul class="sub-menu">
                                    <li class="menu-item-has-children">
                                        <Link to="#">Kitchen 1</Link>
                                        <ul class="sub-menu">
                                            <li><Link to="#">Subcategory 1</Link></li>
                                            <li><Link to="#">Subcategory 2</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="#">Kitchen 2</Link></li>
                                    <li><Link to="#">Kitchen 3</Link></li>
                                </ul>
                            </li>
                            <li class="menu-item-has-children">
                                <Link to="#">Pooja Decor</Link>
                                <ul class="sub-menu">
                                    <li class="menu-item-has-children">
                                        <Link to="#">Decor 1</Link>
                                        <ul class="sub-menu">
                                            <li><Link to="#">Subcategory 1</Link></li>
                                            <li><Link to="#">Subcategory 2</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="#">Decor 2</Link></li>
                                    <li><Link to="#">Decor 3</Link></li>
                                </ul>
                            </li>
                            <li class="menu-item-has-children">
                                <Link to="#">Resin Collection</Link>
                                <ul class="sub-menu">
                                    <li class="menu-item-has-children">
                                        <Link to="#">Resin 1</Link>
                                        <ul class="sub-menu">
                                            <li><Link to="#">Subcategory 1</Link></li>
                                            <li><Link to="#">Subcategory 2</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="#">Resin 2</Link></li>
                                    <li><Link to="#">Resin 3</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>

                    <div className="icons">
                        <Link className="icon search">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </Link>
                        <Link className="icon cart">
                            <i class="fa-solid fa-bag-shopping"></i>
                            <span className="num">1</span>
                        </Link>
                        <Link to="/sign-up" className="icon profile">
                            <i class="fa-solid fa-user"></i>
                        </Link>
                    </div>
                </head>
            </header>


            <div className="side-nav">
                <div className={`mob-nav p-2 ${isMobModeActive ? 'mob-active' : ''}`}>
                    <div className="menu-close">
                        <i className="fa-solid fa-xmark" onClick={deActiveMobMode}></i>
                    </div>
                    <ul className="list-unstyled">
                        <li><Link to="/" onClick={deActiveMobMode}>home</Link></li>
                        <li><Link to="/collections/collection-name" onClick={deActiveMobMode}>Collections</Link></li>
                        <li><Link to="/collections/collection-name/product-name" onClick={deActiveMobMode}>Product Page</Link></li>
                        <li><Link to="/login" onClick={deActiveMobMode}>Login</Link></li>
                        <li><Link to="/sign-up" onClick={deActiveMobMode}>Sign Up</Link></li>
                        
                        
                    </ul>
                    <div className="social-icons mt-4">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="https://api.whatsapp.com/send?phone=919876543210" target="_blank"><i className="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>


            <div class="mobile-footer">
                {/* --- Small tags terko batane ke liye hai ki kisme kon sa component ayega -- */}

                <Link to="/" class="single active">
                    <i class="fa-solid fa-house"></i>
                    <small>Home</small>
                </Link>
                <Link to="/categories" class="single  ">
                    <i class="fa-solid fa-box"></i>
                    <small>Categories</small>
                </Link>
                <Link to="/cart" class="single ">
                    <i class="fa-solid fa-bag-shopping"></i>
                    <small>Cart</small>
                </Link>
                <Link to="/sign-up" class="single ">
                    <i class="fa-solid fa-user"></i >
                    <small>Profile</small>
                </Link>
            </div>
        </>
    )
}

export default Header