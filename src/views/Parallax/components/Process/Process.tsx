/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SimpleStriped from 'views/SimpleStriped/SimpleStriped';
import Container from 'components/Container';
import { FormatAlignJustify } from '@mui/icons-material';

const mock = [
  {
    title: 300,
    subtitle:
      '300 + component compositions, which will help you to build any page easily.',
    suffix: '+',
  },
  {
    title: 45,
    subtitle:
      '45 + landing and supported pages to Build a professional website.',
    suffix: '+',
  },
  {
    title: 99,
    subtitle: '99% of our customers rated 5-star our themes over 5 years.',
    suffix: '%',
  },
];

const Process = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  const LeftSide = () => (
    <Box>
      <Box marginBottom={2}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 700,
          }}
          color={'primary'}
        >
          ABOUT THE EVENT
        </Typography>
      </Box>
      <Box marginBottom={2}>
        <Typography
          component={'span'}
          variant="h5"
          sx={{ fontWeight: 700 }}
          color={theme.palette.secondary.dark}
          align = {'justify'}
        >
          Celebrating 70th Birth Anniversary of Our Founder Chairman Shri M.J.F.Ln Leo
          Muthu on April 9th 2022
        </Typography>
      </Box>
      <Typography variant="subtitle2" component="p" color="text.secondary">
        A great visionary by birth and philanthropist of par excellence, our
        revered Founder Chairman, MJF. Ln. Leo Muthu ventured into the realm of
        providing quality education affordable to all.
        <br />
        The phenomenal growth has been marked by his tireless and extraordinary
        efforts taken with the sole aim of providing quality education to the
        middle class and lower-middle-class society. In order to remember our
        Founder Chairman’s excellent contributions made in the Educational Field
        and service to the society.
      </Typography>
    </Box>
  );
  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6} data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
            <LeftSide />
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Box height={1} width={1} component={Card} boxShadow={4}>
            <Box
              component={'iframe'}
              title="video"
              height={1}
              width={1}
              minHeight={300}
              src="https://www.youtube.com/embed/8zVf6zsrZGw"
              frameBorder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              boxShadow={4}
              borderRadius={2}
            />
          </Box>
        </Grid>
      </Grid>
      <Container paddingY={3}>
        <SimpleStriped />
      </Container>
    </Box>
  );
};

export default Process;
