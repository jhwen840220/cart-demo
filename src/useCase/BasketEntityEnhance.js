import React from 'react';
import styled from '@emotion/styled'

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

const BasketEntityEnhance = ComposedComponent => (class extends React.Component {

    static displayName = "BasketPasswordCouponEnhance";

    render() {
        let discountTotal = new DiscountTotal_BPC();
        if (true) {
            discountTotal = new DiscountTotal_BC(discountTotal)
        }

        return (
            <ComposedComponent {...this.props} discountTotal={discountTotal} />
        );
    }
});

export default BasketEntityEnhance


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