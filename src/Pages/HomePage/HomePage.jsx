import React from 'react'
import Head from '../../Components/Head/Head'
import NewArrival from '../../Components/FilterProduct/NewArrival'
import Category from '../../Components/Category/Category'

const HomePage = () => {
  return (
    <>


        {/* --- Carasouel ---  */}
        <section className="cara">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-7">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src="https://theadvitya.com/cdn/shop/files/Advitya_Banner_4_copy_1_855x.jpg?v=1709102338" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                <img src="https://theadvitya.com/cdn/shop/files/Advitya_Banner_7_855x.jpg?v=1709115702" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                <img src="https://theadvitya.com/cdn/shop/files/Advitya_Banner_1_855x.jpg?v=1709035493" class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    {/* --- Side Images ---  */}
                    <div className="col-md-5">
                        <div className="row">
                            <div className="col-6">
                                <img src="https://theadvitya.com/cdn/shop/files/Advitya_Banner_3_292x.jpg?v=1709040969" alt="" />
                            </div>
                            <div className="col-6">
                                <img src="https://theadvitya.com/cdn/shop/files/Advitya_Banner_2_1_292x.jpg?v=1709041039" alt="" />
                            </div>
                            <div className="col-12">
                                <img src="https://theadvitya.com/cdn/shop/files/clock-new-size_605x.png?v=1683467649" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <Head title="Our Categories" para="" />
        <Category/>
        <Head title="new arrival" para="The top wishes of this week" />
        <NewArrival/>
        <Head title="Buddh Purnima collection" para="" />
        <NewArrival/>

        <section className='my-5'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://theadvitya.com/cdn/shop/files/Advitya_Banner_6_760x.jpg?v=1709115956" alt="" />
                    </div>
                    <div className="col-md-6">
                        <img src="https://theadvitya.com/cdn/shop/files/Banner_Edit_5A_760x.jpg?v=1711453166" alt="" />
                    </div>
                </div>
            </div>
        </section>

        <Head title="Best Sellers" para="" />
        <NewArrival/>
    </>
  )
}

export default HomePage