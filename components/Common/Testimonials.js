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
                                <a href="https://www.facebook.com/thuyngocmyy">
                                    <img style={{width: 63, height: 63}} src={"https://scontent.fdad3-1.fna.fbcdn.net/v/t1.0-9/28577596_1857178857685693_7000442191816205172_n.jpg?_nc_cat=106&_nc_ohc=RrMiBja4g6IAQmICDqxNzWo134BU7BTmTeYUkzMb32GeelPLPGN7UgZ-w&_nc_ht=scontent.fdad3-1.fna&oh=3cf9df9ec2710d48871427c58a3abac8&oe=5E82E765"} alt="image" />
                                </a>
                            </div>

                            <p>Mình mua sim Lycamobile ở shop sang Mỹ xài cũng được 3 tháng rồi. Sóng cũng ổn định, nhưng đôi lúc hơi chập chờn chút xíu nói chung cũng ổn.

A chủ shop tư vấn nhiệt tình, hỏi quá trời mà trả lời thái độ vui vẻ siêu dễ thương, mua 1 sim thôi mà được tặng kèm thêm 1 sim h20 sơ cua nữa chứ. Đã vậy còn được giao hàng trong ngày freeship nữa cơ. Bạn bè mình ai có đi du lịch nước ngoài mình sẽ giới thiệu mua sim ở shop để ủng hộ hihi. Cho 5 sao ⭐️⭐️⭐️⭐️⭐️ lun</p>

                            <div className="client-info">
                                <h4>Julia Thuy</h4>
                                <span>Facebook User</span>
                            </div>
                        </div>

                        <div className="single-testimonials">
                            <div className="client-image">
                                <a href="https://www.facebook.com/leonguyen89">
                                    <img style={{width: 63, height: 63}} src={"https://scontent.fdad3-1.fna.fbcdn.net/v/t1.0-9/72130239_10156567944591347_2054818113681096704_o.jpg?_nc_cat=102&_nc_ohc=21OohDvbhVsAQkH0mmb0VIcUX6OTvwuJ4KFH98c5N-z4TAjDckgPL4RVQ&_nc_ht=scontent.fdad3-1.fna&oh=c0275df373a6a5f9584fce540b125a5f&oe=5E6C006A"} alt="image" />
                                </a>
                            </div>


                            <p>Đã mua Sim bên shop 4-5 lần và rất hài lòng. Sẽ ủng hộ tiếp tục trong thời gian tới.</p>

                            <div className="client-info">
                                <h4>Son Nguyen</h4>
                                <span>Facebook User</span>
                            </div>
                        </div>

                        <div className="single-testimonials">
                            <div className="client-image">
                                <a href="https://www.facebook.com/nhattan1990">
                                    <img style={{width: 63, height: 63}} src={"https://scontent.fdad3-1.fna.fbcdn.net/v/t1.0-9/74698841_2930663130279451_7889157402883260416_n.jpg?_nc_cat=102&_nc_ohc=V0RYCng_ARgAQm1QlLStaAOfHPsXG6aSZdYfeG70Kwvu3lePt7cuT5aFw&_nc_ht=scontent.fdad3-1.fna&oh=0841fb150fef8b30af5fffc3d099eeb7&oe=5E7E8EF5"} />
                                </a>
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
