import { FaTwitter, FaLinkedin, FaInstagram, FaGooglePlay } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="footer">


            <div className="footer-content">
                <div className="footer-brand">
                    <h3>Prowork Tech</h3>
                    <p>Innovating your digital future.</p>
                </div>
                <div className="footer-links">
                    <a href="#hero">Home</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="footer-socials">
                    <span className="social-icon"><FaTwitter /> Twitter</span>
                    <span className="social-icon"><FaLinkedin /> LinkedIn</span>
                    <span className="social-icon"><FaInstagram /> Instagram</span>
                </div>
            </div>

            <div className="footer-contact-strip">
                <div className="contact-info-row">
                    <span><MdLocationOn /> 25/51 MG Marg, Civil Lines Prayagraj</span>
                    <span><MdPhone /> +91-7518741926</span>
                    <span><MdEmail /> ajay161303@gmail.com</span>
                </div>
                <div className="copyright-row">
                    <p>&copy; {new Date().getFullYear()} Prowork Tech. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
