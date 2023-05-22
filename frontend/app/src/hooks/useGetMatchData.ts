import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { singlesDetailDataState } from '../store';
import { PointOrMissDetail, SinglesDetailData } from '../type';

export const useGetMatchData = () => {
  const { matchId } = useParams();
  // const [matchData, setMatchData] = useState('');
  const [singlesAllOneGameScore, setSinglesAllOneGameScore] = useRecoilState(singlesDetailDataState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMatchData();
  }, []);

  const fetchMatchData = async () => {
    const result = await fetch(`http://localhost:5001/match/${matchId}`);
    const json = await result.json();

    //ここでSinglesDetailData[]変換
    const convertJson = convertSinglesDetailDataList(json);

    setSinglesAllOneGameScore(convertJson);
    setIsLoading(false);
  };
  return {
    singlesAllOneGameScore,
    isLoading,
  };
};

const convertSinglesDetailDataList = (jsonData: any[]): SinglesDetailData[] => {
  return jsonData.map((data) => {
    return {
      player1: {
        point: data.player1.point.map((point: any) => convertPointOrMissDetail(point)),
        miss: data.player1.miss.map((miss: any) => convertPointOrMissDetail(miss)),
      },
      player2: {
        point: data.player2.point.map((point: any) => convertPointOrMissDetail(point)),
        miss: data.player2.miss.map((miss: any) => convertPointOrMissDetail(miss)),
      },
    };
  });
};

/** バックエンドから取得したデータのキーをフロントエンドで使用している形式に変換する */
const convertPointOrMissDetail = (jsonPointMiss: any): PointOrMissDetail => {
  return {
    gameNo: null,
    order: jsonPointMiss.pointmiss_order,
    serve: jsonPointMiss.serve,
    shotType: jsonPointMiss.shot_type,
    foreOrBack: jsonPointMiss.fore_back,
    course: jsonPointMiss.course,
    poachVolleyCourse: jsonPointMiss.poach_volley_course,
    missResult: jsonPointMiss.miss_result,
    rallyCount: jsonPointMiss.rally_count,
  };
};

// export type SinglesDetailData = {
//   player1: {
//     point: PointOrMissDetail[];
//     miss: PointOrMissDetail[];
//   };
//   player2: {
//     point: PointOrMissDetail[];
//     miss: PointOrMissDetail[];
//   };
// };
