import AsyncStorage from "@react-native-community/async-storage";
import { Player } from "../../constants/types";

export const setUsers = async (players: Player[]) => {
  const newPlayers = players.map((p, i) => [`@p-${i + 1}`, JSON.stringify(p)]);

  try {
    await AsyncStorage.multiSet(newPlayers);
  } catch (e) {
    //save error
    console.log(e);
  }

  console.log("Done.");
};

export const SUBMIT_PLAYERS = "SUBMIT_PLAYERS";
export const DO_SOMETHING = "DO_SOMETHING";

interface SubmitPlayersAction {
  type: typeof SUBMIT_PLAYERS;
  payload: Player[];
}

interface DoSomething {
  type: typeof DO_SOMETHING;
  payload: any;
}

export interface State {
  players: Player[];
  isPlaying: boolean;
}

const initialState: State = {
  players: [],
  isPlaying: false
};

const gameReducer = (
  state = initialState,
  { type, payload }: GameActionTypes
): State => {
  switch (type) {
    case SUBMIT_PLAYERS:
      return { players: [...payload], isPlaying: true };

    default:
      return state;
  }
};
export default gameReducer;
export type GameActionTypes = SubmitPlayersAction | DoSomething;
