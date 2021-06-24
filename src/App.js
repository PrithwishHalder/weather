import React from "react";

import Page from "./layout/Page";

import "./index.css";

// redux
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
}

export default App;
