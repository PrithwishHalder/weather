import { AQI_DETAILS } from "../actions/actionTypes";

const initialState = {
  weather: [],
};

const weatherReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case WEATHER_DETAILS:
      return { ...state, weather: [payload] };

    default:
      return state;
  }
};

export default weatherReducer;
