import React, { useState } from 'react';
import { Route, MapPin } from 'lucide-react';

interface RouteOption {
  id: number;
  name: string;
  aqi: number;
  duration: number;
  distance: number;
}

const RouteRecommendation: React.FC = () => {
  const [start, setStart] = useState('');
  const [destination, setDestination] = useState('');
  const [routes, setRoutes] = useState<RouteOption[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated route options - replace with actual API call
    const simulatedRoutes: RouteOption[] = [
      { id: 1, name: 'Route A', aqi: 35, duration: 25, distance: 5.2 },
      { id: 2, name: 'Route B', aqi: 42, duration: 22, distance: 5.8 },
      { id: 3, name: 'Route C', aqi: 28, duration: 30, distance: 4.9 },
    ];
    setRoutes(simulatedRoutes);
  };

  const getAQIColor = (aqi: number) => {
    if (aqi <= 50) return 'text-green-600';
    if (aqi <= 100) return 'text-yellow-600';
    if (aqi <= 150) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Route Recommendations</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="mb-4">
          <label htmlFor="start" className="block text-sm font-medium text-gray-700 mb-1">Start Location</label>
          <input
            type="text"
            id="start"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
          Find Routes
        </button>
      </form>

      {routes.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Recommended Routes</h2>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {routes.map((route) => (
              <div key={route.id} className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-xl font-semibold mb-2">{route.name}</h3>
                <div className="flex items-center mb-2">
                  <MapPin size={20} className="text-gray-500 mr-2" />
                  <span>{route.distance} km</span>
                </div>
                <div className="flex items-center mb-2">
                  <Route size={20} className="text-gray-500 mr-2" />
                  <span>{route.duration} min</span>
                </div>
                <div className={`font-semibold ${getAQIColor(route.aqi)}`}>
                  AQI: {route.aqi}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RouteRecommendation;