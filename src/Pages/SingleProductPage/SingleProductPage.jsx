import React, { useState } from 'react';
import './SingleProductPage.css';
import { Link } from 'react-router-dom';
import Head from '../../Components/Head/Head';
import NewArrival from '../../Components/FilterProduct/NewArrival';

const SingleProductPage = () => {
    const product = {
        productName: "GANESH LAXMI ON VAAHAN BASE",
        productImgs: [
            "https://theadvitya.com/cdn/shop/files/1_8_2048x2048.png?v=1687951804",
            "https://theadvitya.com/cdn/shop/files/1_1_2048x2048.png?v=1687951347",
            "https://theadvitya.com/cdn/shop/files/1_2_2048x2048.png?v=1687951347",
            "https://theadvitya.com/cdn/shop/files/H-8INCHES_33_2048x2048.png?v=1687951805"
        ],
        acctualPrice: 2999,
        offPrice: 2199,
        offPercentage: 50
    };

    const [quantity, setQuantity] = useState(1);
    const [showPopup, setShowPopup] = useState(false);

    const handleAddToCart = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const [mainImage, setMainImage] = useState(product.productImgs[0]);

    const handleImageHover = (img) => {
        setMainImage(img);
    };

    return (
        <>
            <section className="bread mb-5">
                <div className="container">
                    <nav aria-label="breadcrumb ">
                        <h2>GANESH LAXMI ON VAAHAN BASE</h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item" aria-current="page">Hindu Deities</li>
                            <li className="breadcrumb-item active" aria-current="page">GANESH LAXMI ON VAAHAN BASE</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section className="pro-page">
                <div className="container">
                    <div className="row">

                        <div className="col-md-5">
                            <div className="row imgs">
                                <div className="col-md-2  sm-img">
                                    {product.productImgs.map((img, index) => (
                                        <img
                                            src={img}
                                            key={index}
                                            alt={`Product Image ${index + 1}`}
                                            onMouseOver={() => handleImageHover(img)}
                                        />
                                    ))}
                                </div>
                                <div className="col-md-10 main-image">
                                    <img src={mainImage} alt={product.productName} />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-1"></div>

                        <div className="col-md-6">
                            <h3 className='pro-name h2'>{product.productName}</h3>
                            <div className="price mb-1 d-flex align-items-end gap-2">
                                <div className="currentPrice h3">Rs. {product.offPrice}</div>
                                <div className="actualPrice h4">Rs. {product.acctualPrice}</div>
                            </div>
                            <p className='text-muted'>Tax included.</p>
                            <div className="increase-decrease-btn mb-2">
                                <button className="quantity-btn" onClick={() => setQuantity(Math.max(quantity - 1, 1))}>-</button>
                                <span className="quantity">{quantity}</span>
                                <button className="quantity-btn" onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>
                            <div className="flex btns">
                                <button className="addToCart" onClick={handleAddToCart}>
                                    <i className="fa-solid fa-bag-shopping"></i> &nbsp;
                                    ADD TO CART
                                </button>
                                <button className="buyNow">
                                    BUY IT NOW
                                </button>
                            </div>
                            {showPopup && (
                                <div className="popup">
                                    <button className="closePopup" onClick={handleClosePopup}>×</button>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className='green text-center mb-2'> <i class="fa-regular fa-circle-check"></i> Added to cart successfully!</div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="left text-center">
                                                
                                                <img src={product.productImgs[0]} alt="Product Image" />
                                                <p>{product.productName}</p>
                                                <p>QTY: {quantity}</p>
                                                <p>TOTAL: Rs. {(product.offPrice * quantity).toFixed(2)}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="col-md-6">
                                            <div className="right">
                                                <p>There are 2 items in your cart</p>
                                                <p className='total'>TOTAL: Rs. 5,993.00</p>
                                                <div className="buttons">
                                                    <Link to="/" className="continueShopping">Continue shopping</Link>
                                                    <Link to="/cart" className="viewCart">View cart</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className='my-5'>
                <Head title="Related Products" para="" />
                <NewArrival />

            </section>
        </>
    );
};

export default SingleProductPage;
