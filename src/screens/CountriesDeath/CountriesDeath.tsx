import { Box, makeStyles } from '@material-ui/core';
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

export interface CountriesDeathsProps {}
const useStyles = makeStyles((theme: CustomTheme) => ({
  paginateContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const CountriesDeaths: React.FC<CountriesDeathsProps> = () => {
  const classes = useStyles();
  const dispatch: Dispatch<any> = useDispatch();
  const countryDeathsList: CountryResponse[] = useSelector<any, CountryResponse[]>(
    (state: RootState) => state.countryDeathsList,
  );
  const itemsPerPage: number = 30;
  const [page, setPage] = useState<number>(1);
  const [paginatedCountryList, setPaginatedCountryList] = useState<CountryResponse[]>([]);

  const handlePaginate = (e: React.ChangeEvent<unknown>, value: number) => {
    e.preventDefault();
    setPage(value);
  };

  useEffect(() => {
    if (countryDeathsList.length === 0) {
      dispatch(Actions.getCountryDeathsList());
    }
    setPaginatedCountryList(paginate(countryDeathsList, itemsPerPage, page));
  }, [dispatch, countryDeathsList, page]);

  return (
    <>
      {paginatedCountryList.length > 0 && <CountryContainerList countryList={paginatedCountryList} />}
      <Box className={classes.paginateContainer}>
        <Pagination
          onChange={handlePaginate}
          count={Math.round(countryDeathsList.length / itemsPerPage)}
          variant='outlined'
          color='secondary'
        />
      </Box>
    </>
  );
};

export default CountriesDeaths;
