import React, { Component } from 'react';
import Link from 'next/link';

class CategoryProducts extends Component {
    render() {
        return (
            <section className="category-products-area pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="single-category-box">
                                <img src={require("../../images/category-products-img1.jpg")} alt="image" />

                                <div className="category-content">
                                    <h3>SIM DU LỊCH MỸ CANADA</h3>
                                    <Link href="#">
                                        <a className="btn btn-light">View More</a>
                                    </Link>
                                </div>

                                <Link href="#">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-category-box">
                                        <img src={require("../../images/category-products-img2.jpg")} alt="image" />
            
                                        <div className="category-content">
                                            <h3>SIM DU LỊCH MỸ</h3>
                                        </div>
            
                                        <Link href="#">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-category-box">
                                        <img src={require("../../images/category-products-img3.jpg")} alt="image" />
            
                                        <div className="category-content">
                                            <h3>CHÂU Á</h3>
                                        </div>
            
                                        <Link href="#">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="single-category-box">
                                        <img src={require("../../images/category-products-img4.jpg")} alt="image" />
            
                                        <div className="category-content">
                                            <h3>CHÂU ÂU, CHÂU ÚC, CHÂU PHI</h3>
                                        </div>
            
                                        <Link href="#">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CategoryProducts;
