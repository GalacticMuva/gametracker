const API_URL = import.meta.env.VITE_SUPABASE_URL;
const API_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Headers 
const headers = {
  "Content-Type": "application/json",
  "apikey": API_KEY,
  "Authorization": `Bearer ${API_KEY}`,
  "Prefer": "return=representation" 
};

// 1. GET all games
export const getAllGames = async () => {
  const response = await fetch(`${API_URL}/rest/v1/games?select=*`, {
    method: "GET",
    headers: headers,
  });
  if (!response.ok) throw new Error("Could not fetch games");
  return await response.json();
};

// 2. Add new game
export const addGame = async (gameData) => {
  const response = await fetch(`${API_URL}/rest/v1/games`, {
    method: "POST",
    headers: headers, 
    body: JSON.stringify(gameData),
  });
  if (!response.ok) throw new Error("Could not add game");
  return await response.json(); 
};

// 3. DELETE a game 
export const deleteGame = async (id) => {
  const response = await fetch(`${API_URL}/rest/v1/games?id=eq.${id}`, {
    method: "DELETE",
    headers: headers,
  });
  if (!response.ok) throw new Error("Could not delete game");
  return true;
};