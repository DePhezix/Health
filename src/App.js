import { Routes, Route } from 'react-router';
import './App.css';
import HomePage from './pages/HomePage';
import SubscriptionPage from './pages/SubscriptionPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} /> 
        <Route path='/subscription' element={<SubscriptionPage />} />
      </Routes>
    </div>
  );
}

export default App;

