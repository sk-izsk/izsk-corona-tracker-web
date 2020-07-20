import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InfoContainer, LoadingScreen } from '../../components';
import { Actions } from '../../redux';
import { InitialState as HomeDataInitialState } from '../../redux/homeDataSlice';
import { RootState } from '../../redux/store';
import { getInformation } from '../../utils';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const dispatch = useDispatch();
  const homeData: HomeDataInitialState = useSelector((state: RootState) => state.homeData);
  const { confirmed, deaths, recovered, lastUpdate } = homeData;

  useEffect(() => {
    dispatch(Actions.getHomeData());
  }, [dispatch]);

  return (
    <>
      {homeData.lastUpdate ? (
        <InfoContainer
          lastUpdate={lastUpdate}
          information={getInformation(confirmed as number, recovered as number, deaths as number)}
        />
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default Home;
