import React, { useState, useEffect } from "react";

const getTimePeriod = (hour) => {
  if (hour >= 6 && hour < 12) return "morning";
  if (hour >= 12 && hour < 18) return "day";
  return "night";
};

const Clock = ({
  showDate = true,
  backgroundColors = {
    morning: "yellow",
    day: "lightblue",
    night: "black",
  },
  fontSettings = {
    fontFamily: "Arial",
    fontSize: "24px",
    color: "white",
  },
}) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hour = currentTime.getHours();
  const period = getTimePeriod(hour);
  const backgroundColor = backgroundColors[period];

  const containerStyle = {
    backgroundColor,
    padding: "20px",
    textAlign: "center",
    borderRadius: "10px",
    fontFamily: fontSettings.fontFamily,
    fontSize: fontSettings.fontSize,
    color: fontSettings.color,
    transition: "background-color 0.5s ease",
  };

  return (
    <div style={containerStyle}>
      <div>🕒 {currentTime.toLocaleTimeString()}</div>
      {showDate && <div>📅 {currentTime.toLocaleDateString()}</div>}
      <div style={{ marginTop: "10px", fontSize: "14px" }}>
        Поточна частина дня: <strong>{period.toUpperCase()}</strong>
      </div>
    </div>
  );
};

export default Clock;