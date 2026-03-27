import { useState, useEffect } from 'react';
import { getAllGames, deleteGame } from '../services/gamesService';
import GameCard from '../components/GameCard';

const HomePage = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch games
  useEffect(() => {
    loadGames();
  }, []);

  const loadGames = async () => {
    try {
      const data = await getAllGames();
      setGames(data);
    } catch (error) {
      console.error("Error loading games:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this game?")) {
      try {
        await deleteGame(id);
        //filter deleted games out
        setGames(games.filter(game => game.id !== id));
      } catch (error) {
        alert("Failed to delete the game.");
      }
    }
  };

  if (loading) return <div className="text-center mt-10 text-slate-500">Loading your collection...</div>;

  return (
    <div className="py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">My Games</h1>
        <p className="text-slate-600">You have {games.length} games in your tracker.</p>
      </header>

      {games.length === 0 ? (
        <div className="bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg p-10 text-center">
          <p className="text-slate-500">No games found. Start by adding one!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map(game => (
            <GameCard key={game.id} game={game} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;