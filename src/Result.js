import React from "react";

const Result = ({ selectedState, selectedCity }) => {
  return (
    <div>
      <h2>Result:</h2>
      {selectedState && selectedCity ? (
        <p>
          You have selected {selectedCity.cityName} from{" "}
          {selectedState.stateName}.
        </p>
      ) : (
        <p>Please select a state and a city.</p>
      )}
    </div>
  );
};

export default Result;
