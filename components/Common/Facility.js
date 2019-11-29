import React, { Component } from 'react';

class Facility extends Component {
    render() {
        return (
            <section className="facility-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="facility-box">
                                <div className="icon">
                                    <i className="fas fa-truck-moving"></i>
                                </div>
                                <h3>Free Shipping</h3>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="facility-box">
                                <div className="icon">
                                    <i className="fas fa-money-check-alt"></i>
                                </div>
                                <h3>100% money back guarantee</h3>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="facility-box">
                                <div className="icon">
                                    <i className="fas fa-headset"></i>
                                </div>
                                <h3>Detail support</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Facility;
