import React from "react";
import ReactDOM from "react-dom/client"; 
import App from "./App"; 
import './style/ScheduleView.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// Lấy phần tử HTML trong DOM nơi app sẽ được render
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render ứng dụng vào phần tử này
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
