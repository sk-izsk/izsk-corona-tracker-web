import { Box, Grid, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import clsx from 'clsx';
import { format } from 'date-fns';
import React, { useEffect } from 'react';
import { AiOutlineSafety } from 'react-icons/ai';
import { FaHospitalSymbol } from 'react-icons/fa';
import { GiDeathZone } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HomeInfoContainer } from '../../components';
import { Actions } from '../../redux';
import { InitialState as HomeDataInitialState } from '../../redux/homeDataSlice';
import { RootState } from '../../redux/store';
import { CustomTheme, theme } from '../../theme/muiTheme';

export interface HomeProps {}

const useStyles = makeStyles((theme: CustomTheme) => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  gridContainer: {
    display: 'flex',
    height: '100vh',
    flexDirection: 'row',
  },
  gridContainerMobile: {
    flexDirection: 'column',
    marginTop: theme.spacing(10),
  },
  item: {
    display: 'flex',
    flex: 1,
  },
  textContainer: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  header: {
    position: 'relative',
    top: theme.spacing(10),
    color: theme.palette.primary.light,
  },
  link: {
    textDecoration: 'none',
  },
}));

interface WorldWideInformation {
  name: string;
  to: string;
  value: number | undefined;
  color: string;
  icon: JSX.Element;
}

const Home: React.FC<HomeProps> = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('xs'));
  const homeData: HomeDataInitialState = useSelector((state: RootState) => state.homeData);
  const { confirmed, deaths, recovered, lastUpdate } = homeData;

  const worldWideInformation: WorldWideInformation[] = [
    {
      name: 'Confirmed',
      to: '/confirmed',
      value: confirmed,
      color: theme.palette.primary.light,
      icon: <FaHospitalSymbol size={25} color={theme.palette.primary.light} />,
    },
    {
      name: 'Recovered',
      to: '/recovered',
      value: recovered,
      color: theme.palette.success.light,
      icon: <AiOutlineSafety size={25} color={theme.palette.success.light} />,
    },
    {
      name: 'Deaths',
      to: '/deaths',
      value: deaths,
      color: theme.palette.error.main,
      icon: <GiDeathZone size={25} color={theme.palette.error.main} />,
    },
  ];

  useEffect(() => {
    dispatch(Actions.getHomeData());
  }, [dispatch]);

  return (
    <>
      {homeData && (
        <Box className={classes.mainContainer}>
          <Typography className={clsx([classes.textContainer, classes.header])} variant='h3'>
            World wide cases
          </Typography>
          <Grid className={clsx([classes.gridContainer, isMobile && classes.gridContainerMobile])} container>
            {worldWideInformation.map((info: WorldWideInformation) => {
              return (
                <Grid className={classes.item} key={info.name} item>
                  <Link className={clsx([classes.item, classes.link])} to={info.to}>
                    <HomeInfoContainer icon={info.icon} name={info.name} value={info.value} color={info.color} />
                  </Link>
                </Grid>
              );
            })}
          </Grid>
          <Typography className={classes.textContainer} variant='h6'>
            As of {lastUpdate !== undefined && format(new Date(lastUpdate as string), 'KK:mm aa EEEE, do MMMM yyyy')}
          </Typography>
        </Box>
      )}
    </>
  );
};

export default Home;
