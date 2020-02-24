import React, { Component } from 'react';
import Link from 'next/link';
import { apiUrl } from '../../utils/API.js';

export class BlogGrid extends Component {
    state = { blogs: [] }
    componentDidMount () {
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

        const opts = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query })
        };
        fetch(apiUrl, opts)
          .then(res => res.json())
            .then(result => {
                console.log(result)
                this.setState({blogs: result.data.allPosts})
            })
          .catch(console.error);
    }

    render() {

        const { blogs } = this.state
        return (
            <section className="news-area ptb-60">
                <div className="container">
                    <div className="row">
                {
                    blogs.map(data => (
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href={"/blog-details?slug=" + data.slug}>
                                        <a><img src={data.image} alt="image" /></a>
                                    </Link>

                                </div>

                                <div className="blog-post-content">
                            <span className="date">{data.posted.split('T')[0]}</span>

                            <h3><a href="#">{data.title}</a></h3>
                                    <span dangerouslySetInnerHTML={{__html: data.brief_description}} />
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                    ))
                }

                    </div>
                </div>
            </section>
        );
    }
}

export default BlogGrid;
