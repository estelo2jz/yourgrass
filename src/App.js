import React from 'react';
import Navigation from './components/navigation';
import Welcome from './components/welcome';
import We from './components/we';
import About from  './components/about';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Welcome />
      <We />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
