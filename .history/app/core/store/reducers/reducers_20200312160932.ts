import AsyncStorage from "@react-native-community/async-storage";

const USER_1 = {
  name: "Tom",
  age: 20,
  traits: {
    hair: "black",
    eyes: "blue"
  }
};

const USER_2 = {
  name: "Sarah",
  age: 21,
  hobby: "cars",
  traits: {
    eyes: "green"
  }
};

export const mergeUsers = async () => {
  try {
    //save first user
    await AsyncStorage.setItem("@GOTLogger", JSON.stringify(USER_1));

    // merge USER_2 into saved USER_1
    await AsyncStorage.mergeItem("@GOTLogger", JSON.stringify(USER_2));

    // read merged item
    const currentUser = await AsyncStorage.getItem("@GOTLogger");

    console.log(currentUser);

    // console.log result:
    // {
    //   name: 'Sarah',
    //   age: 21,
    //   traits: {
    //     eyes: 'green',
    //     hair: 'black'
    //   }
    // }
  } catch (err) {
    console.log(err);
  }
};

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
