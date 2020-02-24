import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import OrderSummary from './OrderSummary';
import Payment from '../payments/Payment';
import useForm from './userForm';
import { resetCart } from '../../store/actions/cartActions.js';
import { apiUrl } from '../../utils/API.js';

function CheckoutForm({total, shipping, user, products, resetCart}) {

    function createOrder(item, itemOrder, orderNumber) {

        const date = new Date();
        let mutation;


        if (!user) {
            mutation = `
              mutation {
                createOrder(data: {
                  name: "` + state.firstName.value + " " + state.lastName.value + `",
                  email: "` + state.email.value + `",
                  city: "` + state.city.value + `",
                  phone: "` + state.phone.value + `",
                  address: "` + state.address.value + `",
                  company: "` + state.company.value + `",
                  countryCode: "` + state.country.value + `",
                  orderStatus: "` + "pending" + `",
                  orderNotes: "` + state.orderNotes.value + `",
                  date: "` + date.toISOString() + `",
                  totalAmount: "` + total.toString() + `",
                  SKU: "` + item.SKU + `",
                  itemName: "` + item.title + `",
                  itemOrder: "` + itemOrder.toString() + `",
                  orderNumber: "` + orderNumber.toString() + `",
                  quantity: "` + item.quantity + `",
                  itemCost: "` + item.price + `",

                }) {
                  id,
                  email
                }
              }
        `;
        } else {
            mutation = `
              mutation {
                createOrder(data: {
                  name: "` + user.name + `",
                  email: "` + user.email + `",
                  city: "` + user.city + `",
                  phone: "` + user.phone + `",
                  address: "` + user.address + `",
                  company: "` + user.company + `",
                  countryCode: "` + user.countryCode + `",
                  orderStatus: "` + "pending" + `",
                  orderNotes: "` + state.orderNotes.value + `",
                  date: "` + date.toISOString() + `",
                  totalAmount: "` + total.toString() + `",
                  itemName: "` + item.title + `",
                  SKU: "` + item.SKU + `",
                  itemOrder: "` + itemOrder.toString() + `",
                  orderNumber: "` + orderNumber.toString() + `",
                  quantity: "` + item.quantity + `",
                  itemCost: "` + item.price + `",

                }) {
                  id,
                  email
                }
              }
        `;
        }



        const opts = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query:mutation })
        };
        fetch(apiUrl, opts)
          .then(res => res.json())
            .then(result => {
                if(result.data.createOrder) {
                    console.log('createOrder successfully!')
                    resetCart()
                    Router.push('/')
                }
            })
          .catch(console.error);
    }

    function handleSubmit() {
        console.log("Form submitted.");

        const query = `
                query {
                    _allOrdersMeta {
                      count
                    }
                }
            `;

        const opts = {
          method: "POST",
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify({ query })
        };
        fetch(apiUrl, opts)
          .then(res => res.json())
            .then(result => {
                const orderNumber = parseInt(result.data._allOrdersMeta.count) + 1

                products.forEach((item, idx) => createOrder(item, idx, orderNumber));
            })
          .catch(console.error);

    }

    let totalAmount = (total + shipping).toFixed(2)
    
    const stateSchema = {
        firstName: {value: "", error: ""},
        lastName: {value: "", error: ""},
        address: {value: "", error: ""},
        city: {value: "", error: ""},
        country: {value: "", error: ""},
        company: {value: "", error: ""},
        payment: {value: "", error: ""},
        email: {value: "", error: ""},
        phone: {value: "", error: ""},
        orderNotes: {value: "", error: ""}
    };

    const validationStateSchema = {
        firstName: {
            required: true,
            validator: {
            regEx: /^[a-zA-Z]+$/,
            error: "Invalid first name format."
            }
        },

        lastName: {
            required: true,
            validator: {
            regEx: /^[a-zA-Z]+$/,
            error: "Invalid last name format."
            }
        },

        address: {
            required: true,
            validator: {
                error: "Invalid address format."
            }
        },

        city: {
            required: true,
            validator: {
                error: "Invalid last name format."
            }
        },

        email: {
            required: true,
            validator: {
                regEx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                error: "Invalid email format."
            }
        },

        phone: {
            required: true,
        },

        orderNotes: {
            required: true,
        },

        company: {
            required: true,
        },

        country: {
            required: true,
        },

        payment: {
            required: false,
        }


    };

    const { state, handleOnChange, handleOnSubmit, disable } = useForm (
        stateSchema,
        validationStateSchema,
        handleSubmit
    );
    
    const errorStyle = {
        color: "red",
        fontSize: "13px"
    };
    

    return (
        <section className="checkout-area ptb-60">
            <div className="container">
                { !user && (
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="user-actions">
                            <i className="fas fa-sign-in-alt"></i>
                            <span>Returning customer? <a href="#">Click here to login</a></span>
                        </div>
                    </div>
                </div>
                )}

                <form onSubmit={handleOnSubmit}>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="billing-details">
                                <h3 className="title">Billing Details</h3>


                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Country <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="country"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.country.value}
                                                placeholder={user && user.countryCode}
                                            />

                                        </div>
                                    </div>


                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>First Name <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="firstName"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.firstName.value}
                                            />
                                            {state.firstName.error && <p style={errorStyle}>{state.firstName.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Last Name <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="lastName"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.lastName.value}
                                            />
                                            {state.lastName.error && <p style={errorStyle}>{state.lastName.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Company Name</label>
                                            <input type="text"
                                                   className="form-control" name="company" onChange={handleOnChange}
                                                   placeholder={user && user.company}
                                                   value={state.company.value}
 />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <label>Address <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="address"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                placeholder={user && user.address}
                                                value={state.address.value}
                                            />
                                            {state.address.error && <p style={errorStyle}>{state.address.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <label>Town / City <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="city"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                placeholder={user && user.city}
                                                value={state.city.value}
                                            />
                                            {state.city.error && <p style={errorStyle}>{state.city.error}</p>}
                                        </div>
                                    </div>


                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Email Address <span className="required">*</span></label>
                                            <input 
                                                type="email" 
                                                name="email"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                placeholder={user && user.email}
                                                value={state.email.value}
                                            />
                                            {state.email.error && <p style={errorStyle}>{state.email.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Phone <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="phone"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                placeholder={user && user.phone}
                                                value={state.phone.value}
                                            />
                                            {state.phone.error && <p style={errorStyle}>{state.phone.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="create-an-account" />
                                            <label className="form-check-label" htmlFor="create-an-account">Create an account?</label>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ship-different-address" />
                                            <label className="form-check-label" htmlFor="ship-different-address">Ship to a different address?</label>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <textarea name="orderNotes" id="orderNotes" cols="30" rows="6" placeholder="Order Notes" className="form-control" onChange={handleOnChange} value={state.orderNotes.value}
 />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="order-details">
                                <h3 className="title">Your Order</h3>

                                <OrderSummary />

                                <div className="payment-method">
                                    <p>
                                        <input type="radio" id="online" name="payment" onChange={handleOnChange} />
                                        <label htmlFor="online">Online</label>
                                    </p>
                                    <p>
                                        <input type="radio" id="cash-on-delivery" name="payment" onChange={handleOnChange} />
                                        <label htmlFor="cash-on-delivery">Cash on Delivery</label>
                                    </p>
                                </div>

                                <div className="order-btn">
                                    <input type='submit' disabled={disable} className={`btn btn-primary ${disable ? 'btn-disabled' : ''}`} />
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

const mapStateToProps = (state) => {
    return {
        products: state.addedItems,
        total: state.total,
        shipping: state.shipping
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetCart: () => dispatch(resetCart())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckoutForm)




