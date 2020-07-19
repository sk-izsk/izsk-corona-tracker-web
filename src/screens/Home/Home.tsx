import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Actions } from '../../redux/thunk';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Actions.getHomeData());
  }, [dispatch]);

  return <div>hello</div>;
};

export default Home;
