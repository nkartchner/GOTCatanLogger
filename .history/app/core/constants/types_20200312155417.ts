export type ResourceType = "Ore" | "Brick" | "Wheat" | "Sheep" | "Wood";
export type Roll = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface Hex {
  resource: ResourceType;
  rollValue: Roll;
}

export class Building {
  readonly vp: 1 | 2;
  adjacentHexs: [Hex?, Hex?, Hex?];
}
export type PlayerColor =
  | "yellow"
  | "black"
  | "blue"
  | "red"
  | "purple"
  | "green";
export interface Hero {}

export class Player {
  // each player has a turn phase
  // each player starts with 2 settlements
  // donnt let the game start without having the initial settlements
  // each settlement has 3 adjacent hexs
  name = "";
  inventory = {
    settlements: [],
    castles: [],
    guards: 0
  };
  vp: number = 0;
  constructor(public id: string) {}
}
