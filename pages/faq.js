import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';



class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Contact Us" />
                <section className="faq-area ptb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2>FAQs</h2>
                        </div>

                        <div className="faq-accordion">
                            <ul className="accordion">
                            <Accordion>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
CHÍNH SÁCH GIAO HÀNG ?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
Tại TP. HCM và Hà Nội, giao hàng trong ngày hoặc sau một ngày. Liên hệ nếu bạn cần giao gấp trong 2 tiếng.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
PHẠM VI GIAO HÀNG?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
Giao hàng miễn phí toàn quốc
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>




                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
KÍCH HOẠT SIM NHƯ THẾ NÀO?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
Một số loại tự kích hoạt khi lắp vào máy, một số loại cần kích hoạt online. Chúng tôi sẽ hướng dẫn bạn
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>




                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
LÀM SAO BIẾT SIM SẼ HOẠT ĐỘNG?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
Một số loại sim như T-mobile, Lycamobile, sim châu Âu có roaming ở VN và sẽ lên sóng ngay khi lắp tại Việt Nam. Một số loại không có roaming và chỉ có thể kiểm tra khi ra nước ngoài.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>



                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
NẾU KHÔNG LÊN SÓNG THÌ LÀM THẾ NÀO?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
Một số rất ít các trường hợp điện thoại không tự nhận đúng sóng. Quý khách có thể dễ dàng xử lý tình huống này bằng cách vào phần Settings -> Carriers -> Bỏ Automatically Scan -> Để điện thoại scan và hiện ra các mạng -> Chọn mạng phù hợp.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>




                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
NẠP THÊM TIỀN NHƯ THẾ NÀO?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
Liên hệ để được hỗ trợ nạp tiền cho sim Mỹ như T-mobile, AT&T, Lycamobile. Đa số các loại sim châu Á không nạp thêm được.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                            </Accordion>
                            </ul>
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