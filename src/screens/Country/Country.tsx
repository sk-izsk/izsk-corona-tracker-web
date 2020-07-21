import { Box, makeStyles, useMediaQuery } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProvinceResponse } from '../../api/response';
import { CountryListContainer, InfoContainer, LoadingScreen } from '../../components';
import { RootState } from '../../redux/store';
import { CustomTheme, theme } from '../../theme/muiTheme';
import { getInformation, useQuery } from '../../utils';
import { getFormattedProvince } from '../../utils/getFormatted';

export interface CountryProps {}

const useStyles = makeStyles((theme: CustomTheme) => ({
  provinceContainer: {
    marginTop: theme.spacing(42),
  },
}));

const Country: React.FC<CountryProps> = () => {
  const classes = useStyles();
  const { country } = useParams();
  const data = useQuery();
  const confirmed: number = Number(data.get('confirmed'));
  const recovered: number = Number(data.get('recovered'));
  const deaths: number = Number(data.get('deaths'));
  const newCases: number = Number(data.get('newCases'));
  const avatarLink = data.get('avatarLink');
  const type = data.get('type');
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('xs'));

  const provinceList: ProvinceResponse[] = useSelector((state: RootState) => state.provinceList).filter(
    (data: ProvinceResponse) => country === data.country.toLowerCase(),
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
            <Box className={isMobile ? classes.provinceContainer : undefined}>
              <CountryListContainer countryList={formattedProvinceList} type='alphabetically' />
            </Box>
          )}
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default Country;
