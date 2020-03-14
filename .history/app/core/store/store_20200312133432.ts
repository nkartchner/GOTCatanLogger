import { Player } from "../constants/types";

export const SUBMIT_PLAYERS = "SUBMIT_PLAYERS";

export interface State {
  players: Player[];
  isPlaying: boolean;
}

const initialState: State = {
  players: [],
  isPlaying: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SUBMIT_PLAYERS:
      return { ...state, ...payload };

    default:
      return state;
  }
};
