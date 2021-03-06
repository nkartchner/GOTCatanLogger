import AsyncStorage from '@react-native-community/async-storage';
// storeData = async () => {
//   try {
//     await AsyncStorage.setItem('@storage_Key', 'stored value')
//   } catch (e) {
//     // saving error
//   }
// }
import { Player } from "../../constants/types";

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
