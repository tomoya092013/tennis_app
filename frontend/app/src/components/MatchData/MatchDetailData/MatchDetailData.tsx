import { Box, Grid } from '@mui/material';
import React from 'react';
import PointCount from './PointCount/PointCount';
import PointOrMissArea from '../../GameScore/PointOrMissArea/PointOrMissAre';

type Props = {
  gameOrder: number;
};

const MatchDetailData = ({ gameOrder }: Props) => {
  return (
    <Grid container justifyContent="center" sx={{}}>
      <Grid item xs={5.5} sx={{ border: 1, borderTop: 0 }}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid
            item
            xs={6}
            sx={{
              textAlign: 'center',
            }}
          >
            <Box sx={{ backgroundColor: '#fff6fb', width: '100%' }}>
              <PointOrMissArea playerNo="player1" pointOrMiss="point" gameOrder={gameOrder} />
            </Box>
          </Grid>

          <Grid
            item
            xs={6}
            sx={{
              textAlign: 'center',
            }}
          >
            <Box sx={{ backgroundColor: '#f5fcff', width: '100%' }}>
              <PointOrMissArea playerNo="player1" pointOrMiss="miss" gameOrder={gameOrder} />
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={1}>
        <Grid container alignItems="center" justifyContent="center">
          <PointCount />
        </Grid>
      </Grid>

      <Grid item xs={5.5} sx={{ border: 1, borderTop: 0 }}>
        <Grid container justifyContent="center">
          <Grid
            item
            xs={6}
            sx={{
              textAlign: 'center',
            }}
          >
            <Box sx={{ backgroundColor: '#fff6fb', width: '100%' }}>
              <PointOrMissArea playerNo="player2" pointOrMiss="point" gameOrder={gameOrder} />
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              textAlign: 'center',
            }}
          >
            <Box sx={{ backgroundColor: '#f5fcff', width: '100%' }}>
              <PointOrMissArea playerNo="player2" pointOrMiss="miss" gameOrder={gameOrder} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MatchDetailData;
