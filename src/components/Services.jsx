import { FaCode, FaPaintBrush, FaBullhorn, FaCloud, FaShoppingCart, FaLightbulb } from "react-icons/fa";

const services = [
    { title: "Web Development", desc: "Building responsive, high-performance websites using the latest technologies like React and Next.js.", icon: <FaCode /> },
    { title: "UI/UX Design", desc: "Crafting intuitive and visually stunning user interfaces that drive engagement and satisfaction.", icon: <FaPaintBrush /> },
    { title: "Digital Marketing", desc: "Growing your brand presence with data-driven SEO, social media, and content strategies.", icon: <FaBullhorn /> },
    { title: "Cloud Solutions", desc: "Deploying secure, scalable, and cost-effective cloud infrastructure on AWS and Azure.", icon: <FaCloud /> },
    { title: "E-Commerce", desc: "Creating robust online stores with seamless payment integration and user management.", icon: <FaShoppingCart /> },
    { title: "Consultancy", desc: "Expert technical advice to help you make informed decisions for your digital transformation.", icon: <FaLightbulb /> },
    { title: "Consultancy", desc: "Expert technical advice to help you make informed decisions for your digital transformation.", icon: <FaLightbulb /> },
    { title: "Consultancy", desc: "Expert technical advice to help you make informed decisions for your digital transformation.", icon: <FaLightbulb /> },
];

export default function Services() {
    return (
        <section id="services">
            <h2>Our Services</h2>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="service-icon" style={{ fontSize: "2rem", color: "var(--primary-color)", marginBottom: "1rem" }}>
                            {service.icon}
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}