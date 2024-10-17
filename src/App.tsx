import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AirQualityMap from './pages/AirQualityMap';
import PersonalIndex from './pages/PersonalIndex';
import RouteRecommendation from './pages/RouteRecommendation';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<AirQualityMap />} />
            <Route path="/personal-index" element={<PersonalIndex />} />
            <Route path="/route-recommendation" element={<RouteRecommendation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;