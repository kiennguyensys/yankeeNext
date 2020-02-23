import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';
import Link from 'next/link';
import ReactTooltip from 'react-tooltip';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import QuickView from '../Modal/QuickView';

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        1024: {
            items: 3,
        },
        1200: {
            items: 4,
        }
    }
}

class RelatedProducts extends Component {
    state = { 
        display: false,
        modalOpen: false,
        modalImage: '',
        products:[],
        price: 0,
        idd: null,
        modalProduct: {}
    };

    handleAddToCart = (id) => {
        //this.props.addToCart(id); 

        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    fetchData = (category) => {
        const query = `
            query {
              allProducts(where: {categories_every: {slug: "`+ category.toString() +`"}}) {
                id,
                title,
                SKU,
                price,
                image,
                imageHover
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
                this.setState({products: result.data.allProducts})
            })
          .catch(console.error);
    }

    componentDidUpdate(prevProps) {
      // Typical usage (don't forget to compare props):
      if (this.props.categories !== prevProps.categories) {
        this.fetchData(this.props.categories[0].slug);
      }
    }

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    openModal = () => {
        this.setState({ modalOpen: true });
    }

    closeModal = () => {
        this.setState({ modalOpen: false });
    }

    handleModalData = (product) => {
        this.setState({ 
            modalProduct: product, 
        });
    }

    render() {
        let { products } = this.state;
        const { modalOpen } = this.state;
        return (
            <React.Fragment>
                <ReactTooltip />
                <ToastContainer transition={Slide} />
                <div className="related-products-area">
                    <div className="container">
                        <div className="section-title">
                            <h2>Related Products</h2>
                        </div>

                        <div className="row">
                            {(this.state.display && products.length) ? <OwlCarousel 
                                className="trending-products-slides-two owl-carousel owl-theme"
                                {...options}
                            >
                                {products.map((data, idx) => (
                                    <div className="col-lg-12 col-md-12" key={idx}>
                                        <div className="single-product-box">
                                            <div className="product-image">
                                                <Link href={"/product-details?id=" + data.id}>
                                                    <a>
                                                        <img src={data.image} alt="image" />
                                                        <img src={data.imageHover} alt="image" />
                                                    </a>
                                                </Link>

                                                <ul>
                                                    <li>
                                                        <Link href="#">
                                                            <a 
                                                                data-tip="Quick View" 
                                                                data-place="left" 
                                                                onClick={e => {
                                                                        e.preventDefault(); 
                                                                        this.openModal();
                                                                        this.handleModalData(data)
                                                                    }
                                                                }
                                                            >
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">
                                                            <a data-tip="Add to Wishlist" data-place="left">
                                                                <i className="far fa-heart"></i>
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">
                                                            <a data-tip="Add to Compare" data-place="left">
                                                                <i className="fas fa-sync"></i>
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="product-content">
                                                <h3>
                                                    <Link href="#">
                                                        <a>{data.title}</a>
                                                    </Link>
                                                </h3>

                                                <div className="product-price">
                                                    <span className="new-price">{data.price} đ</span>
                                                </div>

                                                <div className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                                <Link href="#">
                                                    <a 
                                                        className="btn btn-light"
                                                        onClick={(e) => {
                                                            e.preventDefault(); this.handleAddToCart(data.id)
                                                        }}
                                                    >
                                                        Add to Cart
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </OwlCarousel> : ''}
                        </div>
                    </div>
                </div>
                { modalOpen ? <QuickView 
                    closeModal={this.closeModal} 
                    idd={this.state.idd}
                    product={this.state.modalProduct}
                /> : '' }
            </React.Fragment>
        );
    }
}

export default RelatedProducts;


