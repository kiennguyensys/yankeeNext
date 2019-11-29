import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Breadcrumb from '../components/Common/Breadcrumb';
import Footer from '../components/Layout/Footer';
import ProductImage from '../components/product-details/ProductImage';
import ProductContent from '../components/product-details/ProductContent';
import DetailsTab from '../components/product-details/DetailsTab';
import RelatedProducts from '../components/product-details/RelatedProducts';
import Facility from '../components/shop-style-one/Facility';

class Index extends Component {
    static async getInitialProps({ req, query, params }) {

            return { query, params }
    }

    state = { product : {} }

    componentDidMount () {
        const query = `
            query {
              Product(where: {id: "`+ this.props.query.id + `"}) {
                id,
                title,
                price,
                image,
                imageHover,
                description,
                categories {slug}
              }
            }
        `;

        const url = "https://yankeesim-admin.herokuapp.com/admin/api";
        const opts = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query })
        };
        fetch(url, opts)
          .then(res => res.json())
            .then(result => {
                console.log(result)
                this.setState({product: result.data.Product})
            })
          .catch(console.error);
        
    }


    render() {
        const { product } = this.state;
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title={product.title} />

                <section className="products-details-area pt-60">
                    <div className="container">
                        <div className="row">
                            <ProductImage src={product.image}/>
                            <ProductContent product={product}/>
                            <DetailsTab product={product}/>
                        </div>
                    </div>

                    <RelatedProducts categories={product.categories}/>

                    <Facility />
                </section>

                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
