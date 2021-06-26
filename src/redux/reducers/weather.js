import { WEATHER_DETAILS } from "../actions/actionTypes";

const initialState = {
  coord: {
    lon: null,
    lat: null,
  },
  weather: [
    {
      id: null,
      main: null,
      icon: null,
    },
  ],
  base: null,
  main: {
    temp: null,
    pressure: null,
    humidity: null,
    temp_min: null,
    temp_max: null,
  },
  visibility: null,
  wind: {
    speed: null,
    deg: null,
  },
  dt: null,
  sys: {
    type: null,
    id: null,
    message: null,
    country: null,
    sunrise: null,
    sunset: null,
  },
  id: null,
  name: null,
  cod: null,
  daily: [],
  hourly: [],
};

const weatherReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case WEATHER_DETAILS:
      // console.log(payload);
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default weatherReducer;
