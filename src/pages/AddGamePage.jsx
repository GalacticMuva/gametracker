import { useNavigate } from 'react-router-dom';
import GameForm from '../components/GameForm';
import { addGame } from '../services/gamesService';

const AddGamePage = () => {
  const navigate = useNavigate();

  const handleCreateGame = async (gameData) => {
    try {
      //Add to Supabase
      await addGame(gameData);
      
      // Success! --> Home page
      navigate('/');
    } catch (error) {
      console.error("Error saving game:", error);
      alert("Failed to save the game. Check your connection.");
    }
  };

  return (
    <div className="py-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-slate-900">Add to Collection</h1>
        <p className="text-slate-600 mt-2">Enter the details of your new favorite game.</p>
      </header>

      <GameForm onSubmit={handleCreateGame} />
    </div>
  );
};

export default AddGamePage;