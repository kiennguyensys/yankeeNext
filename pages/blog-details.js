import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import DetailsContent from '../components/blog/DetailsContent';

class Index extends Component {
    static async getInitialProps({ req, query, params }) {

            return { query, params }
    }
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Sim Blogs" />
                <DetailsContent slug={this.props.query.slug}/>
                
                <Facility />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;