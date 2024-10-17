import React, { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';

interface ExposureData {
  date: string;
  aqi: number;
  duration: number;
}

const PersonalIndex: React.FC = () => {
  const [exposureData, setExposureData] = useState<ExposureData[]>([]);
  const [averageAQI, setAverageAQI] = useState(0);

  useEffect(() => {
    // Simulated data - replace with actual data fetching logic
    const simulatedData: ExposureData[] = [
      { date: '2024-03-01', aqi: 45, duration: 8 },
      { date: '2024-03-02', aqi: 60, duration: 6 },
      { date: '2024-03-03', aqi: 30, duration: 7 },
      { date: '2024-03-04', aqi: 55, duration: 9 },
      { date: '2024-03-05', aqi: 40, duration: 8 },
    ];
    setExposureData(simulatedData);

    const totalAQI = simulatedData.reduce((sum, data) => sum + data.aqi, 0);
    setAverageAQI(Math.round(totalAQI / simulatedData.length));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Personal Air Quality Index</h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Your Average AQI</h2>
            <p className="text-gray-600">Based on your recent exposure</p>
          </div>
          <div className="text-5xl font-bold text-blue-600">{averageAQI}</div>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Recent Exposure History</h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">AQI</th>
              <th className="p-3 text-left">Duration (hours)</th>
            </tr>
          </thead>
          <tbody>
            {exposureData.map((data, index) => (
              <tr key={index} className="border-t">
                <td className="p-3">{data.date}</td>
                <td className="p-3">{data.aqi}</td>
                <td className="p-3">{data.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 text-center">
        <Activity size={48} className="inline-block text-green-600 mb-2" />
        <p className="text-lg">
          Keep tracking your exposure to make informed decisions about your outdoor activities!
        </p>
      </div>
    </div>
  );
};

export default PersonalIndex;