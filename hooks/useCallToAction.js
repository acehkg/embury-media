import { useState, useEffect } from 'react';

export const useCallToAction = (callToAction) => {
  const [primary, setPrimary] = useState();
  const [secondary, setSecondary] = useState();
  const [contact, setContact] = useState();

  useEffect(() => {
    callToAction.map((cta) => {
      if (cta.title == 'Hero Primary') {
        setPrimary(cta);
      }
    });

    callToAction.map((cta) => {
      if (cta.title == 'Hero Secondary') {
        setSecondary(cta);
      }
    });

    callToAction.map((cta) => {
      if (cta.title == 'Contact') {
        setContact(cta);
      }
    });
  }, []);

  return { primary, secondary, contact };
};
