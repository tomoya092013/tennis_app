import { useEffect, useState } from 'react';

import { Player } from '../type';

export const useGetPlayerList = () => {
  const [playerList, setPlayerList] = useState<Player[]>([]);
  const fetchPlayerList = async () => {
    const result = await fetch('http://localhost:5001/player');
    const json: Player[] = await result.json();
    setPlayerList(json);
  };
  useEffect(() => {
    fetchPlayerList();
  }, []);

  return { playerList, setPlayerList };
};
