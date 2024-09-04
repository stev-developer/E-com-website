import React from 'react';
import {
    InstagramOutlined,
    TwitterOutlined,
    FacebookOutlined,
    LinkedinOutlined
} from '@ant-design/icons';
import './Footer.css'; 
function Footer() {
    return (
        <>
            <div className="footer">
                <div className="foot-container">
                    <div className="left">
                        <h1 href="#" className="heading">
                            AYURA
                        </h1>
                        <div className="social-media">
                            <a href="#" >
                                <InstagramOutlined  />
                            </a>
                            <a href="#">
                                <FacebookOutlined/>
                            </a>
                            <a href="#" >
                                <TwitterOutlined/>
                            </a>
                            <a href="#" >
                                <LinkedinOutlined/>
                            </a>
                        </div>
                        <p>&copy;2024 Ayura Products Limited</p>
                    </div>
                    <div className="nav-1">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Delivery Areas</a></li>
                            <li><a href="#">Customer Support</a></li>
                        </ul>
                    </div>

                    <div className="nav-2">
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
