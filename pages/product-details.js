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

    state = { product : {}, reviews: [], user: {} }

    componentDidMount () {
        this.setState({ user: JSON.parse(localStorage.getItem('user')) })

        const query = `
            query {
              Product(where: {id: "`+ this.props.query.id + `"}) {
                id,
                title,
                price,
                SKU,
                image,
                imageHover,
                description,
                detailDescription,
                additionalInfo,
                categories {slug}
              },
              allProductReviews(where: {originalProduct: {id: "`+ this.props.query.id + `"}}) {
                id,
                body,
                author {name},
                ratingStarsNumber,
                posted
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
                this.setState({product: result.data.Product, reviews: result.data.allProductReviews})
            })
          .catch(console.error);
        
    }


    render() {
        const { product, reviews, user } = this.state;
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title={product.title} />

                <section className="products-details-area pt-60">
                    <div className="container">
                        <div className="row">
                            <ProductImage src={product.image} srcHover={product.imageHover && product.imageHover.split(',')}/>
                            <ProductContent product={product} reviews={reviews}/>
                            <DetailsTab product={product} reviews={reviews} user={user} />
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
