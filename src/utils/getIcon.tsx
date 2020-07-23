import React from 'react';
import { AiOutlineSafety } from 'react-icons/ai';
import { FaBriefcaseMedical, FaHospitalSymbol } from 'react-icons/fa';
import { GiDeathZone } from 'react-icons/gi';
import { theme } from '../theme/muiTheme';

const getIcon: (
  type: string | undefined,
) =>
  | {
      icon: JSX.Element;
      color: string;
    }
  | undefined = (type: string | undefined) => {
  if (type === 'Confirmed') {
    return {
      icon: <FaHospitalSymbol size={25} color={theme.palette.primary.light} />,
      color: theme.palette.primary.light,
    };
  } else if (type === 'Recovered') {
    return {
      icon: <AiOutlineSafety size={25} color={theme.palette.success.light} />,
      color: theme.palette.success.light,
    };
  } else if (type === 'Deaths') {
    return { icon: <GiDeathZone size={25} color={theme.palette.error.main} />, color: theme.palette.error.main };
  } else if (type === 'New cases') {
    return {
      icon: <FaBriefcaseMedical size={25} color={theme.palette.success.main} />,
      color: theme.palette.success.main,
    };
  }
};

export interface CountryContainerOption {
  name: string;
  styleName: string;
  icon: JSX.Element;
  value: number;
}

const getCountryContainerOptions = (
  valueForConfirmed: number,
  valueForRecovered: number,
  valueForDeaths: number,
  valueForNewCases: number,
  classes: any,
) => {
  return [
    {
      name: 'Confirmed',
      icon: <FaHospitalSymbol className={classes.icon} size={25} color={theme.palette.primary.light} />,
      styleName: 'confirmedText',
      value: valueForConfirmed,
    },
    {
      name: 'Recovered',
      icon: <AiOutlineSafety className={classes.icon} size={25} color={theme.palette.success.light} />,
      styleName: 'recoveredText',
      value: valueForRecovered,
    },
    {
      name: 'Deaths',
      icon: <GiDeathZone className={classes.icon} size={25} color={theme.palette.error.main} />,
      styleName: 'deathsText',
      value: valueForDeaths,
    },
    {
      name: 'New cases',
      icon: <FaBriefcaseMedical className={classes.icon} size={25} color={theme.palette.success.main} />,
      styleName: 'newCases',
      value: valueForNewCases,
    },
  ];
};

export { getIcon, getCountryContainerOptions };
