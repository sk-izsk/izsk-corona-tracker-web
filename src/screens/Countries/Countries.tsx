import { Box, makeStyles, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { Dispatch } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CountryResponse } from '../../api/response';
import { CountryContainerList } from '../../components';
import { RootState } from '../../redux/store';
import { Actions } from '../../redux/thunk';
import { CustomTheme } from '../../theme/muiTheme';
import { paginate } from '../../utils/paginate';

export interface CountriesProps {}
const useStyles = makeStyles((theme: CustomTheme) => ({
  paginateContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  header: {
    textAlign: 'center',
    marginTop: theme.spacing(10),
  },
}));

const Countries: React.FC<CountriesProps> = () => {
  const classes = useStyles();
  const dispatch: Dispatch<any> = useDispatch();
  const countryConfirmedList: CountryResponse[] = useSelector<any, CountryResponse[]>(
    (state: RootState) => state.countryConfirmedList,
  );
  const itemsPerPage: number = 30;
  const [page, setPage] = useState<number>(1);
  const [paginatedCountryList, setPaginatedCountryList] = useState<CountryResponse[]>([]);

  const handlePaginate = (e: React.ChangeEvent<unknown>, value: number) => {
    e.preventDefault();
    setPage(value);
  };

  useEffect(() => {
    if (countryConfirmedList.length === 0) {
      dispatch(Actions.getCountryConfirmedList());
    }
    setPaginatedCountryList(paginate(countryConfirmedList, itemsPerPage, page));
  }, [dispatch, countryConfirmedList, page]);

  return (
    <>
      <Typography className={classes.header} variant='h5'>
        Sort by number of confirmed
      </Typography>
      {paginatedCountryList.length > 0 && <CountryContainerList countryList={paginatedCountryList} />}
      <Box className={classes.paginateContainer}>
        <Pagination
          onChange={handlePaginate}
          count={Math.round(countryConfirmedList.length / itemsPerPage)}
          variant='outlined'
          color='secondary'
        />
      </Box>
    </>
  );
};

export default Countries;
