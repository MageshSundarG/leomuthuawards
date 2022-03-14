import React from 'react';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { colors, Container } from '@mui/material';

const mock = [
  {
    media:
      'https://raw.githubusercontent.com/MageshSundarG/sairamschoolawards/main/assets/images/leo_muthu_emblem.png',
    title: 'Leo Muthu Best School Award 2022 ',
  },
  {
    media: 'https://raw.githubusercontent.com/MageshSundarG/sairamschoolawards/main/assets/images/kalam_emblem.png',
    title: 'Kalam Best School Principal Award 2022',
  },
  {
    media: 'https://raw.githubusercontent.com/MageshSundarG/sairamschoolawards/main/assets/images/ramanujam_emblem.png',
    title: 'Srinivasa Ramanujan Best Mathematician Teacher  Award 2022',
  },
  {
    media: 'https://raw.githubusercontent.com/MageshSundarG/sairamschoolawards/main/assets/images/cv_raman_emblem.png',
    title: 'Sri C.V.Raman Best Physics Teacher  Award 2022',
  },
  {
    media: 'https://raw.githubusercontent.com/MageshSundarG/sairamschoolawards/main/assets/images/pc_ray_emblem.png',
    title: 'P.C.Ray Best Chemistry Teacher Award 2022',
  },
  {
    media: 'https://raw.githubusercontent.com/MageshSundarG/sairamschoolawards/main/assets/images/charles_babbage_emblem.png',
    title: 'Charles Babbage Best Computer Science Teacher  Award 2022',
  },
  {
    media: 'https://raw.githubusercontent.com/MageshSundarG/sairamschoolawards/main/assets/images/shakespeare_emblem.png',
    title: 'Shakespeare Best English Teacher Award 2022',
  },
  {
    media: 'https://raw.githubusercontent.com/MageshSundarG/sairamschoolawards/main/assets/images/bharathidasan_emblem.png',
    title: 'Bharathidasan Best Tamil Teacher Award 2022',
  },
  {
    media: 'https://raw.githubusercontent.com/MageshSundarG/sairamschoolawards/main/assets/images/charles_darwin_emblem.png',
    title: 'Charles Darwin Best Zoology Teacher  Award 2022',
  },
  {
    media: 'https://raw.githubusercontent.com/MageshSundarG/sairamschoolawards/main/assets/images/mendel_emblem.png',
    title: 'Mendel Best Botany Teacher Merit  2022',
  },
];

const Spaces = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const sliderOpts = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: isMd ? 3 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Container>
      <Box>
        <Box marginBottom={4} marginTop={4}>
          <Typography
            sx={{
              textTransform: 'uppercase',
              fontWeight: 'medium',
            }}
            gutterBottom
            color={'secondary'}
            align={'center'}
          >
            Popular Awards
          </Typography>
          <Typography
            variant="h4"
            align={'center'}
            data-aos={'fade-up'}
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Browse our Popular Awards
          </Typography>
          <Box sx={{ width: '100%', justifyContent: 'center' }}>
            <Typography
              variant="h6"
              align={'center'}
              color={'text.secondary'}
              data-aos={'fade-up'}
            >
              These award will enable long term relationships with schools. The
              recipients of the award in the name of our Founder Chairman will
              be a great honor for the teaching Fraternity.
            </Typography>
          </Box>
        </Box>
        <Box maxWidth={{ xs: 420, sm: 620, md: 1 }} margin={'40px auto'}>
          <Slider {...sliderOpts}>
            {mock.map((item, i) => (
              <Box key={i} padding={{ xs: 1, md: 2, lg: 3 }}>
                <Box
                  display={'block'}
                  width={1}
                  height={1}
                  sx={{
                    textDecoration: 'none',
                    transition: 'all .2s ease-in-out',
                    '&:hover': {
                      transform: `translateY(-${theme.spacing(1 / 2)})`,
                    },
                  }}
                >
                  <Box
                    component={Card}
                    width={1}
                    height={1}
                    display={'flex'}
                    flexDirection={'column'}
                    sx={{ backgroundImage: 'none' }}
                  >
                    <CardMedia
                      title={item.title}
                      image={item.media}
                      sx={{
                        position: 'relative',
                        height: { xs: 240, sm: 340, md: 280 },
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        component={'svg'}
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 1921 273"
                        sx={{
                          position: 'absolute',
                          width: '100%',
                          left: 0,
                          bottom: 0,
                          right: 0,
                          zIndex: 1,
                        }}
                      >
                        <polygon
                          fill={theme.palette.background.paper}
                          points="0,273 1921,273 1921,0 "
                        />
                      </Box>
                    </CardMedia>
                    <CardContent>
                      <Typography
                        variant={'h6'}
                        gutterBottom
                        align={'left'}
                        sx={{ fontWeight: 700 }}
                      >
                        {item.title}
                      </Typography>
                    </CardContent>
                    <Box flexGrow={1} />
                    <CardActions sx={{ justifyContent: 'flex-end' }}>
                      <Button>Learn more</Button>
                    </CardActions>
                  </Box>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Container>
  );
};

export default Spaces;
