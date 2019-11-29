import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Breadcrumb from '../components/Common/Breadcrumb';
import Facility from '../components/Common/Facility';
import LeftSidebar from '../components/Sidebar/LeftSidebar';
import ProductsFilterOptions from '../components/Common/ProductsFilterOptions';
import ProductsCard from '../components/products/ProductsCard';

class Index extends Component {

    static async getInitialProps({ req, query, params }) {

            return { query, params }
    }

    state = {
        gridClass: ''
    }

    handleGrid = (e) => {
        this.setState({
            gridClass: e
        });
    }

    render() {
        let { gridClass } = this.state;
        let category = this.props.query && this.props.query.category;

        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Sim" />

                <section className="products-collections-area ptb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2>Sims</h2>
                        </div>

                        <div className="row">
                            <LeftSidebar />
 
                            <div className="col-lg-8 col-md-12">
                                <ProductsFilterOptions onClick={this.handleGrid} />

                                <div id="products-filter" className={`products-collections-listing row ${gridClass}`}>
                                    <ProductsCard category={category}/> 
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Facility />

                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
