import { useState, useEffect } from 'react';

export const useCallToAction = (callToAction, title) => {
  const [cta, setCta] = useState({});

  useEffect(() => {
    const [desiredCta] = callToAction.filter((cta) => cta.title === `${title}`);
    setCta(desiredCta);
  }, []);

  return { ...cta };
};
