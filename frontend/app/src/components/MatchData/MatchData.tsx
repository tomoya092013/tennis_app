import React from 'react';
import { Box, Grid } from '@mui/material';
import { useGetMatchData } from '../../hooks/useGetMatchData';
import GameplayerName from './GamePlayerName/GameplayerName';
import PointMissButton from './PointMissButton/PointMissButton';
import GameCount from './GameCount/GameCount';
import MatchDetailData from './MatchDetailData/MatchDetailData';

const MatchData = () => {
  const { isLoading, singlesAllOneGameScore } = useGetMatchData();
  console.log(singlesAllOneGameScore);
  return (
    <Box>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={5.5} sx={{ border: 1 }}>
          <Grid container justifyContent="center" alignItems="center" direction="column">
            <GameplayerName />
            <PointMissButton />
          </Grid>
        </Grid>

        <Grid item xs={1}>
          <GameCount />
        </Grid>

        <Grid item xs={5.5} sx={{ border: 1 }}>
          <Grid container justifyContent="center" alignItems="center" direction="column">
            <GameplayerName />
            <PointMissButton />
          </Grid>
        </Grid>
      </Grid>
      {isLoading ? (
        <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '80vh' }}>
          <Box>データ取得中...</Box>
        </Grid>
      ) : (
        <>
          {singlesAllOneGameScore.map((_singlesOneGame, index) => (
            <Box sx={{}}>
              <MatchDetailData key={index} gameOrder={index} />
            </Box>
          ))}
        </>
      )}
    </Box>
  );
};

export default MatchData;
