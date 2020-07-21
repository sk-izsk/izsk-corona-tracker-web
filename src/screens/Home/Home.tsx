import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContinentResponse } from '../../api/response';
import { InfoContainer, LoadingScreen } from '../../components';
import { Actions } from '../../redux';
import { InitialState as HomeDataInitialState } from '../../redux/homeDataSlice';
import { RootState } from '../../redux/store';
import { getInformation } from '../../utils';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const dispatch = useDispatch();
  const homeData: HomeDataInitialState = useSelector((state: RootState) => state.homeData);
  const continents: ContinentResponse[] = useSelector((state: RootState) => state.continents);
  const { confirmed, deaths, recovered, lastUpdate, newCases } = homeData;

  useEffect(() => {
    if (!homeData.confirmed || continents.length === 0) {
      dispatch(Actions.getHomeData());
      dispatch(Actions.getContinents());
    }
  }, [dispatch, continents.length, homeData.confirmed]);

  return (
    <>
      {homeData.lastUpdate ? (
        <InfoContainer
          lastUpdate={lastUpdate}
          information={getInformation(confirmed as number, recovered as number, deaths as number, newCases as number)}
        />
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default Home;
