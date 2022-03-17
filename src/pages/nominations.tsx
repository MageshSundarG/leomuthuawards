import React from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Link from '@mui/material/Link';
import Container from 'components/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Main from 'layouts/Main';

const Nominations = (): JSX.Element => {
  const router = useRouter();
  const [value, setValue] = React.useState('/');

  return (
    <Main>
      <Container maxWidth={400} paddingY={{ xs: 1, sm: 2, md: 4 }}>
        <Box sx={{ minWidth: 120 }}>
          <Button
            startIcon={<ArrowBackIcon />}
            component={Link}
            variant="text"
            color="primary"
            size="small"
            href={'/'}
          >
            Back home
          </Button>
          <Typography
            marginBottom={3}
            align={'center'}
            marginTop={1}
            fontWeight={600}
            variant={'h6'}
          >
            Kalam - Leo Muthu Education Awards Nominations 2022
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Nominations</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Screen brightness"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            >
              {/* <MenuItem value={1}>
                <Box display={'flex'} alignItems={'center'}>
                  <Typography>Best School</Typography>
                </Box>
              </MenuItem> */}
              <MenuItem
                value={
                  'https://airtable.com/embed/shrQYYaSIUWJfMUZk?backgroundColor=cyan'
                }
              >
                <Box display={'flex'} alignItems={'center'}>
                  <Typography>Best Principal</Typography>
                </Box>
              </MenuItem>
              <MenuItem
                value={
                  'https://airtable.com/embed/shrn1yIk1MluLdu0B?backgroundColor=cyan'
                }
              >
                <Box display={'flex'} alignItems={'center'}>
                  <Typography>Best Teacher - English</Typography>
                </Box>
              </MenuItem>
              {/* <MenuItem
                value={
                  'https://airtable.com/embed/shrIBNyEgJ1ZGwf9u?backgroundColor=cyan'
                }
              >
                <Box display={'flex'} alignItems={'center'}>
                  <Typography>Best Teacher - Zoology</Typography>
                </Box>
              </MenuItem> */}
              {/* <MenuItem
                value={
                  'https://airtable.com/embed/shrnPA3z5fYJmEzPV?backgroundColor=cyan'
                }
              >
                <Box display={'flex'} alignItems={'center'}>
                  <Typography>Best Teacher - Mathematics</Typography>
                </Box>
              </MenuItem> */}
              <MenuItem value={'https://airtable.com/shrE6Shdz6jn0fXds'}>
                <Box display={'flex'} alignItems={'center'}>
                  <Typography>Best Teacher - Computer Science</Typography>
                </Box>
              </MenuItem>
              {/* <MenuItem value={7}>
                <Box display={'flex'} alignItems={'center'}>
                  <Typography>Best Teacher - Physics</Typography>
                </Box>
              </MenuItem> */}
              {/* <MenuItem
                value={
                  'https://airtable.com/embed/shrluNLCjRdxqevAN?backgroundColor=cyan'
                }
              >
                <Box display={'flex'} alignItems={'center'}>
                  <Typography>Best Teacher - Botany</Typography>
                </Box>
              </MenuItem> */}
              <MenuItem
                value={
                  'https://airtable.com/embed/shr2RP4LM8npn56J3?backgroundColor=cyan'
                }
              >
                <Box display={'flex'} alignItems={'center'}>
                  <Typography>Best Teacher - Tamil</Typography>
                </Box>
              </MenuItem>
              {/* <MenuItem
                value={
                  'https://airtable.com/embed/shr9zfyERyKuut5AR?backgroundColor=cyan'
                }
              >
                <Box display={'flex'} alignItems={'center'}>
                  <Typography>Best Teacher - Chemistry</Typography>
                </Box>
              </MenuItem> */}
            </Select>
            <Grid item container justifyContent={'center'} xs={12} mt={3}>
              <Button
                sx={{ height: 54, minWidth: 150 }}
                onClick={() => router.push(`${value}`)}
                variant="contained"
                color="primary"
                size="medium"
                type="submit"
                fullWidth
              >
                Next
              </Button>
            </Grid>
          </FormControl>
        </Box>
      </Container>
    </Main>
  );
};

export default Nominations;
