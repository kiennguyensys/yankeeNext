import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    items: 1,
    autoplay: true,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"
    ]
}

class Testimonials extends Component {

    state = { 
        display: false,
        panel: true
    };

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        return (
            <section className="testimonials-area ptb-60">
                <div className="container">
                    {this.state.display ? <OwlCarousel 
                        className="testimonials-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="single-testimonials">
                            <div className="client-image">
                                <img src={require("../../images/client1.jpg")} alt="image" />
                            </div>

                            <p>Mình đã mua sim Tmobile của Yankee trong chuyến đi Mỹ tháng 5/2019 vừa rồi. Sim xài ổn định, Admin hướng dẫn & hỗ trợ chu đáo. Lần sau đi nước ngoài sẽ tiếp tục sử dụng dịch vụ của Yankee :)</p>

                            <div className="client-info">
                                <h4>Trang Kay</h4>
                                <span>Facebook User</span>
                            </div>
                        </div>

                        <div className="single-testimonials">
                            <div className="client-image">
                                <img src={require("../../images/client2.jpg")} alt="image" />
                            </div>


                            <p>Đã mua Sim bên shop 4-5 lần và rất hài lòng. Sẽ ủng hộ tiếp tục trong thời gian tới.</p>

                            <div className="client-info">
                                <h4>Son Nguyen</h4>
                                <span>Customer</span>
                            </div>
                        </div>

                        <div className="single-testimonials">
                            <div className="client-image">
                                <img src={require("../../images/client3.jpg")} alt="image" />
                            </div>
                            <p>Đã mua sim trả trước t-mobile hiện xài rất tốt , giao hàng nhanh chóng , còn freeship nữa</p>

                            <div className="client-info">
                                <h4>Lê Nhật Tân</h4>
                                <span>Customer</span>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </section>
        );
    }
}

export default Testimonials;
