import React from 'react';

import { useGetPlayerList } from '../../../hooks/useGetPlayerList';

const PlayerList = () => {
  const { playerList } = useGetPlayerList();
  return (
    <div>
      {playerList.map((player, id) => (
        <p key={id}>{player.name}</p>
      ))}
    </div>
  );
};

export default PlayerList;
