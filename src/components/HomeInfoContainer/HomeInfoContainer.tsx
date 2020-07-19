import { Box, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { CustomTheme } from '../../theme/muiTheme';
import { useMeasure } from '../../utils/';

const useStyles = makeStyles((theme: CustomTheme) => ({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
  },
  halfCircle: {
    width: 200,
    height: 100,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    border: '10px solid',
    borderColor: ({ color }: HomeInfoContainerProps): string => (color ? color : theme.palette.primary.main),
    borderBottom: 0,
    boxSizing: 'border-box',
  },
  values: {
    fontSize: 30,
    fontWeight: 'bold',
    color: ({ color }: HomeInfoContainerProps): string => (color ? color : theme.palette.primary.main),
  },
  header: {
    color: ({ color }: HomeInfoContainerProps): string => (color ? color : theme.palette.primary.main),
  },
}));

export interface HomeInfoContainerProps {
  name?: string;
  color?: string;
  value?: number;
  icon?: JSX.Element;
}

const HomeInfoContainer: React.FC<HomeInfoContainerProps> = (props) => {
  const { name, value, icon } = props;
  const [open, setOpen] = useState<boolean>(false);
  const [bind] = useMeasure();
  const values = useSpring({ width: open ? value : 0 });
  const classes = useStyles(props);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 1000);
  }, [values]);

  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.halfCircle}></Box>
      {icon}
      <Typography className={classes.header} variant='h3'>
        {name}
      </Typography>
      <Box {...bind} onClick={() => setOpen(!open)}>
        <animated.div className={classes.values}>{values.width.interpolate((x: any) => x.toFixed(0))}</animated.div>
      </Box>
    </Box>
  );
};

export { HomeInfoContainer };
