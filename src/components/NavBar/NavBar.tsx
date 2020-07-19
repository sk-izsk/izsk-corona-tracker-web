import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { FcAbout, FcGlobe, FcHome, FcPieChart } from 'react-icons/fc';
import { IoMdMenu } from 'react-icons/io';
import { Drawer } from '..';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
}));

export interface MenuItem {
  name: string;
  to: string;
  icon: JSX.Element;
}

const menuItems: MenuItem[] = [
  {
    name: 'Home',
    to: '/home',
    icon: <FcHome size={25} />,
  },
  {
    name: 'Countries',
    to: '/countries',
    icon: <FcGlobe size={25} />,
  },
  {
    name: 'Chart',
    to: '/chart',
    icon: <FcPieChart size={25} />,
  },
  {
    name: 'About',
    to: '/about',
    icon: <FcAbout size={25} />,
  },
];

const NavBar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        color='secondary'
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawer}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <IoMdMenu />
          </IconButton>
          <Typography variant='h6' noWrap>
            Covid Tracker
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={open} handleDrawer={handleDrawer} menuItems={menuItems} />
    </div>
  );
};

export { NavBar };
