// App.js
import React from "react";
import { RouterProvider } from "react-router-dom";
import mainRoute from "../src/routes/Main";

function App() {
  return <RouterProvider router={mainRoute} />;
}

export default App;
