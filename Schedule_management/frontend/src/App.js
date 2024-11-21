import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ScheduleView from "./components/ScheduleView";


const App = () => {
  return (
    <div>
      <h1 className='m-3'>Lịch học, lịch thi</h1>
      <ScheduleView />
    </div>
  );
};


export default App;
