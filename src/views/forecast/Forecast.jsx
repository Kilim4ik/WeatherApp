import { createBem } from '@/utils/createBem';
import styles from './forecast.module.scss';
import { useEffect } from 'react';
import ForecastItem from '@/components/ForecastItem';
import DateConverter from './DateConverter';
import { useState } from 'react';
import { set } from 'date-fns';
import IconDetector from './IconDetector';
const API_KEY = import.meta.env.VITE_FORECAST_API_KEY;

const bem = createBem('weather', styles);

const Forecast = ({ latitude, longitude }) => {
  const [forecastData, setForecastData] = useState([]);
  const [dateConverted, setDateConverted] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
        );
        const data = await response.json();
        console.log(data);
        const filtered = [];
        let lastDate = null;

        for (let i = 0; i < data.list.length; i += 6) {
          const currentDate = data.list[i].dt_txt.split(' ')[0];
          if (currentDate !== lastDate) {
            filtered.push(data.list[i]);
            lastDate = currentDate;
          }
        }
        console.log(filtered);
        setForecastData(filtered);
      } catch (error) {
        console.error('Failed to fetch forecast:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <section className={bem('section')}>
      <div className="container">
        <div className={bem('content')}>
          <h1 className={bem('title')}>Weekly forecast</h1>
          <ul className={bem('list')}>
            {forecastData.map((item, key) => {
              const icon = IconDetector(item.weather[0].main);
              const maxTemp = Math.round(item.main.temp_max);
              const minTemp = Math.round(item.main.temp_min);
              const description = item.weather[0].description;
              return (
                <ForecastItem
                  key={key}
                  date={DateConverter(item.dt_txt)}
                  imageUrl={icon}
                  maxTemp={maxTemp}
                  minTemp={minTemp}
                  description={description}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Forecast;
