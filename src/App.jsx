import { useState } from 'react';
import Gallery from './components/Gallery';
import './styles/styles.css';

function App() {
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  return (
    <div className="App">
      <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
    </div>
  );
}

export default App;