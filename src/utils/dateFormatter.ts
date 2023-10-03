export const getMonthYear = (date: string) => {
  const dateObj = new Date(date);
  const dateToDisplay = dateObj.toLocaleString('default', {
    month: 'long',
    year: 'numeric',
  });
  return dateToDisplay;
};

export const getDayMonth = (date: string) => {
  const dateObj = new Date(date);
  const dateToDisplay = dateObj.toLocaleString('default', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  return dateToDisplay;
};
