import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

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
        768: {
            items: 2,
        },
        1024: {
            items: 3,
        }
    }
}

class News extends Component {
    state = { 
        display: false,
        panel: true,
        blogs: []
    };

    componentDidMount () {
        this.setState({ display: true }) 
        const query = `
            query {
              allPosts(where: {id_not: 0}) {
                id,
                title,
                slug,
                body,
                posted,
                image,
                brief_description
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
                this.setState({blogs: result.data.allPosts})
            })
          .catch(console.error);
    }

    render() {
        return (
            <section className="news-area ptb-60">
                <div className="container">
                    <div className="section-title">
                        <h2><span className="dot"></span> News</h2>
                    </div>

                    <div className="row">
                        {this.state.display ? <OwlCarousel 
                            className="news-slides owl-carousel owl-theme"
                            {...options}
                        >
                            {this.state.blogs.map((blog, key) => (
                                <div className="col-lg-12 col-md-12" key={key} > 
                                    <div className="single-news-post">
                                        <div className="news-image">
                                            <Link href="#">
                                                <a>
                                                    <img src={blog.image} alt="image" />
                                                </a>
                                            </Link>
                                        </div>

                                        <div className="news-content">
                                            <h3>
                                                <Link href="#">
                                                    <a>{blog.title}</a>
                                                </Link>
                                            </h3>
                                            <span className="author">By <a href="#">Admin</a></span>
                                            <p>{blog.brief_description}</p>
                                            <Link href="#">
                                                <a className="btn btn-light">Read More</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </section>
        );
    }
}

export default News;
