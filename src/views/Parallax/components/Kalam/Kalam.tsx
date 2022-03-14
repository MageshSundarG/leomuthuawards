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
          fontWeight: 600,
          color: '#377dff'
        }}
      >
        Remembering Avul Pakir Jainulabdeen, popularly known as
      </Typography>
      <Typography
        variant="h4"
        color={theme.palette.secondary.dark}
        align={'center'}
        sx={{
          fontWeight: 700,
          textTransform: 'uppercase',
          color: theme.palette.secondary.dark
        }}
      >
        Dr A.P.J Abdul Kalam
      </Typography>
      <br></br>
      <Typography
        variant="h3"
        color={theme.palette.secondary.dark}
        align={'center'}
        sx={{
          fontWeight: 500,
          fontStyle: 'italic',
          /*color: theme.palette.secondary.dark*/
          color: 'white'
        }}
      >
        "Education is the most powerful Weapon,<br />which you can use to change the world ."
      </Typography>
    </Box>
  );
};

export default Kalam;
