import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AddGamePage from './pages/AddGamePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Navbar />

{/* Container*/}
        <main className="max-w-6xl mx-auto p-6">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<HomePage />} />
            
{/* Add Game Page*/}
            <Route path="/add" element={<AddGamePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;