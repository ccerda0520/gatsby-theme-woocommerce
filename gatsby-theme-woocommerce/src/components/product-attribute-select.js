import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled('select')`
    padding: 10px 15px;
    margin-bottom: 20px;
`;

const ProductAttributeSelect = ({ attribute }) => {
    const [activeOption, setActiveOption] = React.useState('');

    if (!attribute.visible) {
        return null;
    }

    return (
        <StyledSelect value={activeOption} onChange={(e) => setActiveOption(e.target.value)} aria-label={`Select a ${attribute.name}`}>
            <option value="">{`Select ${attribute.name}`}</option>
            {attribute.options.map((option) => (
                <option value={option} key={option}>
                    {option}
                </option>
            ))}
        </StyledSelect>
    );
};

ProductAttributeSelect.propTypes = {
    attribute: PropTypes.object.isRequired,
};

export default ProductAttributeSelect;
