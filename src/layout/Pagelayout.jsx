import React from "react";

import WeatherDetail from "../components/WeatherDetail/WeatherDetail";
import DailyForcast from "../components/DailyForcast/DailyForcast";

const Pagelayout = ({ weather }) => {
  return (
    <>
      <WeatherDetail weather={weather} />
      <DailyForcast weather={weather} />
    </>
  );
};

export default Pagelayout;
