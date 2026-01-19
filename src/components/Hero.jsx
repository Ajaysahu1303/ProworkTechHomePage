export default function Hero() {
    return (
        <section className="hero" id="hero">
            <h1>Prowork Tech</h1>
            <p>Transforming ideas into digital reality with cutting-edge web and cloud solutions.</p>
            <div className="cta-group">
                <button className="btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Get Started</button>
                <button className="btn-secondary" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>Our Services</button>
            </div>
        </section>
    )
}