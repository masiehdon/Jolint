
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './Pages/Layout';
import AboutUs from './Pages/AboutUs';
import HowItWorks from './Pages/HowItWorks';
import Inclusion from './Pages/Inclusion';
import FAQ from './Pages/FAQ';


function App() {
  
  return (
    <>

      <Layout>
        <Routes>
  <Route path="/" element={<HowItWorks />} /> 
  <Route path="/how-it-works" element={<HowItWorks />} />
  <Route path="/why-inclusion" element={<Inclusion />} />
  <Route path="/faq" element={<FAQ />} />
  <Route path="/about-us" element={<AboutUs />} />
  
</Routes>
      </Layout>
    </>
  )
}

export default App;
