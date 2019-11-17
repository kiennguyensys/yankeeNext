import React, { Component } from 'react';
import Link from 'next/link';
import VisibilitySensor from "react-visibility-sensor";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    items: 1,
    smartSpeed: 750,
    autoplay: true,
    navText: [
        "<i class='fas fa-arrow-left'></i>",
        "<i class='fas fa-arrow-right'></i>"
    ]
}

class Banner extends Component {
    state = { 
        display: false,
        panel: true
    };

    componentDidMount(){ 
        this.setState({ display: true }) 
    }
    render() {
        return (
            <React.Fragment>
            {this.state.display ? <OwlCarousel 
                className="home-slides owl-carousel owl-theme"
                {...options}
            >
                <div className="main-banner item-bg2">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <VisibilitySensor>
                                    {({ isVisible }) => (
                                        <div className="main-banner-content">
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-banner item-bg1">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <VisibilitySensor>
                                    {({ isVisible }) => (
                                        <div className="main-banner-content">
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-banner item-bg3">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <VisibilitySensor>
                                    {({ isVisible }) => (
                                        <div className="main-banner-content">

                                        </div>
                                    )}
                                </VisibilitySensor>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel> : ''}
            </React.Fragment>
        );
    }
}

export default Banner;
