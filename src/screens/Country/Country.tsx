import React from 'react';
import { useParams } from 'react-router-dom';
import { InfoContainer, LoadingScreen } from '../../components';
import { getInformation } from '../../utils';

export interface CountryProps {}

interface Data {
  country: string;
  confirmed: number;
  recovered: number;
  deaths: number;
}

const Country: React.FC<CountryProps> = () => {
  const { country, confirmed, recovered, deaths } = useParams();

  return (
    <>
      {country ? (
        <InfoContainer
          countryName={country}
          information={getInformation(confirmed as number, recovered as number, deaths as number)}
        />
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default Country;
