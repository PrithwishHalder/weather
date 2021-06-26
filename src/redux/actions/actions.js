import { WEATHER_DETAILS, API_KEY } from "./actionTypes";

import axios from "axios";

export const weatherDetails = (city) => async (dispatch) => {
  try {
    const response = await axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`,
    });
    const weather = response.data;

    const { lat, lon } = weather.coord;

    const response2 = await axios({
      method: "GET",
      url: `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
    });

    const aqi = response2.data;

    const response3 = await axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely&appid=${API_KEY}`,
    });

    const forcast = response3.data;

    let data = { ...weather, ...aqi, ...forcast };

    dispatch({
      type: WEATHER_DETAILS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

// export const aqiDetails = (lat, lon) => async (dispatch) => {
//   try {
//     const response = await axios({
//       method: "GET",
//       url: `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
//     });
//     const data = response.data;

//     dispatch({
//       type: AQI_DETAILS,
//       payload: data,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
