import React from 'react';
import styled from '@emotion/styled'
import BasketDefaultComponents from './BasketDefaultComponents';

const {
    DefaultEntityHeader,
    DefaultEntityBody,
    DefaultEntityFooter
} = BasketDefaultComponents;

const EntityHeader = ({ title }) => 
    <DefaultEntityHeader title={title} />

const EntityBody = ({ productDetailUI, item }) => 
    <DefaultEntityBody productDetailUI={productDetailUI} item={item} />

const EntityFooter = ({ price }) => 
    <DefaultEntityFooter price={price} />

const BasketProductEntity = ({
    item,
    productDetailUI,
    discountTotal,
    backgroundColor
}) => {
    const { itemName, price } = item;

    return (
        <ProductItem backgroundColor={backgroundColor}>
            <EntityHeader title={itemName} /> 
            <EntityBody productDetailUI={productDetailUI} item={item} />
            <EntityFooter price={price} />
            {discountTotal}
        </ProductItem>
    )
}

export default BasketProductEntity

const ProductItem = styled.div`
    padding: 8px;
    margin: 10px;
    border: 2px solid #ED7418;
    box-shadow: 1px 1px 5px #ED7418;
    background-color: ${({backgroundColor})=> backgroundColor};
`