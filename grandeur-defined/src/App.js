// App.js
import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import mainRoute from '../src/router/MainRoutes';

function App() {
  return (
    <RouterProvider router={mainRoute}>

    </RouterProvider> 
    
  );
}

export default App;