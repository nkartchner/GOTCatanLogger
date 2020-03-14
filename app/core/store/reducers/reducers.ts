import { Player } from "../../constants/types";
import AsyncStorageFactory from "@react-native-community/async-storage";
import LegacyStorage from "@react-native-community/async-storage-backend-legacy";

const legacyStorage = new LegacyStorage();

const storage = AsyncStorageFactory.create<Player>(legacyStorage, {});

async function saveItem(player: Player) {
  await storage.set("id", JSON.stringify(player));
}

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
