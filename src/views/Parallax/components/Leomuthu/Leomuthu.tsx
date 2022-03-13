/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Leomuthu = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant="h4"
        align={'center'}
        gutterBottom
        sx={{
          fontWeight: 900,
          color: theme.palette.primary.dark,
          textTransform: 'uppercase',
        }}
      >
        Celebrating the <span>70th Birth Anniversary</span> 70th Birth
        Anniversary of our beloved Founder-Chairman Kalvi Vallal{' '}
        <span>Shri. LeoMuthu</span>
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.primary"
        align={'center'}
        sx={{
          color: theme.palette.common.white,
        }}
      >
        and remembering his outstanding contributions in the field of education.
      </Typography>
    </Box>
  );
};

export default Leomuthu;
