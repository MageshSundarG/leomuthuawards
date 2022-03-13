import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Hero from 'blocks/Hero/index';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Main from 'layouts/Main';
import AppBar from '@mui/material/AppBar';

import Container from 'components/Container';
import { Topbar, Footer } from './components';
import Parallax from 'views/Parallax';
import Categories from 'views/Categories';
import Courses from 'views/Courses';
import FeatureCardWithCtaButton from 'blocks/FeatureCardWithCtaButton';

const ChildMock = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box p={4}>
      <Box
        width={1}
        height={1}
        minHeight={800}
        borderRadius={2}
        border={`2px solid ${theme.palette.divider}`}
        sx={{
          borderStyle: 'dashed',
        }}
      />
    </Box>
  );
};

const WithToggledSidebar = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Main colorInvert={true}>
      <Hero />
      <Parallax />
      <FeatureCardWithCtaButton />
      <Courses />
    </Main>
  );
};

export default WithToggledSidebar;
