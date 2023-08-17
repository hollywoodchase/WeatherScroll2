import React, { useState } from "react";
import Slider from "./Slider";

const FirstCard = (props) => {
  const [data, setData] = useState();

  const forecast = props.forecast;

  return (
    <div className="card-container text-center">
      <div className="desc day-desc">
        {forecast.name} Daytime
        <div className="img-container">
        <div className="text-center img-left img-box col-md-5">
          <p>Relative Humidity</p>
          <p>{forecast.relativeHumidity.value}%</p>
        </div>
        <img src={forecast.icon} alt="Forecasts" height={50} />
        <div className="text-center img-right img-box col-md-5">
          <p>Wind Speed</p>
          <p>{forecast.windSpeed}</p>
        </div>
      </div>
      <br/>
        <p>{forecast.shortForecast}</p>
        <p>{forecast.temperature}&deg;</p>
        <div id="demo"></div>
      </div>
    </div>
  );
};

export default FirstCard;
