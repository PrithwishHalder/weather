import { WEATHER_DETAILS, AQI_DETAILS, API_KEY } from "./actionTypes";

import axios from "axios";

export const weatherDetails = (city) => async (dispatch) => {
  try {
    const response = await axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`,
    });
    const data = response.data;

    dispatch({
      type: WEATHER_DETAILS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const aqiDetails = (lat, lon) => async (dispatch) => {
  try {
    const response = await axios({
      method: "GET",
      url: `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
    });
    const data = response.data;

    dispatch({
      type: AQI_DETAILS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
