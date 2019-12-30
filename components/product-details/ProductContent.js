import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { addQuantityWithNumber } from '../../store/actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SizeGuide from './SizeGuide';
import Shipping from './Shipping';

class ProductContent extends Component {
    state = {
        qty: 1,
        max: 10,
        min: 1,
        sizeGuide: false,
        shipModal: false
    };

    handleAddToCartFromView = () => {
        this.props.addQuantityWithNumber(this.props.product, this.state.qty); 

        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    IncrementItem = () => {
        this.setState(prevState => {
            if(prevState.qty < 10) {
                return {
                    qty: prevState.qty + 1
                }
            } else {
                return null;
            }
        });
    }

    DecreaseItem = () => {
        this.setState(prevState => {
            if(prevState.qty > 1) {
                return {
                    qty: prevState.qty - 1
                }
            } else {
                return null;
            }
        });
    }

    openSizeGuide = () => {
        this.setState({ sizeGuide: true });
    }

    closeSizeGuide = () => {
        this.setState({ sizeGuide: false });
    }

    openShipModal = () => {
        this.setState({ shipModal: true });
    }

    closeShipModal = () => {
        this.setState({ shipModal: false });
    }

    render() {
        const { sizeGuide, shipModal } = this.state;
        const { product } = this.props;
        return (
            <React.Fragment>
                <div className="col-lg-6 col-md-6">
                    <ToastContainer />
                    <div className="product-details-content">
                        <h3>{product.title}</h3>

                        <div className="price">
                            <span className="new-price">{product.price} đ</span>
                        </div>

                        <div className="product-review">
                            <div className="rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <Link href="#">
                                <a className="rating-count">{this.props.reviews.length} reviews</a>
                            </Link>
                        </div>

                        <p>{product.description}</p>

                        <ul className="product-info">

                        </ul>


                        <div className="product-info-btn">
                            <Link href="#">
                                <a
                                    onClick={e => {
                                        e.preventDefault(); 
                                        this.openShipModal();
                                    }}
                                >
                                    <i className="fas fa-truck"></i> Shipping
                                </a>
                            </Link>
                            <a href="#"><i className="far fa-envelope"></i> Ask about this product</a>
                        </div>

                        <div className="product-add-to-cart">
                            <div className="input-counter">
                                <span 
                                    className="minus-btn"
                                    onClick={this.DecreaseItem}
                                >
                                    <i className="fas fa-minus"></i>
                                </span>
                                <input 
                                    type="text" 
                                    value={this.state.qty}
                                    min={this.state.min}
                                    max={this.state.max} 
                                    onChange={e => this.setState({ qty: e.target.value })}
                                />
                                <span 
                                    className="plus-btn"
                                    onClick={this.IncrementItem}
                                >
                                    <i className="fas fa-plus"></i>
                                </span>
                            </div>

                            <button 
                                type="submit" 
                                className="btn btn-primary"
                                onClick={this.handleAddToCartFromView}
                            >
                                <i className="fas fa-cart-plus"></i> Add to Cart
                            </button>
                        </div>


                        <div className="buy-checkbox-btn">
                            <div className="item">
                                <input className="inp-cbx" id="cbx" type="checkbox" />
                                <label className="cbx" htmlFor="cbx">
                                    <span>
                                        <svg width="12px" height="10px" viewBox="0 0 12 10">
                                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                        </svg>
                                    </span>
                                    <span>I agree with the terms and conditions</span>
                                </label>
                            </div>

                            <div className="item">
                                <a href="#" className="btn btn-primary">Buy it now!</a>
                            </div>
                        </div>

                        <div className="custom-payment-options">
                            <span>Guaranteed safe checkout:</span>

                            <div className="payment-methods">
                                <a href="#">
                                    <img src={require("../../images/payment-image/1.svg")} alt="image" />
                                </a>
                                <a href="#">
                                    <img src={require("../../images/payment-image/2.svg")} alt="image" />
                                </a>
                                <a href="#">
                                    <img src={require("../../images/payment-image/3.svg")} alt="image" />
                                </a>
                                <a href="#">
                                    <img src={require("../../images/payment-image/4.svg")} alt="image" />
                                </a>
                                <a href="#">
                                    <img src={require("../../images/payment-image/5.svg")} alt="image" />
                                </a>
                                <a href="#">
                                    <img src={require("../../images/payment-image/6.svg")} alt="image" />
                                </a>
                                <a href="#">
                                    <img src={require("../../images/payment-image/7.svg")} alt="image" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                { sizeGuide ? <SizeGuide 
                    closeSizeGuide={this.closeSizeGuide} 
                /> : '' }
                { shipModal ? <Shipping closeShipModal={this.closeShipModal} /> : '' }
            </React.Fragment>
        );
    }
}

const mapDispatchToProps= (dispatch)=>{
    return {
        addQuantityWithNumber: (product, qty) => {dispatch(addQuantityWithNumber(product, qty))}
    }
}

export default connect(
    null,
    mapDispatchToProps
)(ProductContent)



