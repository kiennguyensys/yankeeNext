import React, { Component } from 'react';
import Link from 'next/link';

class FeatureArea extends Component {
    render() {
        return (
            <section className="feature-area ptb-60">
                <div className="container">
                    <div className="col">
                        <div className="row-lg-4 row-md-6">
                            <div className="feature-single ptb-60">
                                <img src="https://yankeesim.com/wp-content/uploads/2016/04/Tmobilesingle.png" alt="image" />
                                <div className="feature-content">
                                    <h1>Sim Mỹ T-mobile</h1>
                                    <p>Bạn du lịch hay công tác Mỹ, chúng tôi khuyên dùng sim T-mobile với những ưu điểm sau:</p>
                                    <ul>
                                    <li>Nhà mạng T-mobile nổi tiếng</li>
                                    <li>Nghe gọi nhắn tin trong Mỹ không giới hạn</li>
                                    <li>Data internet 10GB đến 50GB tốc độ cao tùy gói, thỏa sức lướt web</li>

                                    <li>Kiểm tra sim lên sóng ngay tại Việt Nam, yên tâm sử dụng</li>
                                    </ul>
                                    <a href="#">   
                                        <button className="button">XEM THÊM</button>
                                    </a>



                                </div>
                            </div>
                        </div>
                        <div className="row-lg-4 row-md-6">
                            <div className="feature-single ptb-60">
                                <img src="https://yankeesim.com/wp-content/uploads/2019/04/att-sim_1-1.png" alt="image" />
                                <div className="feature-content">
                                    <h1>Sim Mỹ Canada AT&T</h1>
                                    <p>Bạn du lịch hay công tác Bắc Mỹ, bao gồm Mỹ và Canada, Mexico chúng tôi khuyên dùng sim AT&T với những ưu điểm sau:</p>
                                    <ul>
                                        <li>Nhà mạng AT&T nổi tiếng</li>
                <li>Nghe gọi nhắn tin trong Mỹ, Canada không giới hạn</li>
                                        <li>Data internet 8GB đến 22GB tốc độ cao tùy gói tại cả Mỹ và Canada. Đặc biệt, khác với T-mobile, sim AT&T không bị giới hạn 5GB tại Canada</li>

                                    </ul>
                                    <a href="#">   
                                        <button className="button">XEM THÊM</button>
                                    </a>



                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default FeatureArea;
