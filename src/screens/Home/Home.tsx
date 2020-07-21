import { Box, makeStyles, useMediaQuery } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContinentResponse, Timeline } from '../../api/response';
import { CountryListContainer, InfoContainer, LoadingScreen } from '../../components';
import { Actions } from '../../redux';
import { InitialState as HomeDataInitialState } from '../../redux/homeDataSlice';
import { RootState } from '../../redux/store';
import { CustomTheme, theme } from '../../theme/muiTheme';
import { getFormattedContinent, getInformation } from '../../utils';

export interface HomeProps {}
const useStyles = makeStyles((theme: CustomTheme) => ({
  infoContainer: {
    marginTop: theme.spacing(25),
  },
}));

const Home: React.FC<HomeProps> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const homeData: HomeDataInitialState = useSelector((state: RootState) => state.homeData);
  const continents: ContinentResponse[] = useSelector((state: RootState) => state.continents);
  const { confirmed, deaths, recovered, newCases } = homeData;
  const formattedContinentList = getFormattedContinent(continents);
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('xs'));
  const chartData: Timeline = useSelector((state: RootState) => state.chart);

  useEffect(() => {
    if (!homeData.confirmed || continents.length === 0 || !chartData.cases) {
      dispatch(Actions.getHomeData());
      dispatch(Actions.getContinents());
      dispatch(Actions.getChartData());
    }
  }, [dispatch, continents.length, homeData.confirmed, chartData.cases]);

  return (
    <>
      {homeData.confirmed ? (
        <>
          <InfoContainer
            information={getInformation(confirmed as number, recovered as number, deaths as number, newCases as number)}
          />
          <Box className={isMobile ? classes.infoContainer : undefined}>
            <CountryListContainer countryList={formattedContinentList} type='continents' />
          </Box>
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default Home;
