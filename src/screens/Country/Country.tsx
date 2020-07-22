import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProvinceResponse } from '../../api/response';
import { CountryListContainer, InfoContainer, LoadingScreen } from '../../components';
import { RootState } from '../../redux/store';
import { getInformation, useQuery } from '../../utils';
import { getFormattedProvince } from '../../utils/getFormatted';

export interface CountryProps {}

const Country: React.FC<CountryProps> = () => {
  const { country } = useParams();
  const data = useQuery();
  const confirmed: number = Number(data.get('confirmed'));
  const recovered: number = Number(data.get('recovered'));
  const deaths: number = Number(data.get('deaths'));
  const newCases: number = Number(data.get('newCases'));
  const avatarLink = data.get('avatarLink');
  const type = data.get('type');
  const provinceList: ProvinceResponse[] = useSelector((state: RootState) => state.provinceList).filter(
    (data: ProvinceResponse) => country.toLowerCase() === data.country.toLowerCase(),
  );
  const formattedProvinceList = getFormattedProvince(provinceList);

  return (
    <>
      {country && avatarLink ? (
        <>
          <InfoContainer
            countryName={country}
            avatarLink={avatarLink as string}
            type={type as string}
            information={getInformation(confirmed as number, recovered as number, deaths as number, newCases as number)}
          />
          {formattedProvinceList.length > 0 && (
            <CountryListContainer countryList={formattedProvinceList} type='alphabetically' />
          )}
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default Country;
