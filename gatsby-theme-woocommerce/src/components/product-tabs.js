import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { colorBorder } from '../helpers/variables';

const StyledTabList = styled('ul')`
    display: flex;
    flex-direction: row;
    width: 100%;
    list-style: none;
    margin: 40px 0 0 0;
    padding: 0 10px;
    list-style-type: none;
    border-bottom: 1px solid ${colorBorder};
`;

const StyledTabListItem = styled('li')`
    &:not(:last-of-type) {
        margin-right: 15px;
    }
`;

const StyledTabButton = styled('button')`
    display: inline-block;
    font-size: 18px;
    line-height: 1;
    padding: 10px 15px;
    background: white;
    border: 1px solid ${colorBorder};
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    margin-bottom: -1px;
    cursor: pointer;
    &[aria-selected='true'] {
        border-bottom-color: white;
    }
`;
const StyledTabPanel = styled('div')`
    padding: 0 10px;
`;

const ProductTabs = ({ tabs }) => {
    const [activeTabIndex, setActiveTabIndex] = React.useState(0);
    if (!tabs.length) {
        return null;
    }

    return (
        <>
            <StyledTabList role="tablist">
                {tabs.map((tab, index) => (
                    <StyledTabListItem key={tab.id} role="presentation">
                        <StyledTabButton role="tab" aria-selected={tabs[activeTabIndex].id === tab.id} onClick={() => setActiveTabIndex(index)}>
                            {tab.title}
                        </StyledTabButton>
                    </StyledTabListItem>
                ))}
            </StyledTabList>
            <StyledTabPanel role="tabpanel" aria-label={tabs[activeTabIndex].title} dangerouslySetInnerHTML={{ __html: tabs[activeTabIndex].content }} />
        </>
    );
};

ProductTabs.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.any.isRequired,
        }).isRequired,
    ),
};

export default ProductTabs;
