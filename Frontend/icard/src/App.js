import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import { ClientLayout } from './layouts';
//import "./App.scss";

export default function App() {

  return (
    <ClientLayout>
      <h1> hola mundo </h1>

    </ClientLayout>
  )




}

