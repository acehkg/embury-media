import { useState, useEffect } from 'react';

const useLandingSections = (sections) => {
  const [firstSection, setFirstSection] = useState({});
  const [otherSections, setOtherSections] = useState([]);
  const [sectionsLoading, setSectionsLoading] = useState(true);

  useEffect(() => {
    const sortedSections = sections.sort(
      (a, b) => a.sectionOrder - b.sectionOrder
    );
    setFirstSection(sortedSections.shift());
    setOtherSections(sortedSections);
  }, [sections]);

  useEffect(() => {
    if (firstSection.copy !== undefined && otherSections.length !== 0) {
      setSectionsLoading(false);
    }
  }, [firstSection, otherSections]);

  return { firstSection, otherSections, sectionsLoading };
};

export default useLandingSections;
