import React from "react";
import Home from "./routes/Home";
import Reservations from "./routes/Reservations";

import {Route, Routes, useRoutes} from "react-router-dom";

function App() {
  let element = useRoutes([
    {path: '/', element: <Home />},
    {path: '/Reservations', element: <Reservations />},
  ]);
  return (
    element
  );
}

export default App;
