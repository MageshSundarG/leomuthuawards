import React, { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from 'components/Container';
import { Kalam, Process, Leomuthu } from './components';

const Agency = (): JSX.Element => {
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });

  const scrollTo = (id: string): void => {
    setTimeout(() => {
      const element: HTMLElement = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }

      window.scrollTo({ left: 0, top: element.offsetTop, behavior: 'smooth' });
    });
  };

  const theme = useTheme();

  const styles = (bgImage: string) =>
    ({
      position: 'absolute',
      objectFit: 'cover',
      /* support for plugin https://github.com/bfred-it/object-fit-images */
      fontFamily: 'object-fit: cover;',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundImage: `url(${bgImage})`,
      filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'brightness(0.3)',
    } as const);

  return (
    <Box>
      {/* <Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        id="agency__portfolio-item--js-scroll"
      >
        <Box
          className={'jarallax-img'}
          sx={styles(
            'https://raw.githubusercontent.com/MageshSundarG/sairamschoolawards/main/assets/images/guiding%20staf%20page.jpg',
          )}
        />
        <Container>
          <Leomuthu />
        </Container>
      </Box> */}
      <Box
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        bgcolor={'alternate.main'}
      >
        <Container paddingY={5}>
          <Process />
        </Container>
      </Box>
      <Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        id="agency__portfolio-item--js-scroll"
      >
        <Box
          className={'jarallax-img'}
          sx={styles(
            'https://raw.githubusercontent.com/MageshSundarG/sairamschoolawards/main/assets/images/kalam_parallax.jpg',
          )}
        />
        <Container paddingY={0}>
          <Kalam />
        </Container>
      </Box>
    </Box>
  );
};

export default Agency;
