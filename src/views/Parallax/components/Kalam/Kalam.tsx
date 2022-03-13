/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Kalam = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant="h6"
        align={'center'}
        gutterBottom
        sx={{
          fontWeight: 900,
          color: theme.palette.common.white,
          textTransform: 'uppercase',
        }}
      >
        A. P. J. Abdul Kalam
      </Typography>
      {/* <Typography
        variant="h6"
        component="p"
        color="text.primary"
        align={'center'}
        sx={{
          color: theme.palette.common.white,
        }}
      >
        Electric toothbrush, designed for you
      </Typography> */}
    </Box>
  );
};

export default Kalam;
