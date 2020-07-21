import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import { CountryContainer } from '..';
import { CustomTheme } from '../../theme/muiTheme';
import { FormattedArray } from '../../utils/getFormatted';
import { paginate } from '../../utils/paginate';
import { LoadingScreen } from '../Loader/Loader';

export interface CountriesProps {
  countryList: FormattedArray[];
  type?: string;
}
const useStyles = makeStyles((theme: CustomTheme) => ({
  paginateContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  header: {
    textAlign: 'center',
    marginTop: theme.spacing(10),
  },
  mainContainer: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

const CountryListContainer: React.FC<CountriesProps> = ({ countryList, type }) => {
  const classes = useStyles();
  const itemsPerPage: number = 30;
  const [page, setPage] = useState<number>(1);
  const [paginatedCountryList, setPaginatedCountryList] = useState<FormattedArray[]>([]);

  const handlePaginate = (e: React.ChangeEvent<unknown>, value: number) => {
    e.preventDefault();
    setPage(value);
  };

  useEffect(() => {
    setPaginatedCountryList(paginate(countryList, itemsPerPage, page));
  }, [countryList, page]);

  return (
    <>
      <Typography className={classes.header} variant='h5'>
        {`Sort based on number of ${type} cases`}
      </Typography>
      {paginatedCountryList.length > 0 ? (
        <>
          <Grid className={classes.mainContainer} container>
            {paginatedCountryList.map((country: FormattedArray) => {
              return (
                <CountryContainer
                  name={country.name}
                  valueForConfirmed={country.valueForConfirmed}
                  valueForRecovered={country.valueForRecovered}
                  valueForDeaths={country.valueForDeaths}
                  avatarLink={country.avatarLink}
                  valueForNewCases={country.valueForNewCase}
                  key={country.name}
                />
              );
            })}
          </Grid>
          <Box className={classes.paginateContainer}>
            <Pagination
              onChange={handlePaginate}
              count={Math.round(countryList.length / itemsPerPage)}
              variant='outlined'
              color='secondary'
            />
          </Box>
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export { CountryListContainer };
