import { Box, Grid } from '@mui/material';
import React from 'react';

const PointMissButton = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid
        item
        xs={6}
        sx={{
          textAlign: 'center',
          borderRight: 1,
        }}
      >
        <Grid container justifyContent="center" alignItems="center">
          <Box sx={{ p: 0.8, m: 0.5, borderRadius: '16px', backgroundColor: '#fcbcdb', width: '70%', minWidth: 70 }}>
            ポイント
          </Box>
        </Grid>
      </Grid>
      <Grid
        item
        xs={6}
        sx={{
          textAlign: 'center',
        }}
      >
        <Grid container justifyContent="center" alignItems="center">
          <Box
            sx={{
              p: 0.8,
              m: 0.5,
              borderRadius: '16px',
              backgroundColor: '#bce9fc',
              width: '70%',
              minWidth: 70,
            }}
          >
            ミス
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PointMissButton;
