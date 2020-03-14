import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const players = useSelector(state => state.players);
  return (
    <div>
      {players.map(p => (
        <h1>{p.name}</h1>
      ))}
    </div>
  );
};

export default Dashboard;
