import './App.css';
import { Header } from './components/header';
import { WeatherSummary } from './components/weather-summary';

function App() {
  return (
    <>
      <Header />
      <main className='my-0 mx-auto'>
        <WeatherSummary />
        <h2>Next 7 days weather</h2>
        <ul className="grid grid-flow-col">
          <li>Day 1</li>
          <li>Day 2</li>
          <li>Day 3</li>
          <li>Day 4</li>
          <li>Day 5</li>
          <li>Day 6</li>
          <li>Day 7</li>
        </ul>
      </main>
    </>
  );
}

export default App;
