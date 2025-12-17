import "./contactPage.scss";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function ContactPage() {
    return (
        <div className="contactPage">
            <div className="contactContainer">
                <div className="infoSection">
                    <h1>Get in Touch</h1>
                    <p>
                        Have questions about buying, selling, or renting? We're here to help.
                        Reach out to our team of experts today.
                    </p>

                    <div className="contactDetails">
                        <div className="item">
                            <div className="icon"><FaPhoneAlt /></div>
                            <div className="details">
                                <h3>Phone</h3>
                                <span>+1 234 567 890</span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon"><FaEnvelope /></div>
                            <div className="details">
                                <h3>Email</h3>
                                <span>contact@estatex.com</span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon"><FaMapMarkerAlt /></div>
                            <div className="details">
                                <h3>Office</h3>
                                <span>123 Real Estate Ave, City, Country</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="formSection">
                    <form>
                        <div className="formGroup">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="formGroup">
                            <input type="email" placeholder="Email Address" required />
                        </div>
                        <div className="formGroup">
                            <input type="text" placeholder="Subject" />
                        </div>
                        <div className="formGroup">
                            <textarea placeholder="Message" rows={5} required></textarea>
                        </div>
                        <button className="submitBtn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
