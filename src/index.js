import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from "./layout";
import Home from "./pages/home/Home";
import Spots from "./pages/spots/Spots";
import Shops from "./pages/shops/Shops";
import Tricks from "./pages/tricks/Tricks";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="spots" element={<Spots />} />
          <Route path="shops" element={<Shops />} />
          <Route path="tricks" element={<Tricks />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);