import { useEffect, useState } from 'react';
const useServices = (services, title) => {
  const [main, setMain] = useState([]);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    setMain(services.filter((service) => service.title === `${title}`));
    setSections(services.filter((service) => service.title !== `${title}`));
  }, []);

  return { main, sections };
};

export default useServices;
