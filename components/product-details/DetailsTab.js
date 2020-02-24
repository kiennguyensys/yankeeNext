import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { apiUrl } from '../../utils/API.js';


const useTagFunc = () => {
    let useTag = '<use xlink:href="#star" />';
    return <svg className="star" dangerouslySetInnerHTML={{__html: useTag }} />;
}

class DetailsTab extends Component {
    constructor(props) {
        super(props);
        this.radio1 = React.createRef();
        this.radio2 = React.createRef();
        this.radio3 = React.createRef();
        this.radio4 = React.createRef();
        this.radio5 = React.createRef();
        this.reviewBody = React.createRef();
    }

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

    handleReviewSubmit = (e) => {
        const radio1 = this.radio1.current.checked
        const radio2 = this.radio2.current.checked
        const radio3 = this.radio3.current.checked
        const radio4 = this.radio4.current.checked
        const radio5 = this.radio5.current.checked

        if (radio1) this.createReview(1)
        if (radio2) this.createReview(2)
        if (radio3) this.createReview(3)
        if (radio4) this.createReview(4)
        if (radio5) this.createReview(5)


        e.preventDefault()
    }
    
    createReview = (stars) => {

        const body = this.reviewBody.current.value.toString()
        const date = new Date()

        const mutation = `
            mutation {
              createProductReview(data:{body: "` + body + `", originalProduct:{connect: { id: "` + this.props.product.id.toString() + `"}}, author:{connect: { id: "`+ this.props.user.id +`"}}, posted:"`+ date.toISOString() +`", ratingStarsNumber:` + stars + `}) {
                id,
                body
              }
            }
        `;

        const opts = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query:mutation })
        };
        fetch(apiUrl, opts)
          .then(res => res.json())
            .then(result => {
                if(result.data.createProductReview) {
                    Router.push('/')
                }
            })
          .catch(console.error);

    }

    render() {
        const { product, user } = this.props
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
                                                                {
                                                                    Array(review.ratingStarsNumber).fill(
                                                                        <i className="fas fa-star"></i>
                                                                    )
                                                                }
                                                            </div>
                                                            <span><strong>{review.author.name}</strong> on <strong>{review.posted.split('T')[0]}</strong></span>
                                                            <p>{review.body}</p>

                                                            <a href="#" className="review-report-link">Report as Inappropriate</a>
                                                        </div>

                                                    ))
                                                }


                                            </div>

                                            <div className="review-form">
                                                <h3>Write a Review</h3>
                                                {
                                                    user ?
                                                        (
                                                            <form>
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
                                                                        <input type="radio" name="star" id="five" value="5" ref={this.radio5} />
                                                                        <label htmlFor="five">
                                                                            {useTagFunc()}
                                                                        </label>

                                                                        <input type="radio" name="star" id="four" value="4" ref={this.radio4} />
                                                                        <label htmlFor="four">
                                                                            {useTagFunc()}
                                                                        </label>

                                                                        <input type="radio" name="star" id="three" value="3" ref={this.radio3} />
                                                                        <label htmlFor="three">
                                                                            {useTagFunc()}
                                                                        </label>

                                                                        <input type="radio" name="star" id="two" value="2" ref={this.radio2} />
                                                                        <label htmlFor="two">
                                                                            {useTagFunc()}
                                                                        </label>

                                                                        <input type="radio" name="star" id="one" value="1" ref={this.radio1} />
                                                                        <label htmlFor="one">
                                                                            {useTagFunc()}
                                                                        </label>
                                                                    </div>
                                                                </div>

                                                                <div className="form-group">
                                                                    <label>Body of Review (1500)</label>
                                                                    <textarea name="review-body" ref={this.reviewBody} cols="30" rows="10" placeholder="Write your comments here" className="form-control" />
                                                                </div>
                                                                <button className="btn btn-light" onClick={this.handleReviewSubmit}>Submit Review</button>
                                                            </form>
                                                        ) :
                                                        (
                                                            <p>* Login is required to review</p>
                                                        )
                                                    }
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
