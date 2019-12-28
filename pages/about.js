import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import Testimonials from '../components/Common/Testimonials';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="About Us" />
                <section className="about-area ptb-60">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <h2>About Our Store</h2>
                                    <a href="https://www.facebook.com/yankeesimcard/"><i className="fab fa-facebook-f"></i>   Yankeesim</a>

                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="about-image">
                                    <img src="https://yankeesim.com/wp-content/uploads/2019/04/yankee3.jpg" className="about-img1" alt="image" />

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Testimonials />
                <Facility />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
