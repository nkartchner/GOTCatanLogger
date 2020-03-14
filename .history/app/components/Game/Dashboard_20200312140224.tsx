import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../core/store/reducers/reducers";

const Dashboard = () => {
  const players = useSelector((state: State) => state.players);
  console.log(players);
  return <div>{players && players.map(p => <h1>{p.name}</h1>)}</div>;
};

export default Dashboard;
