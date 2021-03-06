import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';

const Hero = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

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
      <Box paddingY={{ xs: 0, sm: '4rem', md: '0rem' }}>
        <Container>
          <Box maxWidth={{ xs: 1, sm: '50%' }}>
            <Box
              component={'img'}
              width="100px"
              height="auto"
              src="https://raw.githubusercontent.com/MageshSundarG/sairamschoolawards/main/assets/images/chairman_logo.png"
              alt="Image Description"
            ></Box>
            <Typography
              variant="h4"
              color={theme.palette.common.white}
              gutterBottom
              sx={{
                fontWeight: 700,
              }}
            >
              <Typography
                color={'primary'}
                component={'span'}
                variant={'inherit'}
                sx={{
                  background: `linear-gradient(180deg, transparent 82%, ${alpha(
                    theme.palette.secondary.main,
                    0.3,
                  )} 0%)`,
                }}
              >
                Kalam - Leo Muthu
              </Typography>
              <br />
              Education Awards 2022{' '}
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color={theme.palette.secondary.dark}
              sx={{ fontWeight: 400 }}
            >
              Recognizing and honouring the best schools & teachers of
              Tamilnadu.
            </Typography>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'flex-start' }}
              marginTop={4}
            >
              <Typography
                variant="h5"
                component="p"
                color={theme.palette.secondary.main}
                sx={{ fontWeight: 700 }}
              >
                Registration Free
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'flex-start' }}
              marginTop={4}
            >
              <Button
                component={'a'}
                variant="contained"
                color="primary"
                size="large"
                fullWidth={isMd ? false : true}
                href="/comingsoon"
                startIcon={<AppRegistrationRoundedIcon />}
              >
                Register Now
              </Button>
              <Box
                marginTop={{ xs: 2, sm: 0 }}
                marginLeft={{ sm: 2 }}
                width={{ xs: '100%', md: 'auto' }}
              >
                <Button
                  component={'a'}
                  href="/comingsoon"
                  variant="outlined"
                  color="secondary"
                  size="large"
                  fullWidth={isMd ? false : true}
                >
                  Nomination
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
