import { WEATHER_DETAILS, AQI_DETAILS } from "../actions/actionTypes";

const initialState = {
  weather: [],
  aqi: [],
};

const weatherReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case WEATHER_DETAILS:
      console.log(payload);
      return { ...state, weather: [payload] };

    case AQI_DETAILS:
      return { ...state, weather: [payload] };

    default:
      return state;
  }
};

export default weatherReducer;
