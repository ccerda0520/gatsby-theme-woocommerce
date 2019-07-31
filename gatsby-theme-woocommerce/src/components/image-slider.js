import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { colorPrimary } from '../helpers/variables';

const StyledWrapper = styled('div')`
    position: relative;
    width: 100%;
    max-width: ${({ imageSize }) => imageSize};
    text-align: center;
`;

const StyledLeftButton = styled('button')`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: white;
    border: 2px solid ${colorPrimary};
    width: 25px;
    height: 25px;
    color: ${colorPrimary};
    font-weight: bold;
    cursor: pointer;
`;

const StyledRightButton = styled(StyledLeftButton)`
    left: unset;
    right: 0;
`;

const ImageSlider = ({ images, imageSize }) => {
    const [activeImageIndex, setActiveImageIndex] = React.useState(0);

    const setPreviousImageIndex = React.useCallback(() => {
        if (activeImageIndex === 0) {
            setActiveImageIndex(images.length - 1);
        } else {
            setActiveImageIndex(activeImageIndex - 1);
        }
    }, [images, activeImageIndex, setActiveImageIndex]);

    const setNextImageIndex = React.useCallback(() => {
        if (activeImageIndex === images.length - 1) {
            setActiveImageIndex(0);
        } else {
            setActiveImageIndex(activeImageIndex + 1);
        }
    }, [images, activeImageIndex, setActiveImageIndex]);

    if (!images.length) {
        return null;
    }

    return (
        <StyledWrapper imageSize={imageSize}>
            <StyledLeftButton aria-label="See previous image in carousel" onClick={setPreviousImageIndex}>
                {'<'}
            </StyledLeftButton>
            <Img fixed={images[activeImageIndex].localFile.childImageSharp.fixed} alt={images[activeImageIndex].alt || images[activeImageIndex].name} />
            <StyledRightButton aria-label="see next image in carousel" onClick={setNextImageIndex}>
                {'>'}
            </StyledRightButton>
        </StyledWrapper>
    );
};

ImageSlider.propTypes = {
    images: PropTypes.array.isRequired,
    imageSize: PropTypes.string.isRequired,
};

export default ImageSlider;
