import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Calendar from "./calendar/Calendar";
import { AppointmentContextProvider } from "./AppointmentContext";

function App() {
  return (
    <AppointmentContextProvider>
      <Calendar />
    </AppointmentContextProvider>
  );
}

export default App;
