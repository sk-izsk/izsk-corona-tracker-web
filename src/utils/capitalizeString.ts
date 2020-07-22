const capitalizeString: (str: string) => string = (str: string) => {
  return str[0].toUpperCase() + str.slice(1);
};

export { capitalizeString };
