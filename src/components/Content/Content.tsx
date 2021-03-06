import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const mock = [
  {
    title: (
      <div>
        <b>1.</b> <strong>Kalam Best Principal Award</strong> - minimum 10 years
        of experience
      </div>
    ),
  },
  {
    title: (
      <div>
        <div>
          <b>2.</b> <strong>Best Teacher Award</strong> - minimum 5 years of
          experience for TGT and 3 years experience for PGT
        </div>
        <Typography component={'p'} color={'text.secondary'}>
          <div>
            &emsp;(Note - Higher Secondary and High school teachers handling 9th
            std. to 12th std. shall only apply)
          </div>
        </Typography>
      </div>
    ),
  },
  {
    title: (
      <div>
        <b>3.</b> <strong>Teachers&apos; Nomination</strong> - One school can
        nominate only one teacher in each category.
      </div>
    ),
  },
  {
    title: (
      <div>
        <b>4.</b> <strong>Leo Muthu Best School</strong> - Perception, social
        media reviews will also be taken into account.
      </div>
    ),
  },
  {
    title: (
      <div>
        <b>5.</b> Documents proof and photo proof wherever required must be
        uploaded.
      </div>
    ),
  },
  {
    title: (
      <div>
        <b>6.</b> Teachers must attach the bonafide certificate along with the
        nominations.
      </div>
    ),
  },
  {
    title: (
      <div>
        <div>
          <b>7.</b> Preferably 3 hardcopies of nominations with all proof must
          be sent to the below address by <strong>25.03.2022.</strong>
        </div>
        <Typography component={'p'} color={'text.secondary'}>
          <div>
            &emsp;(Note - Data and details submitted as softcopy will be
            considered in case of delay in receiving the hard copy)
          </div>
        </Typography>
      </div>
    ),
  },
  {
    title: (
      <div>
        <b>8.</b> Award winning schools and teachers shall bring minimum 10 high
        school and higher secondary school students to witness the technology
        project display.
      </div>
    ),
  },
  {
    title: (
      <div>
        <b>9.</b> Incomplete nominations will not be considered.
      </div>
    ),
  },
  {
    title: (
      <div>
        <b>10.</b> Jury&apos;s decision for the award is final.
      </div>
    ),
  },
  {
    title: (
      <div>
        <b>11.</b> For any queries you can reach the Organizers through mail and
        phone call.
      </div>
    ),
  },
  {
    title: (
      <iframe
        src="https://onedrive.live.com/embed?cid=145F64F804D3A323&resid=145F64F804D3A323%21411&authkey=AE0HBtLYqgVNpW0&em=2"
        width="100%"
        height="1200"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    ),
  },
];

const PrivacySection = ({ title }: { title: JSX.Element }) => {
  return (
    <Box>
      <Typography
        variant={'subtitle1'}
        gutterBottom
        sx={{
          fontWeight: 'medium',
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

const Content = (): JSX.Element => {
  return (
    <Box>
      {mock.map((item, i) => (
        <Box key={i} marginBottom={i < mock.length - 1 ? 3 : 0}>
          <PrivacySection {...item} />
        </Box>
      ))}
    </Box>
  );
};

export default Content;
