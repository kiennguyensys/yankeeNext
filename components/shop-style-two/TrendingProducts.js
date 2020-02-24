import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';
import Link from 'next/link';
import ReactTooltip from 'react-tooltip'
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuickView from '../Modal/QuickView';
import dynamic from 'next/dynamic';
import { apiUrl } from '../../utils/API.js';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
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

class TrendingProducts extends Component {
    state = {
        modalOpen: false,
        modalImage: '',
        price: 0,
        idd: null,
        display: false,
        products: [],
        modalProduct: {}
    };

    handleAddToCart = (product) => {
        this.props.addToCart(product); 

        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    componentDidMount(){ 
        this.setState({ display: true }) 
        const query = `
            query {
              allProducts(where: {categories_every: {slug: "`+ this.props.category.toString() +`"}}) {
                id,
                title,
                price,
                image,
                imageHover
              }
            }
        `;


        const opts = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query })
        };
        fetch(apiUrl, opts)
          .then(res => res.json())
            .then(result => {
                if(result.data.allProducts)
                    this.setState({products: result.data.allProducts})
            })
          .catch(console.error);
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
            <section className="trending-products-area pb-60">
                <ReactTooltip  />
                <ToastContainer transition={Slide} />
                <div className="container">
                    <div className="section-title without-bg">
                        <h2><span className="dot"></span> {this.props.title}</h2>
                    </div>

                    <div className="row">
                    {(this.state.display && products.length) ? <OwlCarousel 
                        className="trending-products-slides owl-carousel owl-theme"
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
                                            <Link href="/product-details">
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
                                                    e.preventDefault(); this.handleAddToCart(data)
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
                { modalOpen ? <QuickView 
                    closeModal={this.closeModal} 
                    idd={this.state.idd}
                    product={this.state.modalProduct}
                /> : '' }
            </section>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => { dispatch(addToCart(product)) }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(TrendingProducts)




