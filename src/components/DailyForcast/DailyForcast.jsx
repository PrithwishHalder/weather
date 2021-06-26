import React from "react";
import { Conditions, Forcast } from "../styled";

const DailyForcast = ({ weather }) => {
  return (
    <Conditions width="100vw" overflow="scroll">
      {weather.daily.map((forcast, index) => (
        <Forcast key={index}>
          <p className="date">
            {new Date(forcast.dt * 1000).getDate()}/{new Date(forcast.dt * 1000).getMonth()}
          </p>
          <p>
            <img src={`http://openweathermap.org/img/wn/${forcast.weather[0].icon}.png`} alt="" />
          </p>
          <p className="condition">{forcast.weather[0].main}</p>
          <p className="temps">
            <span className="temp">Max</span>
            <span className="temp">Min</span>
          </p>
          <p className="temps">
            <span className="temp">{forcast.temp.max} &#176;C</span>
            <span className="temp">{forcast.temp.min} &#176;C</span>
          </p>
          <p></p>
        </Forcast>
      ))}
    </Conditions>
  );
};

export default DailyForcast;
