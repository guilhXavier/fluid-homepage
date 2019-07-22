import React from 'react';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSun,
  faMoon,
  faCloudRain,
  faCloud,
  faWater,
  faIgloo,
  faWind,
  faSmog,
  faCloudSun,
  faCloudMoon,
} from '@fortawesome/free-solid-svg-icons';
import Ellipse from './Ellipse';

const Weather = () => {
  // -29.8512,-51.1779
  const [loading, setLoading] = React.useState(true);
  const [currentWeather, setCurrentWeather] = React.useState({});
  const [forecast, setForecast] = React.useState([]);

  const apiKey = '1818538ed54299479909a162a2867b3e';
  const lat = '-29.8512';
  const long = '-51.1779';

  const index = {
    'clear-day': faSun,
    'clear-night': faMoon,
    rain: faCloudRain,
    sleet: faIgloo,
    wind: faWind,
    fog: faSmog,
    cloudy: faCloud,
    'partly-cloudy-day': faCloudSun,
    'partly-cloudy-night': faCloudMoon,
  };

  React.useEffect(() => {
    Axios(
      `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${apiKey}/${lat},${long}?exclude=minutely,daily,alerts,flags&units=auto`,
    ).then((res) => {
      setCurrentWeather(res.data.currently);
      setForecast(res.data.hourly);
      setLoading(false);
    });
  }, []);

  console.log(forecast);

  return (
		<React.Fragment>
			{loading ? (
				<Ellipse />
			) : (
				<React.Fragment>
					<div className="window" id="weather">
						<div className="window-inner">
							<div className="title-bar" style={{ background: '#be4bdb', textAlign: 'center' }}>
								<span>Weather</span>
							</div>
							<div className="window-content">
								<div className="weather-symbol">
									<FontAwesomeIcon
  icon={index[currentWeather.icon]}
  size="3x"
  style={{ color: 'white' }}
									/>
								</div>
								<div className="summary">
									<div className="temp-sum">
{currentWeather.temperature.toFixed(0)}
℃
         </div>
									<div className="air-sum">
										<div className="air-sum-comp precipitation">
											Precipitation
{' '}
											<span className="precipitation-val">
{currentWeather.precipProbability}
%
           </span>
										</div>
										<div className="air-sum-comp humidity">
											Humidity
{' '}
											<span className="humidity-val">
{currentWeather.humidity * 100}
%
           </span>
										</div>
										<div className="air-sum-comp windspeed">
											Windspeed
{' '}
											<span className="windspeed-val">
												{currentWeather.windSpeed.toFixed(0)}
												km/h
											</span>
										</div>
									</div>
								</div>
								<div className="weather-description">{currentWeather.summary}</div>
								<div className="forecast-description">{forecast.summary}</div>
								<div className="forecast">
									<div className="forecast-item">
										<div className="forecast-item-info forecast-time">+1</div>
										<div className="forecast-item-info forecast-symbol">
											<FontAwesomeIcon
  icon={index[forecast.data[1].icon]}
  size="2x"
  style={{ color: 'white' }}
											/>
										</div>
										<div className="forecast-item-info forecast-temp">
											{forecast.data[1].temperature.toFixed(0)}
℃
										</div>
										<div className="forecast-item-info forecast-precip">
											<FontAwesomeIcon icon={faWater} style={{ color: 'white' }} />
											<span className="forecast-precip-val">
												{forecast.data[1].precipProbability}
%
											</span>
										</div>
									</div>
									<div className="forecast-item">
										<div className="forecast-item-info forecast-time">+2</div>
										<div className="forecast-item-info forecast-symbol">
											<FontAwesomeIcon
  icon={index[forecast.data[1].icon]}
  size="2x"
  style={{ color: 'white' }}
											/>
										</div>
										<div className="forecast-item-info forecast-temp">
											{forecast.data[1].temperature.toFixed(0)}
℃
										</div>
										<div className="forecast-item-info forecast-precip">
											<FontAwesomeIcon icon={faWater} style={{ color: 'white' }} />
											<span className="forecast-precip-val">
												{forecast.data[1].precipProbability}
%
											</span>
										</div>
									</div>
									<div className="forecast-item">
										<div className="forecast-item-info forecast-time">+3</div>
										<div className="forecast-item-info forecast-symbol">
											<FontAwesomeIcon
  icon={index[forecast.data[2].icon]}
  size="2x"
  style={{ color: 'white' }}
											/>
										</div>
										<div className="forecast-item-info forecast-temp">
											{forecast.data[2].temperature.toFixed(0)}
℃
										</div>
										<div className="forecast-item-info forecast-precip">
											<FontAwesomeIcon icon={faWater} style={{ color: 'white' }} />
											<span className="forecast-precip-val">
												{forecast.data[2].precipProbability}
%
											</span>
										</div>
									</div>
									<div className="forecast-item">
										<div className="forecast-item-info forecast-time">+4</div>
										<div className="forecast-item-info forecast-symbol">
											<FontAwesomeIcon
  icon={index[forecast.data[2].icon]}
  size="2x"
  style={{ color: 'white' }}
											/>
										</div>
										<div className="forecast-item-info forecast-temp">
											{forecast.data[2].temperature.toFixed(0)}
℃
										</div>
										<div className="forecast-item-info forecast-precip">
											<FontAwesomeIcon icon={faWater} style={{ color: 'white' }} />
											<span className="forecast-precip-val">
												{forecast.data[2].precipProbability}
%
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</React.Fragment>
			)}
		</React.Fragment>
  );
};

export default Weather;
