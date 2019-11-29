import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Banner from '../components/shop-style-two/Banner';
import OfferArea from '../components/shop-style-one/OfferArea';
import ProductRow from '../components/shop-style-two/TrendingProducts';
import Facility from '../components/Common/Facility';
import Feature from '../components/Common/Feature';
import Testimonials from '../components/Common/Testimonials';
import Partner from '../components/Common/Partner';

import Footer from '../components/Layout/Footer';


class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <Feature />
                <br />

                <ProductRow category="sim-mi-gia-re" title="Sim Mỹ giá rẻ"/>
                <ProductRow category="sim-mi-canada" title="Sim Mỹ Canada"/>
                <ProductRow category="sim-chau-a" title="Sim Châu Á"/>
                <ProductRow category="sim-chau-au" title="Sim Châu Âu"/>

                <OfferArea />
                <Testimonials />
                <Facility />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
