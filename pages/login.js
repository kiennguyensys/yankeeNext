import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import { connect } from 'react-redux';
import { login } from '../store/actions/sessionActions.js';
import { apiUrl } from '../utils/API.js';

class Index extends Component {
    constructor(props) {
        super(props);
        this.email = React.createRef();
        this.password = React.createRef();
    }

    login = (e) => {

        const mutation = `
            mutation {
              authenticateUserWithPassword(email: "` + this.email.current.value.toString() + `", password: "` + this.password.current.value.toString() + `") {
                token,
                item {
                    id,
                    name,
                    email,
                    username,
                    phone,
                    company,
                    address,
                    city,
                    countryCode
                }
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
                if(result.data.authenticateUserWithPassword) {
                    console.log('login successfully!')
                    console.log(result.data.authenticateUserWithPassword.token)
                    localStorage.setItem('token', result.data.authenticateUserWithPassword.token)
                    localStorage.setItem('user', JSON.stringify(result.data.authenticateUserWithPassword.item))
                    Router.push('/')
                }
            })
          .catch(console.error);

        e.preventDefault()
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Login" />
                <section className="login-area ptb-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="login-content">
                                    <div className="section-title">
                                        <h2>Login</h2>
                                    </div>

                                    <div className="login-form">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control" placeholder="Enter your email" ref={this.email} name="name" />
                                        </div>

                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" className="form-control" placeholder="Enter your password" ref={this.password} name="password" />
                                        </div>

                                        <button type="submit" className="btn btn-primary" onClick={this.login}>Login</button>

                                        <Link href="#">
                                            <a className="forgot-password">Lost your password?</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="new-customer-content">
                                    <div className="section-title">
                                        <h2>New Customer</h2>
                                    </div>

                                    <span>Create a Account</span>
                                    <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.</p>
                                    <Link href="/signup">
                                        <a className="btn btn-light">Create A Account</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Facility />
                <Footer /> 
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => {dispatch(login(user))}
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Index);
