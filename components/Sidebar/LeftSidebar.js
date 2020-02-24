import React, { Component } from 'react';
import Link from 'next/link';
import { apiUrl } from '../../utils/API.js';

class LeftSidebar extends Component {
    state = {
        categories: [],
        currentSelection: false,
        collection: false,
        brand: false,
        size: false,
        price: false,
        color: false,
        popular: false
    }

    componentDidMount () {
        const query = `
            query {
              allProductCategories(where: {id_not: 0}) {
                id,
                name,
                slug,
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
                this.setState({categories: result.data.allProductCategories})
            })
          .catch(console.error);
    }


    handleToggle = (e, evt) => {
        e.preventDefault();

        if (evt == "collection"){
            this.setState({
                collection: !this.state.collection
            })
        }
    }

    render() {
        let { categories, collection } = this.state;
        return (
            <div className={`col-lg-${this.props.col ? this.props.col : '4' } col-md-12`}>
                <div className="woocommerce-sidebar-area">

                    <div 
                        className={`collapse-widget collections-list-widget ${collection ? '' : 'open'}`}
                    >
                        <h3 
                            className={`collapse-widget-title ${collection ? '' : 'active'}`}
                            onClick={e => this.handleToggle(e, "collection")}
                        >
                          DANH MỤC SẢN PHẨM

                            <i className="fas fa-angle-up"></i>
                        </h3>

                        <ul className={`collections-list-row ${collection ? 'block' : 'none'}`}>
                            {
                                categories.map(category => (
                                    <li key={category.id}>
                                        <Link href={"?category=" + category.slug}>
                                            <a>{category.name}</a>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>







                </div>
            </div>
        );
    }
}

export default LeftSidebar;
