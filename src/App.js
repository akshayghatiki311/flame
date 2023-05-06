import './App.css';
import Header from './Header.js';
import SwipeButtons from './SwipeButtons.js'
import FlameCards from './FlameCards.js';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* FlameCard */}
      <FlameCards />
      {/* SwipeButtons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
