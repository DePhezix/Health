import { Routes, Route } from 'react-router';
import './App.css';
import HomePage from './pages/HomePage';
import SubscriptionPage from './pages/SubscriptionPage';
import Premium from './pages/Premium/Premium';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} /> 
        <Route path='/subscription' element={<SubscriptionPage />} />
        <Route path='/premium/*' element={<Premium />} />
      </Routes>
    </div>
  );
}

export default App;

