import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Banner from '../components/shop-style-two/Banner';
import OfferArea from '../components/shop-style-one/OfferArea';
import ProductRow from '../components/shop-style-two/TrendingProducts';
import Products from '../components/shop-style-two/Products';
import Facility from '../components/Common/Facility';
import Feature from '../components/Common/Feature';
import Testimonials from '../components/Common/Testimonials';
import News from '../components/Common/News';
import Partner from '../components/Common/Partner';
import { login, logout } from '../store/actions/sessionActions.js';
import { connect } from 'react-redux';


import Footer from '../components/Layout/Footer';


class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <Feature />

                <OfferArea />

                <Products categories={["sim-mi-gia-re", "sim-mi-canada", "sim-chau-au"]}/>

                <ProductRow category="sim-chau-a" title="Sim Châu Á"/>
                <ProductRow category="sim-chau-uc" title="Sim Châu Úc"/>

                <Facility />
                <Testimonials />
                <News />

                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;