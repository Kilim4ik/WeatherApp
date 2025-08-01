const fetchWeather = async (city) => {
const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = import.meta.env.VITE_BASE_URL;
  const url = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch weather data: ${response.status}`);
  }
  const data = await response.json();
  return data;
};
export default fetchWeather