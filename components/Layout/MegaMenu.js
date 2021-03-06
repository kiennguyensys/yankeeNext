import React, { Component } from 'react';
import { connect } from 'react-redux'
import Link from 'next/link';
import Cart from '../Modal/Cart';
import { apiUrl } from '../../utils/API.js';

class MegaMenu extends Component {

    state = {
        display: false,
        searchForm: false,
        collapsed: true,
        user: {},
        categories: []
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

        this.setState({user: JSON.parse(localStorage.getItem('user'))})

        const query = `
            query {
              allProductCategories(where: {id_not: 0}) {
                id,
                name,
                slug,
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
                this.setState({categories: result.data.allProductCategories})
            })
          .catch(console.error);
    }

    render() {
        const { collapsed, user, categories } = this.state;

        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

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
                                    
                                    <li className="nav-item p-relative">
                                        <Link href="/category-left-sidebar">
                                            <a className="nav-link">
                                                Shop <i className="fas fa-chevron-down"></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            {
                                                categories.map(category => (
                                                    <li key={category.id} className="nav-item">
                                                        <Link href={"/category-left-sidebar?category=" + category.slug}>
                                                            <a>{category.name}</a>
                                                        </Link>
                                                    </li>
                                                ))
                                            }




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

                                    { !user ? (
                                        <div className="option-item">
                                            <Link href="/login">
                                                <a>Login</a>
                                            </Link>
                                        </div>
                                    ) : (
                                        <div className="option-item">
                                            <Link href="/account">
                                                <a>{user.name}</a>
                                            </Link>
                                        </div>
                                    )}
                                    <div className="option-item">
                                        <Link href="#">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    this.handleCart()
                                                }}
                                            >
                                                Cart({this.props.products.length}) <i className="fas fa-shopping-bag"></i>
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