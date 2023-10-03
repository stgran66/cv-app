import { useState, useEffect } from 'react';

import { fetchExperience } from 'services/mockapi';

interface Experience {
  id: number;
  company: string;
  description: string;
  from: string;
  to: string;
}

export const useExperience = () => {
  const [experiences, setExperiences] = useState<Experience[] | []>([]);
  useEffect(() => {
    async function getExperiences() {
      const data = await fetchExperience();
      if (data) {
        setExperiences(data);
      }
    }
    getExperiences();
  }, []);

  return experiences;
};
