import { createContext, useState, useEffect } from 'react';
import fetchWeather from '@/api/openWeather';
import { useMaxCards } from '@/hooks/useMaxCards';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [cardsArr, setCardsArray] = useState([]);
  const [dailyForecast, setDailyForecast] = useState(false);
  const [weeklyForecast, setWeeklyForecast] = useState(false);
  const [choosenCard, setChoosenCard] = useState(null);

  const maxCards = useMaxCards();

  const handleAddingNewCard = (card) => {
    setCardsArray(prev => {
      if (prev.some(c => c.name.toLowerCase() === card.name.toLowerCase())) {
        return prev; 
      }
      const newCards = prev.length >= maxCards ? prev.slice(0, maxCards - 1) : prev;
      return [card, ...newCards];
    });
  };

  const deleteLastCard = () => {
    setCardsArray((prev) => prev.slice(0, -1));
  };

  const getCard = (id) => cardsArr.find((card) => card.dt === id);

  const toggleDailyForecast = () => setDailyForecast(prev => !prev);
  const toggleWeeklyForecast = () => setWeeklyForecast(prev => !prev);

  const handleChooseCard = (id) => setChoosenCard(getCard(id));

  useEffect(() => {
    const loadCities = async () => {
      try {
        let cities = ["Kyiv"];
        if (maxCards >= 2) cities.push("Lviv");
        if (maxCards >= 3) cities.push("Berlin");
        const data = await Promise.all(cities.map(city => fetchWeather(city)));
        setCardsArray(data);
      } catch (err) {
        console.error('Failed to fetch initial city weather:', err);
      }
    };
    loadCities();
  }, [maxCards]);

  const deleteCardByName = (name) => {
    setCardsArray(prev => prev.filter(card => card.name !== name));
  };

  return (
    <WeatherContext.Provider
      value={{
        cardsArr,
        handleAddingNewCard,
        deleteCardByName,
        deleteLastCard,

        dailyForecast,
        toggleDailyForecast,

        weeklyForecast,
        toggleWeeklyForecast,

        choosenCard,
        handleChooseCard,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};