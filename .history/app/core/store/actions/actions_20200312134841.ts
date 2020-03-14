import { Player } from "../constants/types";
import { SUBMIT_PLAYERS, GameActionTypes } from "./reducers";

export const submitPlayers = (players: Player[]): GameActionTypes => ({
  type: SUBMIT_PLAYERS,
  payload: players
});

