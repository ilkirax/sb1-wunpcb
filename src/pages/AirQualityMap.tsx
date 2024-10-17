import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';

interface AirQualityData {
  location: string;
  aqi: number;
  mainPollutant: string;
}

const AirQualityMap: React.FC = () => {
  const [airQualityData, setAirQualityData] = useState<AirQualityData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAirQualityData = () => {
      // Mock data
      const mockData: AirQualityData[] = [
        { location: "Downtown", aqi: 45, mainPollutant: "PM2.5" },
        { location: "Suburb", aqi: 32, mainPollutant: "O3" },
        { location: "Industrial Zone", aqi: 75, mainPollutant: "NO2" },
        { location: "Park Area", aqi: 28, mainPollutant: "PM10" },
        { location: "Riverside", aqi: 38, mainPollutant: "SO2" },
      ];

      setAirQualityData(mockData);
      setLoading(false);
    };

    // Simulate API call delay
    setTimeout(fetchAirQualityData, 1000);
  }, []);

  const getAQIColor = (aqi: number) => {
    if (aqi <= 50) return 'bg-green-500';
    if (aqi <= 100) return 'bg-yellow-500';
    if (aqi <= 150) return 'bg-orange-500';
    if (aqi <= 200) return 'bg-red-500';
    if (aqi <= 300) return 'bg-purple-500';
    return 'bg-red-900';
  };

  if (loading) {
    return <div className="text-center">Loading air quality data...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Air Quality Map</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {airQualityData.map((data, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center mb-2">
              <MapPin size={24} className="text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold">{data.location}</h2>
            </div>
            <div className={`text-white text-center py-2 px-4 rounded-full ${getAQIColor(data.aqi)}`}>
              AQI: {data.aqi}
            </div>
            <p className="mt-2">Main Pollutant: {data.mainPollutant}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirQualityMap;