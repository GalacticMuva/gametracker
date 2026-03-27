const GameCard = ({ game, onDelete }) => {

  const renderStars = (rating) => {
    return "⭐".repeat(rating);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow">
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-slate-800">{game.title}</h3>
            <div className="flex flex-wrap gap-1 mt-2">
              {game.genre.split(', ').map((g, index) => (
                <span
                  key={index}
                  className="bg-indigo-100 text-indigo-700 text-[10px] px-2 py-0.5 rounded-full uppercase font-bold tracking-wider"
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
          <div className="text-lg">{renderStars(game.rating)}</div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={() => onDelete(game.id)}
            className="text-sm font-medium text-red-500 hover:text-red-700 transition-colors flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;