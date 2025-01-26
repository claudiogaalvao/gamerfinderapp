import api from "../api";

export interface Game {
  id: number;
  name: string;
  bannerUrl: string;
  subscribed: boolean;
  subscriptions: number;
  minSubscriptions: number;
  locked: boolean;
  rooms: number;
  displayOrder: number;
}

const playerId = 1;

const getGames = async (): Promise<Game[]> => {
  try {
    return await api<Game[]>(`games?playerId=${playerId}`);
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching games");
  }
};

const subscribeToGame = async (gameId: number): Promise<void> => {
  try {
    const endpoint = `games/subscribe?gameId=${gameId}&playerId=${playerId}`;
    await api<void>(endpoint, "POST");
  } catch (error) {
    console.error("Error subscribing to the game", error);
    throw new Error("Failed to subscribe to the game");
  }
};

// Método para cancelar a inscrição de um jogo
const unsubscribeFromGame = async (gameId: number): Promise<void> => {
  try {
    const endpoint = `games/unsubscribe?gameId=${gameId}&playerId=${playerId}`;
    await api<void>(endpoint, "DELETE");
  } catch (error) {
    console.error("Error unsubscribing from the game", error);
    throw new Error("Failed to unsubscribe from the game");
  }
};

export default {
  getGames,
  subscribeToGame,
  unsubscribeFromGame,
};
