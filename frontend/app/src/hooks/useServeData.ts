import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { serveListSelector, serveListState, serveState } from '../store';
import { PlayerNo, Serve } from '../type';
import { useNavigate } from 'react-router-dom';
import { FIRST_SERVE } from './useModalPointDetail';

export const useServeData = (playerNo: PlayerNo | null) => {
  const navigate = useNavigate();
  const setServe = useSetRecoilState(serveState);
  const [isFirstServe, setIsFirstServe] = useRecoilState(serveListState(playerNo));
  const probability = useRecoilValue(serveListSelector(playerNo));

  const selectServe = (serve: Serve) => {
    setServe(serve);
    addSereveData(serve);
    navigate('/modal/serveResult');
  };

  const addSereveData = (serve: Serve) => {
    if (playerNo === null) return;
    const isFirst = serve === FIRST_SERVE ? true : false;
    setIsFirstServe([...isFirstServe, isFirst]);
  };

  return {
    selectServe,
    probability,
  };
};
