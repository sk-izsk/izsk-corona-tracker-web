import { makeStyles } from '@material-ui/core';
import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { CustomTheme, theme } from '../../theme/muiTheme';

export interface LoadingScreenProps {}

const useStyles = makeStyles((theme: CustomTheme) => ({
  loaderContainer: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const LoadingScreen: React.FC<LoadingScreenProps> = () => {
  const classes: Record<'loaderContainer', string> = useStyles();
  return (
    <div className={classes.loaderContainer}>
      <Loader type='Puff' color={theme.palette.secondary.main} height={200} width={200} visible />
    </div>
  );
};

export { LoadingScreen };
