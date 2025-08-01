import { useEffect, useState } from "react";
import styles from "./Cards.module.scss";
import { createBem } from "@/utils/createBem";
import fetchWeather from "@/api/openWeather";

const bem = createBem("weather-cards", styles);

export default function Card() {
  const [weather, setWeather] = useState(null);
  const date = new Date();

  const dayOfWeek = date.getDay()
  const daysOfWeek = ["Sunday", "Monday", 'Tuesday', "Wednesday", "Thursday", "Friday", "Saturday"]
  const time = date.toLocaleTimeString('uk-UA', {
    hour: '2-digit',
    minute: '2-digit',
  });
  useEffect(() => {
  const city = "Kyiv";
  const getWeather = async () => {
    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      console.error("Failed to fetch weather data:", err);
    }
  };
  getWeather();
  }, []);

  if (!weather) return <p>Loading Weather...</p>;
      
const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
const countryName = regionNames.of(weather.sys.country);
  return (
    <ul className={bem()}>
      <li className={bem("item")}>
        <div className={bem("country-info-container")}>
        <p className={bem("country-info")}>{weather.name}</p>
          <p className={bem("country-info")}>{countryName}</p>
          </div>
        <p className={bem("weather__time")}>{time}</p>
        <div className={bem("button-wrapper")}>
        <button className={bem("button")}>Hourly forecast </button>
          <button className={bem("button")}>Weekly forecast </button>
          </div>
        <div className={bem("date-wrapper")}>
          <p className={bem("date")}>{date.toLocaleDateString("uk-UA")}</p>
          <hr className={bem("date__line")}/>
          <p className={bem("date")}>{daysOfWeek[dayOfWeek]}</p>
        </div>
        <div className={bem("img-wrapper")}>
                <img className={bem("img")}
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="weather icon"
          />
          </div>
        <p className={bem("temperature")}>{weather.main.temp.toFixed()}°C</p>
        <div className={bem("icons-wrapper")}>
        <svg className={bem("icon")}> <use href="/images/weather-cards/refresh.svg"></use></svg>
        <svg className={bem("icon")}> <use href="/images/weather-cards/heart.svg"></use></svg>
        <button className={`${bem("button")} ${bem("button-more")}`}>See more</button>
        <svg className={bem("icon")}> <use href="/images/weather-cards/delete.svg"></use></svg>
</div>
      </li>
    </ul>
  );
}