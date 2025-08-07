import { useEffect, useContext } from 'react';
import { WeatherContext } from './context/weatherContext';

function App() {
  const {
    cardsArr,
    handleAddingNewCard,
    deleteLastCard,
    addNewCard,
    dailyForecast,
    toggleDailyForecast,
    weeklyForecast,
    toggleWeeklyForecast,
    choosenCard,
    handleChooseCard,
  } = useContext(WeatherContext);

  useEffect(() => {
    console.log('cardsArr:', cardsArr);
    console.log('dailyForecast:', dailyForecast);
    console.log('weeklyForecast:', weeklyForecast);
  }, [cardsArr]);
  return (
    <div className="App">
      <button onClick={() => handleAddingNewCard({ card: 'card' })}>add</button>
      <button onClick={() => toggleDailyForecast()}>dailyForecast</button>
      <button onClick={() => toggleWeeklyForecast()}>weeklyForecast</button>
    </div>
  );
}

export default App;
