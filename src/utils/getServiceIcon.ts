import { serviceIcons } from 'data';

export const getServiceIcon = (id: number) => {
  const icon = serviceIcons[id - 1];
  if (!icon) {
    return null;
  }
  return icon;
};
