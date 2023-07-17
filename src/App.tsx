import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./app/store";
import { fetchData } from "./app/Reducers/Weather";
import SearchWeatherData from "./Components/SearchData";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) =>
        dispatch(fetchData(position))
      );
    }
  });
  return <SearchWeatherData />;
}

export default App;
