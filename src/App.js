import './App.css';
import TimerChallenge from './TimerChallenge';

function App() {
  return (
    <div className="App">
      <TimerChallenge title="Easy" targetTime={1} />
      <TimerChallenge title="Not Easy" targetTime={5} />
    </div>
  );
}

export default App;
