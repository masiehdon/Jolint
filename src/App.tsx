
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './Pages/Layout';
import AboutUs from './Pages/AboutUs';
import HowItWorks from './Pages/HowItWorks';
import Inclusion from './Pages/Inclusion';
import ContactUs from './Pages/ContactUs';
import FAQ from './Pages/FAQ';
// import Home from './Pages/Home';

function App() {
  
  return (
    <>

      <Layout>
        <Routes>
  <Route path="/" element={<HowItWorks />} /> 
  <Route path="/how-it-works" element={<HowItWorks />} />
  <Route path="/inclusion" element={<Inclusion />} />
  <Route path="/faq" element={<FAQ />} />
  <Route path="/about-us" element={<AboutUs />} />
  <Route path="/contact-us" element={<ContactUs />} />
</Routes>
      </Layout>
    </>
  )
}

export default App;
