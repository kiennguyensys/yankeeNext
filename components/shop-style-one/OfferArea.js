import React, { Component } from 'react';
import Link from 'next/link';

class OfferArea extends Component {
    render() {
        return (
            <section className="offer-area ptb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="offer-box">
                                <img style={{width: 359, height: 400}} src={require("../../images/SimTmo10Ngay.jpg")} alt="image" />

                                <div className="category">
                                    <h4>MUA NGAY</h4>
                                </div>

                                <div className="box-inner">
                                    <h3>T-Mobile 10 Days</h3>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a>1tr</a>
                                            </Link>

                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Cheap Price</a>
                                            </Link>

                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="offer-box">
                                <img style={{width: 359, height: 400}} src={require("../../images/SimTmo50G.jpg")} alt="image" />

                                <div className="category">
                                    <h4>MUA NGAY</h4>
                                </div>

                                <div className="box-inner">
                                    <h3>T-Mobile 50G</h3>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a>1tr5</a>
                                            </Link>

                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Dùng tại Mỹ, Canada, Mexico</a>
                                            </Link>

                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="offer-box">

                                <img style={{width: 359, height: 400}} src={require("../../images/SimTmo10G.png")} alt="image" />
                                <div className="category">
                                    <h4>MUA NGAY</h4>
                                </div>

                                <div className="box-inner">
                                    <h3>T-Mobile 10G</h3>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a>1tr3</a>
                                            </Link>

                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Best Seller</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OfferArea;
