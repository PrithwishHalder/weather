import React from "react";

import Thermo from "../../assets/thermo.svg";
import Wind from "../../assets/wind.svg";
import Pressure from "../../assets/pressure.svg";
import Humidity from "../../assets/humidity.svg";
import Visibility from "../../assets/visibility.svg";

import { CardContainer, Card, Location, Conditions, Condition, Info, Img } from "../styled";

const WeatherDetail = ({ weather }) => {
  const date = new Date(weather.dt * 1000).toLocaleString();

  return (
    <CardContainer>
      <Card key={weather.id} direction="column">
        <Location>
          {weather.name}, {weather.sys.country}
        </Location>
        <Conditions>
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
          <div>{weather.main.temp} &#176;C</div>
        </Conditions>
        <Condition>{weather.weather[0].main}</Condition>
        Updated at {date}
      </Card>
      <Card direction="row" justify="space-around">
        <Info>
          <Img src={Thermo} />
          {weather.main.feels_like} &#176;C
        </Info>
        <Info>
          <Img src={Wind} />
          {weather.wind.speed} kmph
        </Info>
        <Info>
          <Img src={Visibility} />
          {weather.visibility / 1000} Km
        </Info>
        <Info>
          <Img src={Humidity} />
          {weather.main.humidity} %
        </Info>
        <Info>
          <Img src={Pressure} />
          {weather.main.pressure} mb
        </Info>
      </Card>
    </CardContainer>
  );
};

export default WeatherDetail;
