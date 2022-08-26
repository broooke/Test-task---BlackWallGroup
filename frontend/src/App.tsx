import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import {store} from "./store";

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Home />} />
              </Routes>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
