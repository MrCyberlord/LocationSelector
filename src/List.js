import React, { useEffect, useState } from "react";

const List = ({ onSelectState, onSelectCities }) => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState(null);

  useEffect(() => {
    // fetch("https://api.minebrat.com/api/v1/states")
    fetch("/api/v1/states")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setStates(data);
      })
      .catch((error) => {
        console.error("Error fetching states:", error);
      });
  }, []);

  const handleStateChange = (event) => {
    const selectedStateId = event.target.value;
    const selectedState = states.find(
      (state) => state.stateId === selectedStateId
    );
    console.log("SelectedState:", selectedState);
    setSelectedState(selectedState);
    onSelectState(selectedState);
    onSelectCities(selectedState ? selectedState.city : []);
  };

  return (
    <div>
      <h2>States:</h2>
      <select value={selectedState?.stateId} onChange={handleStateChange}>
        <option value="">Select a state</option>
        {states.map((state) => (
          <option key={state.stateId} value={state.stateId}>
            {state.stateName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default List;
