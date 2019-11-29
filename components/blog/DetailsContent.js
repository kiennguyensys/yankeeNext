import React, { Component } from 'react';

export class DetailsContent extends Component {

    state = {blog: {}, comments: []}

    componentDidMount () {

        const query = `
            query {
              allPosts(where: {slug: "`+ this.props.slug + `"}) {
                id,
                title,
                slug,
                body,
                posted,
                author {name},
                tags { name },
                image,
                brief_description
              }
              allPostComments(where: {originalPost: {slug: "`+ this.props.slug + `"}}) {
                id,
                body,
                author {name},
                posted
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
                this.setState({blog: result.data.allPosts[0], comments: result.data.allPostComments})
            })
          .catch(console.error);
        
    }

    render() {
        const { blog } = this.state
        const { comments } = this.state
        console.log(comments)
        return (
            <section className="blog-details-area ptb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 offset-lg-2 offset-md-0">
                            <div className="blog-details">
                                <div className="article-img">
                                    <img src={blog.image} alt="image" />
                                </div>

                                <div className="article-content">
                                    <ul className="entry-meta">
                                        <li><i className="far fa-user"></i> <a href="#">{blog.author && blog.author.name}</a></li>
                                        <li><i className="far fa-calendar-alt"></i>{blog.posted && blog.posted.split('T')[0] || 'undefined'}</li>
                                        <li><i className="far fa-comment-dots"></i> {comments.length || '0'} Comment</li>
                                    </ul>

                                    <h3>{blog.title}</h3>

                                    <span dangerouslySetInnerHTML={{__html: blog.body}} />

                                    <ul className="category">
                                        <li><span>Tags:</span></li>
                                        {
                                            blog.tags && blog.tags.map((tag, key) => (
                                                <li key={key}><a href="#">{tag.name}</a></li> 
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>

                            <div className="comments-area">
                                <h3 className="comments-title">{comments.length} Comments:</h3>

                                <ol className="comment-list">
                                    <li className="comment">
                                        { comments.map(comment => (
                                             <article className="comment-body">
                                                <footer className="comment-meta">
                                                    <div className="comment-author vcard">
                                                        <img src={require("../../images/author1.jpg")} className="avatar" alt="image" />
                                                        <b className="fn">{comment.author.name}</b>
                                                        <span className="says">says:</span>
                                                    </div>

                                                    <div className="comment-metadata">
                                                        <a href="#">
                                                            <time>{comment.posted.split('T')[0]}</time>
                                                        </a>
                                                    </div>
                                                </footer>

                                                <div className="comment-content">
                                                    <p>{comment.body}</p>
                                                </div>

                                                <div className="reply">
                                                    <a href="#" className="comment-reply-link">Reply</a>
                                                </div>
                                            </article>
                   
                                        ))} 

                                        <ol className="children">
                                            <li className="comment">
                                                <article className="comment-body">
                                                    <footer className="comment-meta">
                                                        <div className="comment-author vcard">
                                                            <img src={require("../../images/author2.jpg")} className="avatar" alt="image" />
                                                            <b className="fn">Admin</b>
                                                            <span className="says">says:</span>
                                                        </div>
            
                                                        <div className="comment-metadata">
                                                            <a href="#">
                                                                <time>April 24, 2019 at 10:59 am</time>
                                                            </a>
                                                        </div>
                                                    </footer>
            
                                                    <div className="comment-content">
                                                        <p>Ok</p>
                                                    </div>
            
                                                    <div className="reply">
                                                        <a href="#" className="comment-reply-link">Reply</a>
                                                    </div>
                                                </article>
                                            </li>

                                        </ol>
                                    </li>

                                </ol>

                                <div className="comment-respond">
                                    <h3 className="comment-reply-title">Leave a Reply</h3>

                                    <form className="comment-form">
                                        <p className="comment-notes">
                                            <span id="email-notes">Your email address will not be published.</span>
                                            Required fields are marked 
                                            <span className="required">*</span>
                                        </p>
                                        <p className="comment-form-comment">
                                            <label for="comment">Comment</label>
                                            <textarea name="comment" id="comment" cols="45" rows="5" maxlength="65525" required={true} />
                                        </p>
                                        <p className="comment-form-author">
                                            <label for="name">Name <span className="required">*</span></label>
                                            <input type="text" id="author" name="author" required={true} />
                                        </p>
                                        <p className="comment-form-email">
                                            <label for="email">Email <span className="required">*</span></label>
                                            <input type="email" id="email" name="email" required={true} />
                                        </p>
                                        <p className="comment-form-url">
                                            <label for="url">Website</label>
                                            <input type="url" id="url" name="url" />
                                        </p>
                                        <p className="comment-form-cookies-consent">
                                            <input type="checkbox" value="yes" name="wp-comment-cookies-consent" id="wp-comment-cookies-consent" />
                                            <label for="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                                        </p>
                                        <p className="form-submit">
                                            <input type="submit" name="submit" id="submit" className="submit" value="Post Comment" />
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default DetailsContent;
