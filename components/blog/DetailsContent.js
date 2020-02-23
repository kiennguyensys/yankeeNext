import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

export class DetailsContent extends Component {
    constructor(props) {
        super(props);
        this.comment = React.createRef();
    }


    state = {blog: {}, comments: [], user: {}}

    componentDidMount () {
        this.setState({user: JSON.parse(localStorage.getItem('user'))})

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
                image { publicUrl },
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

    handleSubmit = (e) => {
        const content = this.comment.current.value.toString()
        const date = new Date()

        const mutation = `
            mutation {
              createPostComment(data:{body: "` + content + `", originalPost:{connect: { id: "` + this.state.blog.id.toString() + `"}}, author:{connect: { id: "`+ this.state.user.id +`"}}, posted:"`+ date.toISOString() +`"}) {
                id,
                body
              }
            }
        `;

        const url = "https://yankeesim-admin.herokuapp.com/admin/api";
        const opts = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query:mutation })
        };
        fetch(url, opts)
          .then(res => res.json())
            .then(result => {
                if(result.data.createPostComment) {
                    Router.push('/blog')
                }
            })
          .catch(console.error);

        e.preventDefault()
    }

    render() {
        const { blog } = this.state
        const { comments } = this.state

        return (
            <section className="blog-details-area ptb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 offset-lg-2 offset-md-0">
                            <div className="blog-details">
                                <div className="article-img">
                                    <img src={blog.image && blog.image.publicUrl} alt="image" />
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

                                    </li>

                                </ol>

                                <div className="comment-respond">
                                    <h3 className="comment-reply-title">Leave a Reply</h3>
                                    {
                                        this.state.user ?
                                        (
                                            <form className="comment-form">
                                                <p className="comment-notes">
                                                    <span id="email-notes">Your email address will not be published.</span>
                                                    Required fields are marked 
                                                    <span className="required">*</span>
                                                </p>
                                                <p className="comment-form-comment">
                                                    <label for="comment">Comment</label>
                                                    <textarea name="comment" ref={this.comment} cols="45" rows="5" maxlength="65525" required={true} />
                                                </p>
                                                <p className="form-submit">
                                                    <button className="btn btn-primary" onClick={this.handleSubmit}>Post Comment</button>
                                                </p>
                                            </form>
                                        ) :
                                        (
                                            <p className="comment-notes">
                                                <span id="email-notes">Login is required to comment</span>
                                                <span className="required">*</span>
                                            </p>
                                        )
                                    }
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