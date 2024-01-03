import React, { useState } from 'react';
import '../style.css'; // Import your CSS file

const WeatherDisplay = () => {
  const [selectedData, setSelectedData] = useState('windspeed'); // Initialize with windspeed as default
  const [showData, setShowData] = useState(false); // State to control whether to display data

  const handleChoice = (choice) => {
    setSelectedData(choice);
    // You can implement logic here to display data based on the selected choice
  };

  const handleShowData = () => {
    setShowData(true);
    // You can perform any additional logic here before showing data
  };

  return (
    <div className="wrapper">
      <div className="content">
        <h1 style={{ color: 'black' }}>Weather Data</h1>
        <button onClick={handleShowData}>Show Data</button>
        {showData && (
          <div className="weather-info" id="weatherInfo">
            {/* Display weather data based on selectedData */}
            {selectedData === 'windspeed' && <p style={{ color: 'black' }}>Wind Speed: <span>{/* Display windspeed data here */}</span></p>}
            {selectedData === 'temperature' && <p style={{ color: 'black' }}>Temperature: <span>{/* Display temperature data here */}</span></p>}
            {selectedData === 'humidity' && <p style={{ color: 'black' }}>Humidity: <span>{/* Display humidity data here */}</span></p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherDisplay;
