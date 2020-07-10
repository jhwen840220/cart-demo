
import React from 'react';
import styled from '@emotion/styled'

const ENUM = {
    NORMAL_ITEM: '0'
}

const GroupHeader = ({ groupData }) => {
    if (groupData.groupId === ENUM.NORMAL_ITEM) return null;
    return (
        <div className="group-header">
            {`${groupData.name}`}<strong>{`(${groupData.groupType})`}</strong>
        </div>
    )
}

const GroupFooter = ({ groupData, groupFooter }) => {
    if (groupData.groupId === ENUM.NORMAL_ITEM) return null;
    return (
        <GroupFooterContainer>
            {groupFooter || <div>
                我是從 BasketProductGroup 來的預設 groupFooter。
            </div>}
        </GroupFooterContainer>
    )
}

const BasketProductGroup = (props) => {
    const {
        groupProps = {},
        entityProps = {},
        groupData,
        groupKey,
        children
    } = props;

    const { groupFooter } = groupProps;
    
    return (
        <ProductList>      
            <GroupHeader groupData={groupData} groupKey={groupKey} />
            {React.Children.map(children, (child) => {
                return (
                    React.cloneElement(child, { entityProps })
                )
            })}
            <GroupFooter groupData={groupData} groupFooter={groupFooter} />
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