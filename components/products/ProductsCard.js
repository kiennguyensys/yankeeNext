import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';
import Link from 'next/link';
import ReactTooltip from 'react-tooltip'
import { ToastContainer, toast, Slide } from 'react-toastify';
import QuickView from '../Modal/QuickView';

class ProductsCard extends PureComponent {
    state = {
        modalOpen: false,
        modalImage: '',
        price: 0,
        idd: null,
        products: [],
        modalProduct: {}
    };

    componentDidUpdate(prevProps) {
      // Typical usage (don't forget to compare props):
      if (this.props.category !== prevProps.category) {
        this.fetchData(this.props.category);
      }
    }

    componentDidMount () {
        this.fetchData(this.props.category)

    }

    fetchData = (category) => {
        let query;

        if (category)
            query = `
               query {
                 allProducts(where: {categories_every: {slug: "`+ category.toString() +`"}}) {
                   id,
                   title,
                   price,
                   image,
                   imageHover
                 }
               }
           `;
        else
            query = `
                query {
                  allProducts {
                    id,
                    title,
                    price,
                    SKU,
                    image,
                    imageHover
                  }
                }
            `;


        const url = "https://yankeesim-admin.herokuapp.com/admin/api";
        const opts = {
          method: "POST",
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify({ query })
        };
        fetch(url, opts)
          .then(res => res.json())
            .then(result => {
                console.log(result)
                this.setState({products: result.data.allProducts})
            })
          .catch(console.error);
    }

    handleAddToCart = (product) => {
        this.props.addToCart(product); 

        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }
    openModal = () => {
        this.setState({ modalOpen: true });
    }

    closeModal = () => {
        this.setState({ modalOpen: false });
    }

    handleModalData = (product) => {
        this.setState({ 
            modalProduct: product 
        });
    }

    render() {
        let { products } = this.state;
        const { modalOpen } = this.state;
        return (
            <React.Fragment>
                <ReactTooltip />
                <ToastContainer transition={Slide} />
                {products.map((data, idx) => (
                    <div className="col-lg-4 col-sm-6 col-md-4 col-6 products-col-item" key={idx}>
                        <div className="single-product-box">
                            <div className="product-image">
                                <Link href={"/product-details?id=" + data.id}>
                                    <a>
                                        <img src={data.image} alt="image" />
                                        <img src={data.imageHover} alt="image" />
                                    </a>
                                </Link>

                                <ul>
                                    <li>
                                        <Link href="#">
                                            <a 
                                                data-tip="Quick View" 
                                                data-place="left" 
                                                onClick={e => {
                                                        e.preventDefault(); 
                                                        this.openModal();
                                                        this.handleModalData(data)
                                                    }
                                                }
                                            >
                                                <i className="far fa-eye"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a data-tip="Add to Wishlist" data-place="left">
                                                <i className="far fa-heart"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a data-tip="Add to Compare" data-place="left">
                                                <i className="fas fa-sync"></i>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="product-content">
                                <h3><a href="#">{data.title}</a></h3>

                                <div className="product-price">
                                    <span className="new-price">{data.price} đ</span>
                                </div>

                                <div className="rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                </div>

                                <Link href="#">
                                    <a 
                                        className="btn btn-light"
                                        onClick={(e) => {
                                            e.preventDefault(); this.handleAddToCart(data)
                                        }}
                                    >
                                        Add to Cart
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
                { modalOpen ? <QuickView 
                    closeModal={this.closeModal} 
                    idd={this.state.idd}
                    product={this.state.modalProduct} 
                /> : '' }
            </React.Fragment>
        );
    }
}

const mapDispatchToProps= (dispatch) => {
    return {
        addToCart: (product) => { dispatch(addToCart(product)) }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(ProductsCard)


