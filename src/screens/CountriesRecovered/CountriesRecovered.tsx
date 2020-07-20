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

export interface CountriesRecoveredProps {}
const useStyles = makeStyles((theme: CustomTheme) => ({
  paginateContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const Countries: React.FC<CountriesRecoveredProps> = () => {
  const classes = useStyles();
  const dispatch: Dispatch<any> = useDispatch();
  const countryRecoveredList: CountryResponse[] = useSelector<any, CountryResponse[]>(
    (state: RootState) => state.countryRecoveredList,
  );
  const itemsPerPage: number = 30;
  const [page, setPage] = useState<number>(1);
  const [paginatedCountryList, setPaginatedCountryList] = useState<CountryResponse[]>([]);

  const handlePaginate = (e: React.ChangeEvent<unknown>, value: number) => {
    e.preventDefault();
    setPage(value);
  };

  useEffect(() => {
    if (countryRecoveredList.length === 0) {
      dispatch(Actions.getCountryRecoveredList());
    }
    setPaginatedCountryList(paginate(countryRecoveredList, itemsPerPage, page));
  }, [dispatch, countryRecoveredList, page]);

  return (
    <>
      {paginatedCountryList.length > 0 && <CountryContainerList countryList={paginatedCountryList} />}
      <Box className={classes.paginateContainer}>
        <Pagination
          onChange={handlePaginate}
          count={Math.round(countryRecoveredList.length / itemsPerPage)}
          variant='outlined'
          color='secondary'
        />
      </Box>
    </>
  );
};

export default Countries;
