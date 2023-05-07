import React from 'react';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import Background from './components/Background';

function App() {
  return (
    <div className='main-container'>
      <Background />
      <div className="app">
        <Navbar />
        <Footer />
      </div>
    </div>
  )
}

export default App;