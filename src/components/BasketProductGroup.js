
import React from 'react';
import styled from '@emotion/styled'
import BasketDefaultComponents from './BasketDefaultComponents';

const {
    DefaultGroupHeader,
    DefaultGroupFooter
} = BasketDefaultComponents;

const ENUM = {
    NORMAL_ITEM: '0'
}

const GroupHeader = ({ groupData }) => {
    if (groupData.groupId === ENUM.NORMAL_ITEM) return null;
    return (
        <DefaultGroupHeader name={groupData.name} groupType={groupData.groupType} />
    )
}

const GroupFooter = ({ groupData, footer }) => {
    if (groupData.groupId === ENUM.NORMAL_ITEM) return null;
   
    return (
        <GroupFooterContainer>
            {footer || <DefaultGroupFooter />}
        </GroupFooterContainer>
    )
}

const BasketProductGroup = (props) => {
    const {
        groupData,
        groupKey,
        children,
        footer,
        render
    } = props;

    return (
        <ProductList>
            {render || <React.Fragment>
                    <GroupHeader groupData={groupData} groupKey={groupKey} />
                    {children}
                    <GroupFooter groupData={groupData} footer={footer} />
                </React.Fragment>
            }
        </ProductList>
    )
}

export default BasketProductGroup

const ProductList = styled.div`
    position: relative;
    margin: 10px;
    border: 3px solid #6666FF;
    box-shadow: 1px 1px 5px #6666FF;
    border-radius: 10px;
    overflow: hidden;
    .group-header {
        background-color: rgba(0, 101, 191, 0.1);
        border: 1px solid #e1e1e1;
        padding: 8px 16px;
        margin: 0;
        vertical-align: baseline;
        box-sizing: border-box;
        color: #323232;
        strong {
            color: #e0609a;
        }
    }
`
const GroupFooterContainer = styled.div`
    padding: 8px;
    font-size: 14px;
`