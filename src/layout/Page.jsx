import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Background } from "../components/styled";

import Search from "../components/Search/Search";
import WeatherDetail from "../components/WeatherDetail/WeatherDetail";

import { weatherDetails, aqiDetails } from "../redux/actions/actions";

const Page = () => {
  const dispatch = useDispatch();

  const [city, setCity] = useState(null);

  const weather = useSelector((state) => state.weather.weather);

  const onChange = (e) => {
    setCity(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(weatherDetails(city));
  };

  // if (weather.length === 1) {
  //   const lat = weather[0].coord.lat;
  //   const lon = weather[0].coord.lon;
  //   console.log(lon, lat);
  //   dispatch(weatherDetails(city));
  //   dispatch(aqiDetails(lat, lon));
  // }

  return (
    <>
      {weather.length === 1 ? (
        <Background>
          <Search onSubmit={onSubmit} onChange={onChange} />

          <WeatherDetail weather={weather[0]} />
        </Background>
      ) : (
        <Background>
          <Search onSubmit={onSubmit} onChange={onChange} />
        </Background>
      )}
    </>
  );
};

export default Page;
