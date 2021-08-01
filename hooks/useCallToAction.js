import { useState, useEffect } from 'react';

export const useCallToAction = (callToAction) => {
  const [primary, setPrimary] = useState();
  const [secondary, setSecondary] = useState();
  const [contact, setContact] = useState();

  useEffect(() => {
    callToAction.map((cta) => {
      if (cta.title == 'Hero Primary') {
        setPrimary({ buttonVariant: cta.buttonVariant, copy: cta.copy });
        console.log(primary);
      }
    });

    callToAction.map((cta) => {
      if (cta.title == 'Hero Secondary') {
        setSecondary(cta);
        console.log(secondary);
      }
    });

    callToAction.map((cta) => {
      if (cta.title == 'Contact') {
        setContact(cta);
        console.log(contact);
      }
    });
  }, []);

  return { primary, secondary, contact };
};
