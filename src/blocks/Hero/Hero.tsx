import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';

const Hero = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Box
      minHeight={{ xs: 400, sm: 500, md: 600 }}
      height={'auto'}
      position={'relative'}
      sx={{
        backgroundColor: theme.palette.alternate.main,
        background:
          'url(https://raw.githubusercontent.com/MageshSundarG/sairamschoolawards/main/assets/images/Hero%20Banner%20Final.jpg) no-repeat center',
        backgroundSize: 'cover',
        marginTop: -13,
        paddingTop: 13,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          zIndex: 1,
        }}
      />

      <Container position={'relative'} zIndex={2}>
        <Box>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 900,
              color: 'common.white',
              textTransform: 'uppercase',
            }}
          >
            About us
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.primary"
            sx={{
              color: 'common.white',
            }}
          >
            We are founded by a leading academic and researcher in the field of
            Industrial Systems Engineering.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
