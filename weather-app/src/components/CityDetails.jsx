import React, { Component } from "react";
import axios from "axios";
import "../Card.css";
var moment = require("moment");

class CityDetails extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    
    this.state = {
      //cityDetails: props.match.params.id,
      weatherDataDetails: []
    };
  }

  componentDidMount = () => {
    const weatherURL = "https://www.metaweather.com/api/location/";

    axios.get(weatherURL + this.props.match.params.id).then(result => {
      console.log({ result });
    //   const fiveDays = result.data;
    //   console.log(fiveDays);
      

      this.setState({ weatherDataDetails: result.data.consolidated_weather });
    });
  };

  render() {
    
      
    return (
      <div className="city">
        {/* this is id: {this.props.match.params.id} */}
        {/* <WeatherInfo data={this.state.weatherDataDetails} /> */}
        <div className="row justify-content-center">
          {this.state.weatherDataDetails.map((day, index) => (
            <div key={index}  className="col-auto">
              <div className="card bg-light">
              <h3 className="card-title">{moment(day.applicable_date).format('dddd')}</h3>
              <p className="text-muted">{moment(day.applicable_date).format("MMM Do YYYY")}</p>
                {/* <i className={imageURL}></i> */}
                <img
                className="statusImg"
                src={`https://www.metaweather.com/static/img/weather/${day.weather_state_abbr}.svg`}
               />
                <div className="card-body">
                  <p className="card-text">
                    {" "}
                     {day.weather_state_name}
                  </p>
                  <p className="card-text">
                    {" "}
                    Max: {day.max_temp.toFixed(0) + "°C"}
                  </p>
                  <p className="card-text">
                    {" "}
                    Min: {day.min_temp.toFixed(0) + "°C"}
                  </p>
                  <button className="btn btn-dark btn-outline-light">
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

// const WeatherInfo = props => {
//   console.log(props);
//   //show the result if they are availeble
//   if (props && props.data === null) {
//     return "";
//   } else {
//     return (
//       <div className="cityDetails">
//         <div className="city">
//           <ul>
//             <li id="city">City: {props.data.title}</li>
//             <li>
//               Current Status:{" "}
//               {props.data.consolidated_weather[0].weather_state_name}
//               <img
//                 className="statusImg"
//                 src={`https://www.metaweather.com/static/img/weather/${props.data.consolidated_weather[0].weather_state_abbr}.svg`}
//               />
//             </li>

//             <li>
//               Min Temp:{" "}
//               {props.data.consolidated_weather[0].min_temp.toFixed(0) + "°C"}
//             </li>
//             <li>
//               Max Temp:{" "}
//               {props.data.consolidated_weather[0].max_temp.toFixed(0) + "°C"}
//             </li>
//             <li>
//               Humidity: {props.data.consolidated_weather[0].humidity + "%"}
//             </li>
//             <li>
//               Wind Speed:{" "}
//               {props.data.consolidated_weather[0].wind_speed.toFixed(0) +
//                 " mph"}
//             </li>
//             <li>
//               Sun Rise:{" "}
//               <img
//                 className="Logo"
//                 src={require("../assets/cloud-element-weather-sunrise-sun-up-rise-512.png")}
//                 width="45"
//                 height="43"
//               />
//               {props.data.sun_rise}
//             </li>
//           </ul>
//         </div>

//       </div>
//     );
//   }
// };

export default CityDetails;
