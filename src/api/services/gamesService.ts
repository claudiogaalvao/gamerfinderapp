// /src/api/services/userService.ts
import api from "../api";

// Define os tipos dos dados de usuários
export interface Game {
  id: number;
  name: string;
  bannerUrl: string;
  subscriptions: number;
  minSubscriptions: number;
  locked: boolean;
  rooms: number;
  displayOrder: number;
}

const getGames = async (): Promise<Game[]> => {
  try {
    return await api<Game[]>("games");
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao buscar usuários");
  }
};

// const createUser = async (userData: User): Promise<User> => {
//   try {
//     return await api<User>('users', 'POST', userData); // Passando o tipo de resposta como User
//   } catch (error) {
//     throw new Error('Erro ao criar usuário');
//   }
// };

export default {
  getGames,
};
