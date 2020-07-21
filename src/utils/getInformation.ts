const getInformation = (confirmed: number, recovered: number, deaths: number, newCases?: number) => {
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
      name: 'New cases',
      to: '/new-cases',
      value: newCases,
    },
    {
      name: 'Deaths',
      to: '/deaths',
      value: deaths,
    },
  ];
};

export { getInformation };
