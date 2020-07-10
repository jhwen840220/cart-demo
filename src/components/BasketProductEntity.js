import React from 'react';
import styled from '@emotion/styled'
import logo from '../logo.svg'

const EntityHeader = ({ title }) => 
    <ProductHeaderContainer>
        <div className="title">{title}</div>
    </ProductHeaderContainer>

const EntityBody = ({ productDetailUI, item }) => 
    <ProductBodyContainer>
        {productDetailUI || (
            <BasketProductDetail>
                <div className="img-block" style={{backgroundImage: `url(${item ? item.itemImg : logo})`}} />
            </BasketProductDetail>
        )}
    </ProductBodyContainer> 

const EntityFooter = ({ title, price }) => 
    <ProductFooterContainer>
        <span className="title">{title || "商品價格"}</span>
        <span className="price">${price}</span>
    </ProductFooterContainer>

const DiscountTotal_BPC = function(discountTotal = []) {
    discountTotal.push(
        <BasketEntityEnhanceContainer key="BasketPasswordCouponEnhance">NewBasketPasswordCouponEnhance</BasketEntityEnhanceContainer>
    )
    return discountTotal;
}

const DiscountTotal_BC = function(discountTotal = []) {
    discountTotal.push(
        <BasketEntityEnhanceContainer key="BasketCouponEnhance">NewBasketCouponEnhance</BasketEntityEnhanceContainer>
    )
    return discountTotal;
}

const BasketProductEntity = (props) => {
    const {
        entityProps = {},
        item,
        productDetailUI
    } = props;

    const { itemName, price } = item;
    const { entityBGColor, entityPriceTitle } = entityProps;
    
    let discountTotal = new DiscountTotal_BPC();
    if (true) {
        discountTotal = new DiscountTotal_BC(discountTotal)
    }

    return (
        <ProductItem entityBGColor={entityBGColor}>
            <EntityHeader title={itemName} /> 
            <EntityBody productDetailUI={productDetailUI} item={item} />
            <EntityFooter title={entityPriceTitle} price={price} />
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
    background-color: ${({entityBGColor})=> entityBGColor};
`
const BasketEntityEnhanceContainer = styled.div`
    border-radius: 2px; 
    color: gray; 
    padding: 4px; 
    margin: 0 6px 10px 6px; 
    border: 2px solid #FFD447;
    font-size: 12px;
    &:last-child {
        margin-bottom: 0;
    }
`
const ProductHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    .title {
        font-weight: bold;
        color: #323232;
    }
`
const ProductBodyContainer = styled.div`
    display: flex;
    margin-bottom: 8px;
`
const BasketProductDetail = styled.div`
    .img-block {
        width: 80px;
        height: 80px;
        border: 1px solid #DCDCDC;
        background-repeat: no-repeat;
        background-position: center;
    }
`
const ProductFooterContainer = styled.div`
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