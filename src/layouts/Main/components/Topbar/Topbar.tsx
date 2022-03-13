import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';

import { NavItem } from './components';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onSidebarOpen: () => void;
  pages: {
    company: Array<PageItem>;
    account: Array<PageItem>;
    secondary: Array<PageItem>;
    blog: Array<PageItem>;
    portfolio: Array<PageItem>;
  };
  colorInvert?: boolean;
}

const Topbar = ({
  pages,
  colorInvert = false,
}: Props): JSX.Element => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };
  const { mode } = theme.palette;
  const {
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
  } = pages;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="theFront"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? 'https://raw.githubusercontent.com/MageshSundarG/sairamschoolawards/main/assets/images/sairam_institutions_blue.svg'
              : 'https://raw.githubusercontent.com/MageshSundarG/sairamschoolawards/main/assets/images/sairam_institutions_white.svg'
          }
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
          <MenuItem>
            <Link
              underline="none"
              component="a"
              href="/"
              color={colorInvert ? 'common.white' : 'text.primary'}
            >
              Terms
            </Link>
          </MenuItem>
        </Box>
      </Box>
      <Box display={'flex'} alignItems={'center'}>
        <Box
          sx={{ display: { xs: 'block', md: 'none' } }}
          alignItems={'center'}
        >
          <React.Fragment>
            <Tooltip title="Menu">
              <IconButton onClick={handleClick} size="small">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 3,
                sx: {
                  overflow: 'visible',
                  mt: 1.5,
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem>
                <Link
                  underline="none"
                  component="a"
                  href="#"
                  color="text.primary"
                >
                  Terms
                </Link>
              </MenuItem>
            </Menu>
          </React.Fragment>
        </Box>
        <Box marginLeft={2}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            href="#"
            size="large"
            startIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            }
          >
            Conatct us
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
