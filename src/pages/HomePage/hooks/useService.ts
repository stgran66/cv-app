import { useState, useEffect } from 'react';

import { fetchServices } from 'services/mockapi';
import type { Service } from 'types/shared';

export const useService = () => {
  const [services, setServices] = useState<Service[] | []>([]);
  useEffect(() => {
    async function getServices() {
      const data = await fetchServices();
      setServices(data);
    }
    getServices();
  }, []);

  return services;
};
