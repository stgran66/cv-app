import { companiesAdditionalData } from 'data';

export const getCompanyIcon = (id: number) => {
  const icon = companiesAdditionalData[id - 1].icon;
  if (!icon) {
    return null;
  }
  return icon;
};

export const getCompanyTitle = (id: number) => {
  const title = companiesAdditionalData[id - 1].title;
  if (!title) {
    return null;
  }
  return title;
};
