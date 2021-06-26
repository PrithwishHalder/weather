import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Background } from "../components/styled";

import Search from "../components/Search/Search";
import Weather from "./Pagelayout";

import { weatherDetails } from "../redux/actions/actions";

const Page = () => {
  const dispatch = useDispatch();

  const [city, setCity] = useState(null);

  const weather = useSelector((state) => state.weather);

  // console.log(weather);

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
      <Background>
        <Search onSubmit={onSubmit} onChange={onChange} />
        {weather.id !== null && <Weather weather={weather} />}
      </Background>
    </>
  );
};

export default Page;
