const getInformation = (confirmed: number, recovered: number, deaths: number) => {
  return [
    {
      name: 'Confirmed',
      to: '/confirmed',
      value: confirmed,
    },
    {
      name: 'Recovered',
      to: '/recovered',
      value: recovered,
    },
    {
      name: 'Deaths',
      to: '/deaths',
      value: deaths,
    },
  ];
};

export { getInformation };
