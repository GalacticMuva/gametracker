import { useState } from 'react';

const GameForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  // Array Names
  const [genres, setGenres] = useState([]); 
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  // Array logic
  const toggleGenre = (selectedGenre) => {
    if (genres.includes(selectedGenre)) {
      setGenres(genres.filter((g) => g !== selectedGenre));
    } else {
      setGenres([...genres, selectedGenre]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!title || genres.length === 0 || rating === 0) {
      alert("Please fill out all fields, select at least one genre, and a rating!");
      return;
    }
    
    const genreString = genres.join(', ');

  onSubmit({ 
    title, 
    genre: genreString, 
    rating 
  });

  // Reset
  setTitle('');
  setGenres([]);
  setRating(0);
};

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto border border-slate-200">
      <h2 className="text-2xl font-bold mb-4 text-slate-800">Add New Game</h2>

{/* Title Input */}
      <div className="mb-4">
        <label className="block text-slate-700 font-semibold mb-2">Game Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-indigo-400 outline-none"
          placeholder="e.g. Elden Ring"
        />
      </div>

{/* Multi-select Genres*/}
      <div className="mb-4">
        <label className="block text-slate-700 font-semibold mb-2">Genres (Select all that apply)</label>
        <div className="flex flex-wrap gap-2">
          {["Action", "RPG", "Shooter", "Sports", "Indie", "Strategy", "Horror", "Adventure", "Endless Run", "Puzzle", "Other"].map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => toggleGenre(g)}
              className={`px-3 py-1 rounded-full border text-sm font-medium transition-all ${
                genres.includes(g)
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                  : "bg-white text-slate-600 border-slate-300 hover:border-indigo-400"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

{/* Star Rating */}
      <div className="mb-6">
        <label className="block text-slate-700 font-semibold mb-2">Rating</label>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className={`text-3xl transition-colors ${
                star <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'
              }`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 transition-colors shadow-md"
      >
        Save Game
      </button>
    </form>
  );
};

export default GameForm;