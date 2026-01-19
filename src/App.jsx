import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Demo from './components/Demo.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="app-container">
      <main>
        <Hero />
        <Services />
        <Demo />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
