import './App.css';
import LocomotiveScroll from 'locomotive-scroll';
import Home from './pages/Home';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="App  font-[poppins]">
      <Home />
    </div>
  );
}

export default App;
