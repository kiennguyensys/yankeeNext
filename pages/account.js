import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';

class Index extends Component {
    constructor(props) {
        super(props);
        this.fname = React.createRef();
        this.lname = React.createRef();
        this.email = React.createRef();
        this.password = React.createRef();
        this.username = React.createRef();
        this.phone = React.createRef();
        this.company = React.createRef();
        this.address = React.createRef();
        this.city = React.createRef();
        this.countryCode = React.createRef();
        this.state = { user: {} }
    }

    componentDidMount () {
        const user = JSON.parse(localStorage.getItem('user'))

        if(user) this.setState({ user: user })
        else Router.push('/login')
    }

    updateSubmit = (e) => {
        const mutation = `
              mutation {
                updateUser(id:` + this.state.user.id + `, data: {
                  name: "` + this.fname.current.value + " " + this.lname.current.value + `",
                  email: "` + this.email.current.value + `",
                  isAdmin: false,
                  username: "` + this.username.current.value + `",
                  phone: "` + this.phone.current.value + `",
                  company: "` + this.company.current.value + `",
                  address: "` + this.address.current.value + `",
                  city: "` + this.city.current.value + `",
                  countryCode: "` + this.countryCode.current.value + `",
                }) {
                  id,
                  name
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
                if(result.data.updateUser) {
                    console.log('update successfully!')
                    Router.push('/')
                }
            })
          .catch(console.error);

        e.preventDefault()
    }

    signOut = (e) => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        Router.push('/')

        e.preventDefault()
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Account" />
                <section className="signup-area ptb-60">
                    <div className="container">
                        <div className="signup-content">
                            <div className="section-title">
                                <h2>Account</h2>
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
                                    <label>Username</label>
                                    <input type="text" className="form-control" placeholder="Enter your username" ref={this.username} name="username" />
                                </div>

                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" className="form-control" placeholder="Enter your phone" ref={this.phone} name="phone" />
                                </div>

                                <div className="form-group">
                                    <label>Company</label>
                                    <input type="text" className="form-control" placeholder="Enter your company" ref={this.company} name="company" />
                                </div>

                                <div className="form-group">
                                    <label>Address</label>
                                    <input type="text" className="form-control" placeholder="Enter your address" ref={this.address} name="address" />
                                </div>

                                <div className="form-group">
                                    <label>City</label>
                                    <input type="text" className="form-control" placeholder="Enter your city" ref={this.city} name="city" />
                                </div>

                                <div className="form-group">
                                    <label>Country Code</label>
                                    <input type="text" className="form-control" placeholder="Enter your country code" ref={this.countryCode} name="countryCode" />
                                </div>

                                <button type="submit" className="btn btn-primary" onClick={this.updateSubmit}>Update</button>

                                <br/>

                                <button type="submit" className="btn btn-primary" onClick={this.signOut}>Sign Out</button>

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
