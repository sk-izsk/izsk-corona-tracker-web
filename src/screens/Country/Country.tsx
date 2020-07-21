import React from 'react';
import { useParams } from 'react-router-dom';
import { InfoContainer, LoadingScreen } from '../../components';
import { getInformation, useQuery } from '../../utils';

export interface CountryProps {}

const Country: React.FC<CountryProps> = () => {
  const { country } = useParams();
  const data = useQuery();
  const confirmed: number = Number(data.get('confirmed'));
  const recovered: number = Number(data.get('recovered'));
  const deaths: number = Number(data.get('deaths'));
  const newCases: number = Number(data.get('newCases'));
  const avatarLink = data.get('avatarLink');

  return (
    <>
      {country && avatarLink ? (
        <InfoContainer
          countryName={country}
          avatarLink={avatarLink as string}
          information={getInformation(confirmed as number, recovered as number, deaths as number, newCases as number)}
        />
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default Country;
