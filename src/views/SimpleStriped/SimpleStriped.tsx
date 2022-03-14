import React from 'react';
import { useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const mock = [
  {
    dates: '25.03.2022',
    process: 'Nomination Closing',
  },
  {
    dates: '28.03.2022',
    process: 'Notification for the Recipients of Awards',
  },
  {
    dates: '30.03.2022',
    process: 'Confirmation of Participation',
  },
  {
    dates: '02.04.2022',
    process: 'Venue : Sairam College Campus',
  },
];

const SimpleStriped = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box
      width={{ lg: 800 }}
      margin={'0 auto'}
      paddingX={2}
      paddingY={2}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 750 }} aria-label="simple table">
          <TableHead sx={{ bgcolor: 'alternate.dark' }}>
            <TableRow>
              <TableCell>
                <Typography
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  Important Dates
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  Process
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mock.map((item, i) => (
              <TableRow
                key={i}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  '&:nth-of-type(2n)': { bgcolor: 'alternate.main' },
                }}
              >
                <TableCell component="th" scope="row">
                  <Typography variant={'subtitle2'} fontWeight={700}>
                    {item.dates}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color={'text.secondary'} variant={'subtitle2'}>
                    {item.process}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SimpleStriped;
