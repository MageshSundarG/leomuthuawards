import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';

import Container from 'components/Container';

const Nominations = (): JSX.Element => {
  const [brightness, setBrightness] = React.useState(10);

  const handleChange = (event) => {
    setBrightness(event.target.value);
  };

  return (
    <Container maxWidth={400}>
      <Box sx={{ minWidth: 120 }}>
        <Typography marginBottom={4}>
          Kalam - Leo Muthu Education Awards Nominations 2022
        </Typography>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Nominations
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={brightness}
            label="Screen brightness"
            onChange={handleChange}
          >
            <MenuItem value={1}>
              <Box display={'flex'} alignItems={'center'}>
                <Typography>Best School</Typography>
              </Box>
            </MenuItem>
            <MenuItem value={2}>
              <Box display={'flex'} alignItems={'center'}>
                <Typography>Best Principal</Typography>
              </Box>
            </MenuItem>
            <MenuItem value={3}>
              <Box display={'flex'} alignItems={'center'}>
                <Typography>Best Teacher - English</Typography>
              </Box>
            </MenuItem>
            <MenuItem value={4}>
              <Box display={'flex'} alignItems={'center'}>
                <Typography>Best Teacher - Zoology</Typography>
              </Box>
            </MenuItem>
            <MenuItem value={5}>
              <Box display={'flex'} alignItems={'center'}>
                <Typography>Best Teacher - Mathematics</Typography>
              </Box>
            </MenuItem>
            <MenuItem value={6}>
              <Box display={'flex'} alignItems={'center'}>
                <Typography>Best Teacher - Computer Science</Typography>
              </Box>
            </MenuItem>
            <MenuItem value={7}>
              <Box display={'flex'} alignItems={'center'}>
                <Typography>Best Teacher - Physics</Typography>
              </Box>
            </MenuItem>
            <MenuItem value={8}>
              <Box display={'flex'} alignItems={'center'}>
                <Typography>Best Teacher - Botany</Typography>
              </Box>
            </MenuItem>
            <MenuItem value={9}>
              <Box display={'flex'} alignItems={'center'}>
                <Typography>Best Teacher - Tamil</Typography>
              </Box>
            </MenuItem>
            <MenuItem value={10}>
              <Box display={'flex'} alignItems={'center'}>
                <Typography>Best Teacher - Chemistry</Typography>
              </Box>
            </MenuItem>
          
          </Select>
        </FormControl>
        <Container>
        <Button
                component={'a'}
                variant="contained"
                color="primary"
                size="large"
                href={'https://leomuthuawards.netlify.app/'}
                //startIcon={<AppRegistrationRoundedIcon />}
                
              >
                Submit
        </Button>
        </Container>
      </Box>
    </Container>
  );
};

export default Nominations;
