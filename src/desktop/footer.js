/* eslint-disable no-implied-eval */
import './footer.css';
import IconButton from '@mui/material/IconButton';
import knotlogo from '../theknot2025.png';
import iawpologo from '../IAWPG-logo.png';
import { useState } from 'react';



const Footer = () => {
    const [email, setEmail] = useState("");
    function handleUserEmailInput(){
        setTimeout(`window.location.href="/contact?email=${email}"`, 0)
    }
    return(
        <div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Elms+Sans:ital,wght@0,100..900;1,100..900&display=swap');
            </style>
            <div className="footer">
                <div className="footer-top-row">
                    <div className="footer-group">
                        <div className="love-and-hope">
                        Love & Hope Co.
                        <br />
                        Wedding Officiants
                        </div>
                    </div>
                    <div className="footer-group">
                        <div className="footer-contact-faq-container">
                            <div className="footer-contact-container">
                                <a href="/contact">Contact</a>
                            </div>
                            <div className="footer-faq-container">
                                <a href="/faqs">FAQs</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-group-email">
                        <div className="email-input">
                            <div className="email-text">
                                Let us know you stopped by!
                            </div>
                            <input onChange={event => setEmail(event.target.value)} value={email} />
                            <IconButton onClick={handleUserEmailInput}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"> 
                                    <path id="Vector" d="M10.3078 13.6923L15.1539 8.84619M20.1113 5.88867L16.0207 19.1833C15.6541 20.3747 15.4706 20.9707 15.1544 21.1683C14.8802 21.3396 14.5406 21.3683 14.2419 21.2443C13.8975 21.1014 13.618 20.5433 13.0603 19.428L10.4694 14.2461C10.3809 14.0691 10.3366 13.981 10.2775 13.9043C10.225 13.8363 10.1645 13.7749 10.0965 13.7225C10.0215 13.6647 9.93486 13.6214 9.76577 13.5369L4.57192 10.9399C3.45662 10.3823 2.89892 10.1032 2.75601 9.75879C2.63207 9.4601 2.66033 9.12023 2.83169 8.84597C3.02928 8.52974 3.62523 8.34603 4.81704 7.97932L18.1116 3.88867C19.0486 3.60038 19.5173 3.45635 19.8337 3.57253C20.1094 3.67373 20.3267 3.89084 20.4279 4.16651C20.544 4.48283 20.3999 4.95126 20.1119 5.88729L20.1113 5.88867Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </IconButton>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-row">
                    <div className="knot-container">
                        <img src={knotlogo} className="knot-logo" alt="knot-logo"></img>
                    </div>
                    <div className="footer-address-group">
                        <div className="contact-info">
                            Niles, MI
                            <br />
                            United States
                            <br />
                            407-620-7068
                            <br />
                            contact@loveandhope.co
                        </div>
                        <div className="link-container-fb">
                            <IconButton className="icon-link" onClick={() => {setTimeout('window.location.href="https://www.facebook.com/withloveandhopeco/"', 0)}}>
                                <svg version="1.1" width="64" height="64" viewBox="0 0 100 100">
                                    <path d="M 83.254 90 H 59.253 c -1.104 0 -2 -0.896 -2 -2 V 54.696 c 0 -1.104 0.896 -2 2 -2 h 9.42 l 1.158 -8.979 H 59.253 c -1.104 0 -2 -0.896 -2 -2 v -8.286 c 0 -3.571 0.874 -8.319 8.432 -8.319 l 4.873 -0.002 v -7.801 c -1.871 -0.154 -4.797 -0.32 -8.015 -0.32 c -9.2 0 -14.693 5.666 -14.693 15.156 v 9.572 c 0 1.104 -0.896 2 -2 2 h -9.208 v 8.979 h 9.208 c 1.104 0 2 0.896 2 2 V 88 c 0 1.104 -0.896 2 -2 2 H 6.747 C 3.027 90 0 86.974 0 83.253 V 6.747 C 0 3.026 3.027 0 6.747 0 h 76.507 C 86.974 0 90 3.026 90 6.747 v 76.506 C 90 86.974 86.974 90 83.254 90 z M 61.253 86 h 22.001 C 84.769 86 86 84.768 86 83.253 V 6.747 C 86 5.232 84.769 4 83.254 4 H 6.747 C 5.232 4 4 5.232 4 6.747 v 76.506 C 4 84.768 5.232 86 6.747 86 H 43.85 V 56.696 h -9.208 c -1.104 0 -2 -0.896 -2 -2 V 41.717 c 0 -1.104 0.896 -2 2 -2 h 9.208 v -7.572 c 0 -11.816 7.163 -19.156 18.693 -19.156 c 4.763 0 8.981 0.356 10.278 0.529 c 0.994 0.132 1.736 0.98 1.736 1.982 v 11.608 c 0 1.104 -0.895 2 -1.999 2 l -6.873 0.003 c -3.995 0 -4.433 1.383 -4.433 4.319 v 6.286 h 10.853 c 0.575 0 1.122 0.248 1.502 0.679 c 0.38 0.432 0.555 1.006 0.481 1.577 l -1.674 12.979 c -0.129 0.997 -0.978 1.744 -1.983 1.744 h -9.179 V 86 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                                </svg>
                            </IconButton>
                        </div>
                        <div className="link-container-insta">
                            <IconButton className="icon-link" onClick={() => {setTimeout('window.location.href="https://www.instagram.com/withloveandhopeco/"', 0)}}>
                                <div>
                                    <svg version="1.1" width="64" height="64" viewBox="0 0 100 100">
                                        <path d="M 62.263 90 H 27.738 C 12.443 90 0 77.557 0 62.263 V 27.738 C 0 12.443 12.443 0 27.738 0 h 34.525 C 77.557 0 90 12.443 90 27.738 v 34.525 C 90 77.557 77.557 90 62.263 90 z M 27.738 7 C 16.303 7 7 16.303 7 27.738 v 34.525 C 7 73.697 16.303 83 27.738 83 h 34.525 C 73.697 83 83 73.697 83 62.263 V 27.738 C 83 16.303 73.697 7 62.263 7 H 27.738 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                                        <path d="M 45.255 70.47 c -13.904 0 -25.215 -11.312 -25.215 -25.215 S 31.352 20.04 45.255 20.04 s 25.215 11.312 25.215 25.215 S 59.159 70.47 45.255 70.47 z M 45.255 27.04 c -10.044 0 -18.215 8.171 -18.215 18.215 c 0 10.044 8.171 18.215 18.215 18.215 c 10.044 0 18.215 -8.171 18.215 -18.215 C 63.471 35.211 55.3 27.04 45.255 27.04 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                                        <circle cx="70.557" cy="19.936999999999998" r="4.897" transform="  matrix(1 0 0 1 0 0) "/>
                                    </svg>
                                </div>
                            </IconButton>
                        </div>
                    </div>
                    <div className="footer-group">
                        <div className="iawpo-container">
                            <img src={iawpologo} className="iawpo-logo" alt="iawpo-logo"></img>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    © 2025 Love & Hope Co. All rights reserved.
                </div>
            </div>
        </div>
    )
}


                            

                            

export default Footer;