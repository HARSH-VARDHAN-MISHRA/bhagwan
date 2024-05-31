import React from 'react'
import './Category.css'
import { Link } from 'react-router-dom';

const Category = () => {
    const categoryList = [
        {
            cateImage: "https://cdn.shopify.com/s/files/1/0709/7421/0333/files/GANESH_CHATURTHI.jpg?v=1683301568",
            cateName: "GANESH CHATURTHI"
        },
        {
            cateImage: "https://cdn.shopify.com/s/files/1/0709/7421/0333/files/JANMASTHAMI.jpg?v=1683301483",
            cateName: "JANMASHTAMI"
        },
        {
            cateImage: "https://cdn.shopify.com/s/files/1/0709/7421/0333/files/NAVRATRI.png?v=1683301571",
            cateName: "NAVRATRI"
        },
        {
            cateImage: "https://cdn.shopify.com/s/files/1/0709/7421/0333/files/DIWALI.jpg?v=1683301568",
            cateName: "DIWALI"
        },
        {
            cateImage: "https://cdn.shopify.com/s/files/1/0709/7421/0333/files/DHANTERAS.png?v=1683301570",
            cateName: "DHANTERAS"
        },
        {
            cateImage: "https://cdn.shopify.com/s/files/1/0709/7421/0333/files/SHIVRATRI.png?v=1683301570",
            cateName: "SHIVRATRI"
        }
    ];

    return (
        <>
            <section className="category">
                <div className="container">
                    <div className="grid-5 grid-6">

                        {categoryList.map((category, index) => (
                            <Link to={`/collections/collection-name`} className="single-category text-center" key={index}>
                                <div className="img">
                                    <img src={category.cateImage} alt={category.cateName} />
                                </div>
                                <h4>{category.cateName}</h4>
                            </Link>
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Category