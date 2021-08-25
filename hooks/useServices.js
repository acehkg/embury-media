import { useState, useEffect } from 'react';

const useServices = (services) => {
  const [sortedServices, setSortedServices] = useState([]);
  const [servicesLoading, setServicesLoading] = useState(true);

  useEffect(() => {
    setSortedServices(services.sort((a, b) => a.sectionOrder - b.sectionOrder));
  }, [services]);

  useEffect(() => {
    if (sortedServices.length !== 0) {
      setServicesLoading(false);
    }
  }, [sortedServices]);

  return { sortedServices, servicesLoading };
};

export default useServices;
