import { PointOrMissDetail } from './type';

export const usePointOrMissStringBuilder = () => {
  const pointOrMissStringBuilder = (pointOrMiss: PointOrMissDetail): string => {
    let result = '';
    if (pointOrMiss.foreOrBack) result += pointOrMiss.foreOrBack;
    if (pointOrMiss.shotType) result += pointOrMiss.shotType;
    if (pointOrMiss.course) result += pointOrMiss.course;
    if (pointOrMiss.poachVolleyCourse) result += pointOrMiss.poachVolleyCourse;
    if (pointOrMiss.missResult) result += pointOrMiss.missResult;
    if (pointOrMiss.rallyCount && pointOrMiss.rallyCount > 2) result += `(${pointOrMiss.rallyCount})`;
    return result;
  };
  return { pointOrMissStringBuilder };
};
