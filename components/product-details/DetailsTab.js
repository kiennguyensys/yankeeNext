import React, { Component } from 'react';
import Link from 'next/link';

const useTagFunc = () => {
    let useTag = '<use xlink:href="#star" />';
    return <svg className="star" dangerouslySetInnerHTML={{__html: useTag }} />;
}

class DetailsTab extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }

    render() {
        const { product } = this.props
        return (
            <div className="col-lg-12 col-md-12">
                <div className="tab products-details-tab">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <ul className="tabs">
                                <li 
                                    onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab1')}}
                                    className="current"
                                >
                                    <a href="#">
                                         Description
                                    </a>
                                </li>
                                
                                <li onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab2')}}>
                                    <a href="#">
                                        Additional information
                                    </a>
                                </li>

                                <li onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab5')}}>
                                    <a href="#">
                                         Reviews
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="tab_content">
                                <div id="tab1" className="tabs_item">
                                    <div className="products-details-tab-content">
                                        <span dangerouslySetInnerHTML={{__html: product.detailDescription}} />


                                    </div>
                                </div>

                                <div id="tab2" className="tabs_item">
                                    <div className="products-details-tab-content">
                                        <span dangerouslySetInnerHTML={{__html: product.additionalInfo}} />
                                    </div>
                                </div>



                                <div id="tab5" className="tabs_item">
                                    <div className="products-details-tab-content">
                                        <div className="product-review-form">
                                            <h3>Customer Reviews</h3>

                                            <div className="review-title">
                                                <div className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                                <p>Based on {this.props.reviews.length} reviews</p>

                                                <a href="#" className="btn btn-light">Write a Review</a>
                                            </div>

                                            <div className="review-comments">

                                                {
                                                    this.props.reviews.map((review, key) => (
                                                        <div key={key} className="review-item">
                                                            <div className="rating">
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="far fa-star"></i>
                                                            </div>
                                                            <h3>Good</h3>
                                                            <span><strong>{review.author.name}</strong> on <strong>{review.posted.split('T')[0]}</strong></span>
                                                            <p>{review.body}</p>

                                                            <a href="#" className="review-report-link">Report as Inappropriate</a>
                                                        </div>

                                                    ))
                                                }


                                            </div>

                                            <div className="review-form">
                                                <h3>Write a Review</h3>

                                                <form>
                                                    <div className="form-group">
                                                        <label>Name</label>
                                                        <input type="text" id="name" name="name" placeholder="Enter your name" className="form-control" />
                                                    </div>

                                                    <div className="form-group">
                                                        <label>Email</label>
                                                        <input type="email" id="email" name="email" placeholder="Enter your email" className="form-control" />
                                                    </div>

                                                    <div className="review-rating">
                                                        <p>Rate this item</p>
                                
                                                        <div className="star-source">
                                                            <svg>
                                                                <linearGradient x1="50%" y1="5.41294643%" x2="87.5527344%" y2="65.4921875%" id="grad">
                                                                    <stop stopColor="#f2b01e" offset="0%"></stop>
                                                                    <stop stopColor="#f2b01e" offset="60%"></stop>
                                                                    <stop stopColor="#f2b01e" offset="100%"></stop>
                                                                </linearGradient>
                                                                <symbol id="star" viewBox="153 89 106 108">   
                                                                    <polygon id="star-shape" stroke="url(#grad)" stroke-width="5" fill="currentColor" points="206 162.5 176.610737 185.45085 189.356511 150.407797 158.447174 129.54915 195.713758 130.842203 206 95 216.286242 130.842203 253.552826 129.54915 222.643489 150.407797 235.389263 185.45085"></polygon>
                                                                </symbol>
                                                            </svg>
                                                        </div>

                                                        <div className="star-rating">
                                                            <input type="radio" name="star" id="five" />
                                                            <label htmlFor="five">
                                                                {useTagFunc()}
                                                            </label>

                                                            <input type="radio" name="star" id="four" />
                                                            <label htmlFor="four">
                                                                {useTagFunc()}
                                                            </label>

                                                            <input type="radio" name="star" id="three" />
                                                            <label htmlFor="three">
                                                                {useTagFunc()}
                                                            </label>

                                                            <input type="radio" name="star" id="two" />
                                                            <label htmlFor="two">
                                                                {useTagFunc()}
                                                            </label>

                                                            <input type="radio" name="star" id="one" />
                                                            <label htmlFor="one">
                                                                {useTagFunc()}
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label>Review Title</label>
                                                        <input type="text" id="review-title" name="review-title" placeholder="Enter your review a title" className="form-control" />
                                                    </div>

                                                    <div className="form-group">
                                                        <label>Body of Review (1500)</label>
                                                        <textarea name="review-body" id="review-body" cols="30" rows="10" placeholder="Write your comments here" className="form-control" />
                                                    </div>
                                                    <button type="submit" className="btn btn-light">Submit Review</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailsTab;
