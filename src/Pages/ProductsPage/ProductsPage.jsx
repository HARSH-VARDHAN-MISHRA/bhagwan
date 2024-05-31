import React, { useState } from 'react'
import './ProductsPage.css'
import { Link } from 'react-router-dom'

const ProductsPage = () => {
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
        },
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
        },
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
        },
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
        },
    ];

    const [displayCount, setDisplayCount] = useState(5);
    const [loading, setLoading] = useState(false);

    const handleShowMore = () => {
        setLoading(true);
        setTimeout(() => {
            setDisplayCount(prevCount => prevCount + 4)
            setLoading(false);
        }, 2000);
    }
    return (
        <>
            <section class="bread mb-5">
                <div class="container">
                    <nav aria-label="breadcrumb ">
                        <h2>Hindu Deities</h2>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Hindu Deities</li>
                        </ol>
                    </nav>
                </div>
            </section>


            <section className="products">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 d-none d-md-block">

                            {/* ---- Accordions ---  */}
                            <div class="accordion" id="accordionPanelsStayOpenExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                        <div class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                            COLLECTIONS
                                        </div>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                        <div class="accordion-body">
                                            <ul>
                                                <li><Link to="">Hindu Deities</Link></li>
                                                <li><Link to="">Home Decor</Link></li>
                                                <li><Link to="">Home Kitchen</Link></li>
                                                <li><Link to="">Pooja Decor</Link></li>
                                                <li><Link to="">Antique Collection</Link></li>
                                                <li><Link to="">Resin Collection</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                        <div class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                            Price
                                        </div>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                        <div class="accordion-body">
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                        <div class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                            AVAILABILITY
                                        </div>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                        <div class="accordion-body">
                                            <ul>
                                                <li><Link to="">In Stock</Link></li>
                                                <li><Link to="">Out of Stock</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="col-md-9">

                            {/* --- Collection Products --  */}
                            <div className="head-ban flex mb-4">
                                <h3 >Hindu Deities (55)</h3>
                                <div className="grids-btns">
                                    <select name="selection" id="selection">
                                        <option>Featured</option>
                                        <option>Best Selling</option>
                                        <option>Price Ascending</option>
                                        <option>Price Descending</option>
                                        <option>Name Ascending</option>
                                        <option>Name Descending</option>
                                        <option>Date Ascending</option>
                                        <option>Date Descending</option>
                                    </select>
                                </div>
                            </div>


                            <div className="grid-2 grid-3">
                                {productList.slice(0, displayCount).map((product, index) => (
                                    <Link to={`/collections/collection-name/product-name`} className="single-pro" key={index}>
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

                            {loading && (
                                <div className="loader">
                                    <div className="spinner"></div>
                                </div>
                            )}


                            {displayCount < productList.length && (
                                <div className="show-more">
                                    <button onClick={handleShowMore}>Show More</button>
                                </div>
                            )}

                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductsPage