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

export { getIcon };
