import axios from 'axios';
import { createBem } from '@/utils/createBem';
import styles from './detailsList.module.scss';
import DetailsItem from './DetailsItem';
import { useEffect, useState } from 'react';
const bem = createBem('details', styles);

const DetailsList = () => {
  const [weather, setWeather] = useState(null);

  const renderedData = weather && [
    { name: 'Feels Like', value: weather.main?.feels_like, unit: '°C' },
    {
      value: [weather.main?.temp_min, weather.main?.temp_max],
      unit: '°C',
    },
    { name: 'Humidity', value: weather.main?.humidity, unit: '%' },
    {
      name: 'Pressure',
      value: weather.main?.pressure,
      unit: 'Pa',
    },
    { name: 'Wind Speed', value: weather.wind?.speed, unit: 'm/s' },
    { name: 'Visibility', value: weather.visibility, unit: 'm' },
  ];

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Alicante&appid=4aaa32b5801e2c1473c7b233f129d675'
        );
        setWeather(res.data);
      } catch {
        console.log('error');
      }
    };
    fetchWeather();
  }, []);

  return (
    <section className={bem()}>
      <div className="container">
        <ul className={bem('list')}>
          {renderedData ? (
            renderedData.map((elem, id) => <DetailsItem key={id} data={elem} />)
          ) : (
            <li className={bem('error')}>An error has happened, restart the page and try again</li>
          )}
        </ul>
      </div>
    </section>
  );
};
export default DetailsList;
