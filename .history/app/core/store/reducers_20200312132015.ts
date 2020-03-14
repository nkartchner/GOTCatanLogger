import { Player } from "../constants/types";

export interface State {
  isPlaying: boolean;
  players: Player[];
}

const initialState: State = {
  isPlaying: false,
  players: []
};
