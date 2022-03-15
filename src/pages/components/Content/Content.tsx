import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const mock = [
  {
    title:
      '1.	To Nominate in the Category for “Kalam - Best Principal” award minimum experience required for principal is 15 years',
    description: '',
  },
  {
    title:
      '2.	Higher Secondary and High school teachers handling 9th std. to 12thstd. shall only apply Nominations for Best teacher award.',
    description: '',
  },
  {
    title:
      '3.	Teachers nomination - One school can nominate only one teacher in each category',
    description: '',
  },
  {
    title:
      '4.	Perception, social media reviews will also be taken into account for the “Leo Muthu Best School” awards.',
    description: '',
  },
  {
    title:
      '5.	Documents proof and photo proof where ever required must be uploaded.',
    description: '',
  },
  {
    title:
      '6.	Preferably 3 hardcopies of nominations with all proof must be sent to the below address by 26.3.2022',
    description:
      'Note- Data and details submitted as softcopy will be considered in case of delay in receiving the hard copy',
  },
  {
    title:
      '7.	Award winning schools and teachers shall bring minimum 10 high school and higher secondary school students to witness the Technology project display.',
    description: '',
  },
  {
    title: '8.	Incomplete nominations will not be considered.',
    description: '',
  },
  {
    title: '9.	Jury(s) decision for the award is final',
    description: '',
  },
  {
    title:
      '10.	Any queries you can reach the Organizers through mail and phone call.',
    description: '',
  },
];

const PrivacySection = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Box>
      <Typography
        variant={'h6'}
        gutterBottom
        sx={{
          fontWeight: 'medium',
        }}
      >
        {title}
      </Typography>
      <Typography component={'p'} color={'text.secondary'}>
        {description}
      </Typography>
    </Box>
  );
};

const Content = (): JSX.Element => {
  return (
    <Box>
      {mock.map((item, i) => (
        <Box key={i} marginBottom={i < mock.length - 1 ? 5 : 0}>
          <PrivacySection {...item} />
        </Box>
      ))}
    </Box>
  );
};

export default Content;
