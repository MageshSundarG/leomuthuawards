import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

const ContactCard = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Box
      component={Card}
      boxShadow={0}
      border={`1px solid ${theme.palette.divider}`}
    >
      <Box padding={{ xs: 2, sm: 3 }}>
        <Typography
          sx={{
            fontWeight: '700',
          }}
          gutterBottom
        >
          How can you contact us about this event?
        </Typography>
        <Typography
          variant={'body2'}
          color={'text.secondary'}
          sx={{
            marginBottom: 2,
          }}
        >
          If you have any questions or concerns about the terms & condtions please
          contact us.
        </Typography>
        <Typography variant={'subtitle2'}>
          <div><a href="mailto:kalam_leomuthuawards@sairam.edu.in">kalam_leomuthuawards<br />@sairam.edu.in</a></div>
          <br />
          <div><strong>Mrs. T. Mangayarkarasi</strong> <br /><a href="tel:+918754502226">87545 02226</a></div>
          <br />
          <div><strong>Dr. V. Brindha Devi</strong> <br /><a href="tel:+918754582225">87545 82225</a></div>
          <br />
          <div><strong>Dr. G. Prakash</strong> <br /><a href="tel:+918754582221">87545 82221</a></div>
          <br />
          <div><strong>Dr. K. Renganathan</strong> <br /><a href="tel:+918754502228">87545 02228</a></div>
          <br />
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactCard;
