import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { CountryResponse } from '../../api/response';
import { CustomTheme } from '../../theme/muiTheme';
import { CountryContainer } from '../CountryContainer/CountryContainer';

export interface CountryContainerListProps {
  countryList: CountryResponse[];
}
const useStyles = makeStyles((theme: CustomTheme) => ({
  mainContainer: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

const CountryContainerList: React.FC<CountryContainerListProps> = ({ countryList }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.mainContainer} container>
      {countryList.map((country: CountryResponse) => {
        return (
          <CountryContainer
            name={country.countryRegion}
            valueForConfirmed={country.confirmed}
            valueForRecovered={country.recovered}
            valueForDeaths={country.deaths}
            key={country.uid}
          />
        );
      })}
    </Grid>
  );
};

export { CountryContainerList };
