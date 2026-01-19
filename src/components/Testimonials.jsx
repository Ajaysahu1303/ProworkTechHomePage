import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "Alice Johnson",
        feedback: "Prowork Tech completely transformed our online presence. Their team is professional, fast, and incredibly talented!",
        role: "CEO, TechStart",
        rating: 5,
    },
    {
        name: "Michael Chen",
        feedback: "The cloud migration was seamless. We saved 40% on infrastructure costs thanks to their optimization strategies.",
        role: "CTO, CloudNine",
        rating: 5,
    },
    {
        name: "Sarah Williams",
        feedback: "Best digital marketing agency we've worked with. Our leads doubled in just three months.",
        role: "Marketing Director, GrowthHub",
        rating: 4,
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials">
            <h2>What Clients Say</h2>
            <div className="testimonials-grid">
                {testimonials.map((t, index) => (
                    <div className="testimonial-card" key={index}>
                        <FaQuoteLeft style={{ fontSize: "1.5rem", color: "var(--primary-color)", opacity: 0.3, marginBottom: "10px" }} />
                        <div style={{ marginBottom: "10px" }}>
                            {[...Array(t.rating)].map((_, i) => (
                                <FaStar key={i} style={{ color: "#fbbf24", marginRight: "2px" }} />
                            ))}
                        </div>
                        <p>"{t.feedback}"</p>
                        <span className="client-name">- {t.name}</span>
                        <small style={{ color: 'var(--text-color)', opacity: 0.8 }}>{t.role}</small>
                    </div>
                ))}
            </div>
        </section>
    );
}