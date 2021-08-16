import Slide from './Slide';
import MotionBox from '../animation/MotionBox';

const ServiceSlides = ({ sections }) => {
  return (
    <MotionBox>
      {sections.map((section, index) => {
        return (
          <Slide
            key={index}
            image={section.image}
            title={section.title}
            description={section.description}
            imageWidth={section.imageWidth}
            imageHeight={section.imageHeight}
          />
        );
        x;
      })}
    </MotionBox>
  );
};

export default ServiceSlides;
