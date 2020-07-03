import React from 'react';
import styled from '@emotion/styled'
const BasketProductEntity = ({
    item,
    productDetailUI,
    discountTotal,
    backgroundColor
}) => {

    const { itemName, price } = item;
    return (
        <ProductItem backgroundColor={backgroundColor}>
            <ProductHeader>
                <div className="title">{itemName}</div>
            </ProductHeader>
            <ProductBody>
                {productDetailUI}
            </ProductBody>
            <ProductFooter>
                <span className="title">商品價格</span>
                <span className="price">${price}</span>
            </ProductFooter>
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

const ProductHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    .title {
        font-weight: bold;
        color: #323232;
    }
`

const ProductBody = styled.div`
    display: flex;
    margin-bottom: 8px;
`

const ProductFooter = styled.div`
    border-top: 1px solid #595959;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
    .title {
        color: #323232;
    }
    .price {
        color: #cc0000;
    }

`