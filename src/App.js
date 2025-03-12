// App.js
import React from "react";
import { RouterProvider } from "react-router-dom";
import mainRoute from "../src/routes/app";

function App() {
  return <RouterProvider router={mainRoute} />;
}

export default App;
