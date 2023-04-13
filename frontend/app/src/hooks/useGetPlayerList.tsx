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
    // 即時実行関数でasyncを使う場合
    // (async () => {
    //   const result = await fetch('http://localhost:5001/player');
    //   const json: Player[] = await result.json();
    //   setPlayerList(json);
    //   console.log(json);
    // })();

    // fetchを使う場合
    // fetch('http://localhost:5001/player')
    //   .then((res) => res.json())
    //   .then((player) => setPlaerList(player))
    //   .catch(() => alert('error'));
  }, []);

  return { playerList };
};
