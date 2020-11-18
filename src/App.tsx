import logo from './logo.svg';
import './App.css';
import { Home } from "./Components/Home";
import * as React from "react";

export const App: React.StatelessComponent<{}> = () => {
  return (
    <div className="container-fluid">
      <Home/>
    </div>
  );
}
