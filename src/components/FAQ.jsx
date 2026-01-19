import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
    { q: "What services do you offer?", a: "We specialize in Web Development, UI/UX Design, Digital Marketing, and Cloud Solutions tailored to your business needs." },
    { q: "How long does a project take?", a: "Project timelines vary based on scope. A standard website takes 2-4 weeks, while complex apps may take 8-12 weeks." },
    { q: "Do you offer post-launch support?", a: "Yes, we providing ongoing maintenance and support packages to ensure your digital products remain secure and up-to-date." },
    { q: "How much do you charge?", a: "Our pricing is project-based. Contact us for a free quote customized to your specific requirements." },
    { q: "Can you help with SEO?", a: "Absolutely! all our websites are built with SEO best practices in mind, and we offer dedicated growth strategies." },
];

export default function FAQ() {
    const [open, setOpen] = useState(null);

    return (
        <section id="faq">
            <h2>Freqently Asked Questions</h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {faqs.map((f, i) => (
                    <div className="faq-item" key={i}>
                        <div className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
                            {f.q}
                            <span>{open === i ? <FaMinus /> : <FaPlus />}</span>
                        </div>
                        {open === i && <div className="faq-answer">{f.a}</div>}
                    </div>
                ))}
            </div>
        </section>
    )
}