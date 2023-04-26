import { useRecoilCallback } from 'recoil';
import {
  courseState,
  foreOrBackState,
  missResultState,
  poachVolleyCourseState,
  pointOrMissButtonState,
  pointOrMissPlayerState,
  pointOrMissState,
  rallyState,
  serveState,
  servicePlayerState,
  shotTypeState,
} from '../store';

export const useResetModalState = () => {
  const tagetStateList = [
    pointOrMissButtonState,
    pointOrMissPlayerState,
    servicePlayerState,
    serveState,
    rallyState,
    pointOrMissState,
    foreOrBackState,
    shotTypeState,
    courseState,
    poachVolleyCourseState,
    missResultState,
  ];
  const resetModalState = useRecoilCallback(({ reset }) => () => {
    tagetStateList.forEach((targetState) => {
      reset(targetState);
    });
  });

  return { resetModalState };
};
