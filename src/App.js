import React, { useState } from "react";
import List from "./List";
import CitiesList from "./CitiesList";
import Result from "./Result";

const App = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [cities, setCities] = useState([]);

  const handleStateSelection = (state) => {
    setSelectedState(state);
    setSelectedCity(null);
  };

  const handleCitySelection = (city) => {
    setSelectedCity(city);
  };

  return (
    <div>
      <h1>City Selector</h1>
      <List onSelectState={handleStateSelection} onSelectCities={setCities} />
      <CitiesList cities={cities} onSelectCity={handleCitySelection} />
      <Result selectedState={selectedState} selectedCity={selectedCity} />
    </div>
  );
};

export default App;
