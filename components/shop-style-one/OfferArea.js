import React, { Component } from 'react';
import Link from 'next/link';

class OfferArea extends Component {
    render() {
        return (
            <section className="offer-area ptb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="offer-box">

                                    <h3>T-MOBILE 10 ngày</h3>
                                    <p> Giá rẻ </p>

                                    <div className="circle">1tr</div>




                                    <ul>
                                        <li>
                                            <a>
                                                <i className="fas fa-calendar-times"></i> Thời hạn: 10 ngày
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <i className="fas fa-phone"></i> Nghe gọi/SMS: Không giới hạn hạn tại Mỹ
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <i className="fas fa-globe-americas"></i> Internet: 10GB tốc độ cao, không giới hạn tốc độ thấp
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <i className="fas fa-wifi"></i> Hotspot: Có hỗ trợ. Phát wifi tốc độ 4G
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <i className="fas fa-search-location"></i> Gọi Việt Nam: Giá cao, không khuyến khích. Nếu cần gọi VN nên dùng Viber Out

                                            </a>
                                        </li>


                                    </ul>




                                <div className="box-inner">

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a>1tr VND</a>
                                            </Link>

                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Cheap price</a>
                                            </Link>

                                        </li>

                                    </ul>
                                    <Link href="#">
                                        <a className="btn btn-primary">MUA NGAY</a>
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="offer-box">

                                    <h3>T-Mobile 10GB</h3>
                                    <p>Best Seller</p>

                                    <div className="circle">1tr3</div>




                                    <ul>
                                        <li>
                                            <a>
                                                <i className="fas fa-calendar-times"></i> Thời hạn: 30 ngày
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <i className="fas fa-phone"></i> Nghe gọi/SMS: Không giới hạn hạn tại Mỹ
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <i className="fas fa-globe-americas"></i> Internet: 10GB tốc độ cao, không giới hạn tốc độ thấp
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <i className="fas fa-wifi"></i> Hotspot: Có hỗ trợ. Phát wifi tốc độ 4G
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <i className="fas fa-search-location"></i> Gọi Việt Nam: Giá cao, không khuyến khích. Nếu cần gọi VN nên dùng Viber Out

                                            </a>
                                        </li>


                                    </ul>




                                <div className="box-inner">

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a>1tr3 VND</a>
                                            </Link>

                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Bestseller</a>
                                            </Link>

                                        </li>

                                    </ul>
                                    <Link href="#">
                                        <a className="btn btn-primary">MUA NGAY</a>
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="offer-box">

                                    <h3>T-MOBILE 50GB</h3>
                                    <p>Dùng tại Mỹ, Canada, Mexico</p>

                                    <div className="circle">1tr5</div>




                                    <ul>
                                        <li>
                                            <a>
                                                <i className="fas fa-calendar-times"></i> Thời hạn: 30 ngày
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <i className="fas fa-phone"></i> Nghe gọi/SMS: Không giới hạn hạn tại Mỹ
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <i className="fas fa-globe-americas"></i> Internet: 10GB tốc độ cao, không giới hạn tốc độ thấp
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <i className="fas fa-wifi"></i> Hotspot: Có hỗ trợ. Phát wifi tốc độ 4G
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <i className="fas fa-search-location"></i> Gọi Việt Nam: Giá cao, không khuyến khích. Nếu cần gọi VN nên dùng Viber Out

                                            </a>
                                        </li>


                                    </ul>




                                <div className="box-inner">

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a>1tr5 VND</a>
                                            </Link>

                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Intensive Data</a>
                                            </Link>

                                        </li>

                                    </ul>
                                    <Link href="#">
                                        <a className="btn btn-primary">MUA NGAY</a>
                                    </Link>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default OfferArea;
