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
          <div>kalam_leomuthuawards<br />@sairam.edu.in</div>
          <br />
          <div><strong>Mrs. T. Mangayarkarasi</strong> <br /> 87545 02226</div>
          <br />
          <div><strong>Dr. V. Brindha Devi</strong> <br />87545 82225</div>
          <br />
          <div><strong>Dr. G. Prakash</strong> <br />87545 82221</div>
          <br />
          <div><strong>Dr. K. Renganathan</strong> <br />87545 02228</div>
          <br />
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactCard;
