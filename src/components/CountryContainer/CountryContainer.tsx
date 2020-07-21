import { Avatar, Box, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { AiOutlineSafety } from 'react-icons/ai';
import { FaHospitalSymbol } from 'react-icons/fa';
import { GiDeathZone } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';
import { CustomTheme, theme } from '../../theme/muiTheme';
import { useMeasure } from '../../utils';

export interface CountryContainerProps {
  name: string;
  valueForConfirmed?: number;
  valueForRecovered?: number;
  valueForDeaths?: number;
  avatarLink?: string;
}

const useStyles = makeStyles((theme: CustomTheme) => ({
  manContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    border: `1px solid ${theme.palette.grey[400]}`,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderRadius: 10,
    padding: theme.spacing(1),
  },
  mainContainerMobile: {
    flexDirection: 'column',
  },
  infoContainer: {
    display: 'flex',
  },
  infoContainerMobile: {
    justifyContent: 'center',
  },
  infoIconContainer: {
    display: 'flex',
  },
  infoValueContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(1),
  },
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  headerMobile: {
    justifyContent: 'center',
    fontSize: 50,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  values: {
    fontSize: 15,
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    textAlign: 'center',
  },
  icon: {
    margin: theme.spacing(0.5),
  },
  confirmedText: {
    color: theme.palette.primary.light,
  },
  recoveredText: {
    color: theme.palette.success.light,
  },
  deathsText: {
    color: theme.palette.error.main,
  },
  avatar: {
    marginRight: theme.spacing(1),
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}));

const CountryContainer: React.FC<CountryContainerProps> = ({
  name,
  valueForConfirmed,
  valueForDeaths,
  valueForRecovered,
  avatarLink,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const [bind] = useMeasure();
  const valuesForConfirmed = useSpring({ width: open ? valueForConfirmed : 0 });
  const valuesForRecovered = useSpring({ width: open ? valueForRecovered : 0 });
  const valuesForDeaths = useSpring({ width: open ? valueForDeaths : 0 });
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('xs'));

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 1000);
  }, []);

  return (
    <Link
      className={clsx([classes.manContainer, isMobile && classes.mainContainerMobile, classes.link])}
      to={`/country/${name.toLowerCase()}/${valueForConfirmed}/${valueForRecovered}/${valueForDeaths}`}
    >
      <Typography className={clsx([classes.header, isMobile && classes.headerMobile])} variant='h4'>
        {avatarLink && <Avatar src={avatarLink} alt={avatarLink} className={classes.avatar} />} {name}
      </Typography>
      <Box className={clsx([classes.infoContainer, isMobile && classes.infoContainerMobile])}>
        <Box className={classes.infoValueContainer}>
          <Box className={classes.infoIconContainer}>
            <FaHospitalSymbol className={classes.icon} size={25} color={theme.palette.primary.light} />
            <Typography className={classes.confirmedText} variant='h6'>
              Confirmed
            </Typography>
          </Box>
          <Box {...bind} onClick={() => setOpen(!open)}>
            <animated.div className={clsx([classes.values, classes.confirmedText])}>
              {valuesForConfirmed.width.interpolate((x: any) => x.toFixed(0))}
            </animated.div>
          </Box>
        </Box>
        <Box className={classes.infoValueContainer}>
          <Box className={classes.infoIconContainer}>
            <AiOutlineSafety className={classes.icon} size={25} color={theme.palette.success.light} />
            <Typography className={classes.recoveredText} variant='h6'>
              Recovered
            </Typography>
          </Box>
          <Box {...bind} onClick={() => setOpen(!open)}>
            <animated.div className={clsx([classes.values, classes.recoveredText])}>
              {valuesForRecovered.width.interpolate((x: any) => x.toFixed(0))}
            </animated.div>
          </Box>
        </Box>
        <Box className={classes.infoValueContainer}>
          <Box className={classes.infoIconContainer}>
            <GiDeathZone className={classes.icon} size={25} color={theme.palette.error.main} />
            <Typography className={classes.deathsText} variant='h6'>
              Deaths
            </Typography>
          </Box>
          <Box {...bind} onClick={() => setOpen(!open)}>
            <animated.div className={clsx([classes.values, classes.deathsText])}>
              {valuesForDeaths.width.interpolate((x: any) => x.toFixed(0))}
            </animated.div>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export { CountryContainer };
