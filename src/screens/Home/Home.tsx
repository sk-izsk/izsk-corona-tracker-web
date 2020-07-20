import React, { useEffect } from 'react';
import { AiOutlineSafety } from 'react-icons/ai';
import { FaHospitalSymbol } from 'react-icons/fa';
import { GiDeathZone } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { InfoContainer, LoadingScreen } from '../../components';
import { Information } from '../../components/InfoContainer/InfoContainer';
import { Actions } from '../../redux';
import { InitialState as HomeDataInitialState } from '../../redux/homeDataSlice';
import { RootState } from '../../redux/store';
import { theme } from '../../theme/muiTheme';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const dispatch = useDispatch();
  const homeData: HomeDataInitialState = useSelector((state: RootState) => state.homeData);
  const { confirmed, deaths, recovered, lastUpdate } = homeData;

  const worldWideInformation: Information[] = [
    {
      name: 'Confirmed',
      to: '/confirmed',
      value: confirmed,
      color: theme.palette.primary.light,
      icon: <FaHospitalSymbol size={25} color={theme.palette.primary.light} />,
    },
    {
      name: 'Recovered',
      to: '/recovered',
      value: recovered,
      color: theme.palette.success.light,
      icon: <AiOutlineSafety size={25} color={theme.palette.success.light} />,
    },
    {
      name: 'Deaths',
      to: '/deaths',
      value: deaths,
      color: theme.palette.error.main,
      icon: <GiDeathZone size={25} color={theme.palette.error.main} />,
    },
  ];

  useEffect(() => {
    dispatch(Actions.getHomeData());
  }, [dispatch]);

  return (
    <>
      {homeData.lastUpdate ? (
        <InfoContainer lastUpdate={lastUpdate} information={worldWideInformation} />
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default Home;
