import { useState } from "react";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation: Check if required fields are empty
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            alert("Please fill in all required fields.");
            return;
        }

        setIsLoading(true);
        console.log("Form Submitted:", formData);

        setTimeout(() => {
            setIsLoading(false);
            setSubmitted(true);
            alert("Thank you! We have received your message.");
            setFormData({ name: "", email: "", phone: "", message: "" });
        }, 2000);
    };

    const resetForm = () => setSubmitted(false);

    return (
        <section className="contact-section" id="contact">
            <h2>Contact Us</h2>
            <div className="contact-container">
                {submitted ? (
                    <div className="contact-form">
                        <div style={{ textAlign: "center", padding: "40px" }}>
                            <h3 style={{ color: "#28a745" }}>Message Sent Successfully!</h3>
                            <p>We'll get back to you shortly.</p>
                            <button className="btn-secondary" onClick={resetForm} style={{ marginTop: "20px" }}>
                                Send Another Message
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="contact-form">
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Contact Number (Optional)</label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+1 234 567 890"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn-submit"
                                disabled={isLoading}
                                style={{ opacity: isLoading ? 0.7 : 1, cursor: isLoading ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                            >
                                {isLoading ? <><FaSpinner className="spinner" /> Sending...</> : <><FaPaperPlane /> Send Message</>}
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </section>
    );
}

