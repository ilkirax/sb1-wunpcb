import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Activity, Route } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to AirQuality Tracker</h1>
      <p className="text-xl mb-8">Monitor air quality, track your exposure, and find cleaner routes.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link to="/map" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <MapPin size={48} className="mx-auto mb-4 text-blue-600" />
          <h2 className="text-2xl font-semibold mb-2">Air Quality Map</h2>
          <p>View real-time air quality data for your city.</p>
        </Link>
        <Link to="/personal-index" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Activity size={48} className="mx-auto mb-4 text-green-600" />
          <h2 className="text-2xl font-semibold mb-2">Personal Air Quality Index</h2>
          <p>Track your exposure to air pollution over time.</p>
        </Link>
        <Link to="/route-recommendation" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Route size={48} className="mx-auto mb-4 text-purple-600" />
          <h2 className="text-2xl font-semibold mb-2">Route Recommendations</h2>
          <p>Find cleaner routes for your daily commute.</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;