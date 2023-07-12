import React from "react";

const Result = ({ selectedState, selectedCity }) => {
  return (
    <div>
      <h2>Location:</h2>
      {selectedState && selectedCity ? (
        <h1>
          You have selected {selectedCity.cityName} from{" "}
          {selectedState.stateName}.
        </h1>
      ) : (
        <p>Please select a state and a city.</p>
      )}
    </div>
  );
};

export default Result;
