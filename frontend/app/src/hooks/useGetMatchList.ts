import { useEffect, useState } from 'react';

type Match = {
  id: number;
  date: Date;
  title: string;
};

export const useGetMatchList = () => {
  const [matchList, setMatchList] = useState<Match[]>([]);
  const fetchMatchList = async () => {
    const result = await fetch('http://localhost:5001/match');
    const json: Match[] = await result.json();
    setMatchList(json);
  };
  useEffect(() => {
    fetchMatchList();
  }, []);
  return { matchList };
};
