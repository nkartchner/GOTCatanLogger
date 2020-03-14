import { Player } from "../constants/types";
import { SUBMIT_PLAYERS } from "./store";

export const submitPlayers = (players: Player[]) => ({
  type: SUBMIT_PLAYERS,
  payload: {
    players
  }
});