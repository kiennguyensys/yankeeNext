import React, { Component } from 'react';
import { connect } from 'react-redux'
import Link from 'next/link';
import Cart from '../Modal/Cart';

class MegaMenu extends Component {

    state = {
        display: false,
        searchForm: false,
        collapsed: true
    };

    handleCart = () => {
        this.setState( prevState => {
            return {
                display: !prevState.display
            };
        });
    }

    handleSearchForm = () => {
        this.setState( prevState => {
            return {
                searchForm: !prevState.searchForm
            };
        });
    }

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }

    render() {
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        let { products } = this.props;
        return (
            <React.Fragment>
            <div className="navbar-area">
                <div id="navbar" className="comero-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src={require("../../images/logo.png")} alt="logo" />
                                </a>
                            </Link>

                            <button 
                                onClick={this.toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item p-relative">
                                        <Link href="#">
                                            <a className="nav-link active">
                                                Home <i className="fas fa-chevron-down"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    
                                    <li className="nav-item megamenu">
                                        <Link href="#">
                                            <a className="nav-link">
                                                Shop <i className="fas fa-chevron-down"></i>
                                            </a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col">

                                                            <ul className="megamenu-submenu">
                                                                <li>
                                                                    <Link href="/category-left-sidebar">
                                                                        <a>Left Sidebar</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>


                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>




                                    <li className="nav-item p-relative">
                                        <Link href="#">
                                            <a className="nav-link">
                                                Pages <i className="fas fa-chevron-down"></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/about">
                                                    <a className="nav-link">About Us</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/sizing-guide">
                                                    <a className="nav-link">Sizing Guide</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/gallery">
                                                    <a className="nav-link">Gallery</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item"><a href="#" className="nav-link">Account</a>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/login">
                                                            <a className="nav-link">Login</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/signup">
                                                            <a className="nav-link">Signup</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/cart">
                                                            <a className="nav-link">Cart</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/cart">
                                                    <a className="nav-link">Cart</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/checkout">
                                                    <a className="nav-link">Checkout</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/compare">
                                                    <a className="nav-link">Compare</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/customer-service">
                                                    <a className="nav-link">Customer Service</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/login">
                                                    <a className="nav-link">Login</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/signup">
                                                    <a className="nav-link">Signup</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/faq">
                                                    <a className="nav-link">FAQs</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/error">
                                                    <a className="nav-link">Error 404</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/contact-us">
                                                    <a className="nav-link">Contact Us</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item p-relative">
                                        <Link href="#">
                                            <a className="nav-link">Blog <i className="fas fa-chevron-down"></i></a>
                                        </Link>
                                        <ul className="dropdown-menu">

                                            <li className="nav-item">
                                                <Link href="/blog">
                                                    <a className="nav-link">Blog</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>

                                <div className="others-option">

                                    <div className="option-item">
                                        
                                        <i 
                                            onClick={this.handleSearchForm} 
                                            className="search-btn fas fa-search"
                                            style={{
                                                display: this.state.searchForm ? 'none' : 'block'
                                            }}
                                        ></i>

                                        <i 
                                            onClick={this.handleSearchForm} 
                                            className={`close-btn fas fa-times ${this.state.searchForm ? 'active' : ''}`}
                                        ></i>
                                        
                                        <div 
                                            className="search-overlay search-popup"
                                            style={{
                                                display: this.state.searchForm ? 'block' : 'none'
                                            }}
                                        >
                                            <div className='search-box'>
                                                <form className="search-form">
                                                    <input className="search-input" name="search" placeholder="Search" type="text" />

                                                    <button className="search-button" type="submit"><i className="fas fa-search"></i></button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="option-item">
                                        <Link href="/login">
                                            <a>Login</a>
                                        </Link>
                                    </div>

                                    <div className="option-item">
                                        <Link href="#">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    this.handleCart()
                                                }}
                                            >
                                                Cart({products.length}) <i className="fas fa-shopping-bag"></i>
                                            </a>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            {this.state.display ? <Cart onClick={this.handleCart} /> : ''}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        products: state.addedItems
    }
}

export default connect(mapStateToProps)(MegaMenu)
