import React from 'react'
import { Link } from 'react-router-dom'

const NewArrival = () => {
    const productList = [
        {
            productName: "Resin Eight Running Victory Horses Brown",
            productImg: "https://theadvitya.com/cdn/shop/files/Untitleddesign-2024-01-30T114432.818_600x.png?v=1709032325",
            acctualPrice: 5999,
            offPrice: 2999,
            offPercentage: 50
        },
        {
            productName: "Collectible India Brass Tibet Buddha Sculpture",
            productImg: "https://theadvitya.com/cdn/shop/files/Untitleddesign-2023-12-12T114213.085_2048x2048.png?v=1702361678",
            acctualPrice: 12999,
            offPrice: 5999,
            offPercentage: 54
        },
        {
            productName: "Three Face Shiva Behind Parvati",
            productImg: "https://theadvitya.com/cdn/shop/files/2_40096784-e82a-42a7-882a-7751294ffef2_2048x2048.jpg?v=1683020268",
            acctualPrice: 29999,
            offPrice: 24999,
            offPercentage: 17
        },
        {
            productName: "Golden Buddha Sculpture",
            productImg: "https://theadvitya.com/cdn/shop/files/21_1_2048x2048.jpg?v=1688462134",
            acctualPrice: 15999,
            offPrice: 12999,
            offPercentage: 19
        },
        {
            productName: "Collectible India Brass Tibet Buddha Sculpture",
            productImg: "https://theadvitya.com/cdn/shop/files/Untitleddesign-2023-12-12T114213.085_2048x2048.png?v=1702361678",
            acctualPrice: 12999,
            offPrice: 5999,
            offPercentage: 54
        }
    ];
    
    
    return (
        <>
            <section className="products">
                <div className="container">
                    <div className="grid-5">

                        {productList.map((product, index) => (
                            <Link className="single-pro" key={index}>
                                <div className="img">
                                    <img src={product.productImg} alt={product.productName} />
                                    <div className="off-per">{product.offPercentage}%</div>
                                    <div className="hover-content">
                                        <div className="eye"><i className="fa-regular fa-eye"></i></div>
                                    </div>
                                </div>
                                <div className="pro-det">
                                    <p className="pro-name">{product.productName}</p>
                                    <div className="priceing">
                                        <div className="acctual">₹ {product.acctualPrice}</div>
                                        <del>₹{product.offPrice}</del>
                                    </div>
                                    <div className="addToCart">
                                        add to cart
                                    </div>
                                </div>
                            </Link>
                        ))}


                    </div>
                </div>
            </section>
        </>
    )
}

export default NewArrival