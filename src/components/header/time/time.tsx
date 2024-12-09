import React, { useState, useEffect } from "react";
import './time.css';

const DateTimeDisplay: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Europe/Kyiv",
    });
  };

  const formatDate = (date: Date) => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };

  const hour = currentDateTime.getHours();
  const isDay = hour >= 6 && hour < 18;
  const themeClass = isDay ? "day-theme" : "night-theme";

 // const themeClass = "night-theme";

  return (
    <div className={`dateDiv ${themeClass}`}>
      <div>
        <span className="time-span">{formatTime(currentDateTime)}</span>
      </div>
      <div>
        <span className="time-span">{formatDate(currentDateTime)}</span>
      </div>
    </div>
  );
};

export default DateTimeDisplay;
