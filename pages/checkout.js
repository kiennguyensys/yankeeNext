import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import CheckoutForm from '../components/checkout/CheckoutForm';

class Index extends Component {
    state = { user: undefined }

    componentDidMount () {
        this.setState({ user: JSON.parse(localStorage.getItem('user'))})
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Checkout" />
                <CheckoutForm user={this.state.user} />

                <Facility />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
