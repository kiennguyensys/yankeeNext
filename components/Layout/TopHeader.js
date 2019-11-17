import React, { Component } from 'react';
import Link from 'next/link';
import Wishlist from '../Modal/Wishlist';

class TopHeader extends Component {

    state = {
        display: false
    };

    handleWishlist = () => {
        this.setState( prevState => {
            return {
                display: !prevState.display
            };
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="top-header">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-6">
                                <ul className="top-header-nav">
                                    <li><Link href="/"><a>About</a></Link></li>
                                    <li><Link href="/"><a>Our Stores</a></Link></li>
                                    <li><Link href="/"><a>FAQ's</a></Link></li>
                                    <li><Link href="/"><a>Contact</a></Link></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                {this.state.display ? <Wishlist onClick={this.handleWishlist} /> : ''}
            </React.Fragment>
        );
    }
}

export default TopHeader;
