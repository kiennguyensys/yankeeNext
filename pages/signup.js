import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import { apiUrl } from '../utils/API.js';

class Index extends Component {
    constructor(props) {
        super(props);
        this.fname = React.createRef();
        this.lname = React.createRef();
        this.email = React.createRef();
        this.password = React.createRef();
    }

    signUp = (e) => {
        
        const mutation = `
              mutation {
                createUser(data: {
                  name: "` + this.fname.current.value + " " + this.lname.current.value + `",
                  email: "` + this.email.current.value + `",
                  isAdmin: false,
                  password: "` + this.password.current.value + `"
                }) {
                  id,
                  name,
                  username,
                  email,
                  phone,
                  company,
                  address,
                  city,
                  countryCode
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
                if(result.data.createUser) {
                    console.log('signup successfully!')
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
                <Breadcrumb title="Signup" />
                <section className="signup-area ptb-60">
                    <div className="container">
                        <div className="signup-content">
                            <div className="section-title">
                                <h2>Create an Account</h2>
                            </div>

                            <div className="signup-form">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" className="form-control" placeholder="Enter your name" ref={this.fname} name="fname" />
                                </div>

                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" className="form-control" placeholder="Enter your name" ref={this.lname} name="lname" />
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" placeholder="Enter your email" ref={this.email} name="name" />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Enter your password" ref={this.password} name="password" />
                                </div>

                                <button type="submit" className="btn btn-primary" onClick={this.signUp}>Signup</button>
                                <Link href="/">
                                    <a className="return-store">or Return to Store</a>
                                </Link>
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

export default Index;
