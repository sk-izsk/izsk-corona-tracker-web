import { Avatar, Box, Grid, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import clsx from 'clsx';
import { format } from 'date-fns';
import React from 'react';
import { Link } from 'react-router-dom';
import { HomeInfoContainer } from '..';
import { CustomTheme, theme } from '../../theme/muiTheme';
import { capitalizeString } from '../../utils';

export interface Information {
  name: string;
  to: string;
  value: number | undefined;
}

export interface InfoContainerProps {
  information: Information[];
  lastUpdate?: string;
  countryName?: string;
  avatarLink?: string;
}

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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
  },
  download: {
    color: theme.palette.primary.light,
    cursor: 'pointer',
    marginLeft: theme.spacing(0.5),
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

const InfoContainer: React.FC<InfoContainerProps> = ({ information, lastUpdate, countryName, avatarLink }) => {
  const classes = useStyles();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('xs'));
  const handleGetSummary = (countryName?: string) => {
    if (countryName) {
      return window.open(`https://covid19.mathdro.id/api/countries/${countryName}/og`, '_blank');
    }
    return window.open(`https://covid19.mathdro.id/api/og`, '_blank');
  };
  const handleLink = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
  };
  return (
    <>
      <Box className={classes.mainContainer}>
        <Typography className={clsx([classes.textContainer, classes.header])} variant='h3'>
          {countryName ? `${capitalizeString(countryName)} wide cases` : `World wide cases`}
          {avatarLink && <Avatar className={classes.avatar} src={avatarLink} alt={avatarLink} />}
        </Typography>
        <Grid className={clsx([classes.gridContainer, isMobile && classes.gridContainerMobile])} container>
          {information.map((info: Information) => {
            return (
              <Grid className={classes.item} key={info.name} item>
                <Link
                  className={clsx([classes.item, classes.link])}
                  onClick={countryName ? handleLink : undefined}
                  to={info.to}
                >
                  <HomeInfoContainer name={info.name} value={info.value} />
                </Link>
              </Grid>
            );
          })}
        </Grid>
        {lastUpdate ? (
          <Typography className={classes.textContainer} variant='h6'>
            As of {lastUpdate !== undefined && format(new Date(lastUpdate as string), 'KK:mm aa EEEE, do MMMM yyyy')}
            <Typography
              onClick={() => handleGetSummary()}
              className={clsx([classes.textContainer, classes.download])}
              variant='h6'
              component='span'
            >
              Get the summary of world wide cases
            </Typography>
          </Typography>
        ) : (
          <Typography
            onClick={() => handleGetSummary(countryName)}
            className={clsx([classes.textContainer, classes.download])}
            variant='h6'
          >
            {`Get a summary of ${capitalizeString(countryName as string)} wide cases`}
          </Typography>
        )}
      </Box>
    </>
  );
};

export { InfoContainer };
