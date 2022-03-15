import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import TabletAndroidRoundedIcon from '@mui/icons-material/TabletAndroidRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';

import Container from 'components/Container';

const mock = [
  {
    title: '50 Awards and Certificates',
    subtitle: '',
    icon: <EmojiEventsRoundedIcon />,
  },
  {
    title: 'Exciting Prizes which includes TAB',
    subtitle: '',
    icon: <TabletAndroidRoundedIcon />,
  },
];

const FeatureCardWithCtaButton = (): JSX.Element => {
  const theme = useTheme();

  const RightSide = () => (
    <List disablePadding>
      {mock.map((item, index) => (
        <ListItem key={index} disableGutters>
          <ListItemAvatar>
            <Box
              component={Avatar}
              variant={'rounded'}
              color={theme.palette.primary.dark}
              bgcolor={`${theme.palette.primary.light}22`}
            >
              {item.icon}
            </Box>
          </ListItemAvatar>
          <ListItemText primary={item.title} secondary={item.subtitle} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Container>
      <Card sx={{ boxShadow: 4, borderRadius: 3 }}>
        <CardContent sx={{ padding: { sm: 4 } }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Box marginBottom={4}>
                <Typography
                  fontWeight={600}
                  variant={'h6'}
                  gutterBottom
                  color="primary"
                >
                  Participating Institutions
                </Typography>
                <Typography>
                  The following Awards are being planned in all the Four
                  Categories.
                </Typography>
              </Box>
              <Grid container spacing={1}>
                {[
                  'Government & Aided Higher Secondary Schools',
                  'Matriculation Schools',
                  'CBSE Schools',
                  'International Schools',
                ].map((item, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <Box
                      component={ListItem}
                      disableGutters
                      width={'auto'}
                      padding={0}
                    >
                      <Box
                        component={ListItemAvatar}
                        minWidth={'auto !important'}
                        marginRight={2}
                      >
                        <Box
                          component={Avatar}
                          bgcolor={theme.palette.secondary.main}
                          width={20}
                          height={20}
                        >
                          <svg
                            width={12}
                            height={12}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Box>
                      </Box>
                      <ListItemText primary={item} />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item container alignItems={'center'} xs={12} md={6}>
              <Box
                borderLeft={{ xs: 0, sm: `1px solid ${theme.palette.divider}` }}
                paddingLeft={{ xs: 0, sm: 4 }}
              >
                <RightSide />
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default FeatureCardWithCtaButton;
