import React, { useState } from "react";

const CitiesList = ({ cities, onSelectCity }) => {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityChange = (event) => {
    const selectedCityId = event.target.value;
    const selectedCity = cities.find((city) => city.cityId === selectedCityId);
    setSelectedCity(selectedCity);
    onSelectCity(selectedCity);
  };

  return (
    <div>
      <h2>Cities:</h2>
      <select value={selectedCity?.cityId} onChange={handleCityChange}>
        <option value="">Select a city</option>
        {cities.map((city) => (
          <option key={city.cityId} value={city.cityId}>
            {city.cityName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitiesList;
