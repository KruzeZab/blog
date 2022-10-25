import PropTypes from 'prop-types';
import {
  ArrowBackIosNew,
  ArrowForwardIos,
} from '@mui/icons-material';
import ElasticCarousel from 'react-elastic-carousel';
import CarouselButton from '../styled/CarouseButton.styled';

import './Carousel.css';

const Carousel = ({ children }) => {
  const renderArrow = ({ type, onClick, isEdge }) => {
    const icon =
      type === 'PREV' ? <ArrowBackIosNew /> : <ArrowForwardIos />;

    return (
      <CarouselButton
        className="rect-arrow"
        onClick={onClick}
        disabled={isEdge}
        aria-label="carousel controls"
      >
        {icon}
      </CarouselButton>
    );
  };

  return (
    <ElasticCarousel
      renderArrow={renderArrow}
      pagination={false}
      breakPoints={[
        { width: 1, itemsToShow: 1 },
        {
          width: 600,
          itemsToShow: 2,
          itemsToScroll: 2,
        },
        { width: 850, itemsToShow: 3 },
        {
          width: 1150,
          itemsToShow: 4,
          itemsToScroll: 2,
        },
      ]}
    >
      {children}
    </ElasticCarousel>
  );
};

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Carousel;
