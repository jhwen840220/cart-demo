import React from 'react'
import styled from '@emotion/styled'
import logo from '../logo.svg'

class BasketDefaultComponents extends React.Component {
    DefaultGroupHeader = ({ name, groupType }) => 
        <div className="group-header">
            {`${name}`}<strong>{`(${groupType})`}</strong>
        </div>

    DefaultGroupFooter = () =>  
        <div>
            我是從 BasketProductGroup 來的預設 groupFooter。
        </div>

    DefaultEntityHeader = ({ title }) => 
        <ProductHeaderContainer>
            <div className="title">{title}</div>
        </ProductHeaderContainer>

    DefaultEntityBody = ({ productDetailUI, item }) => 
        <ProductBodyContainer>
            {productDetailUI || (
                <BasketProductDetail>
                    <div className="img-block" style={{backgroundImage: `url(${item ? item.itemImg : logo})`}} />
                </BasketProductDetail>
            )}
        </ProductBodyContainer> 

    DefaultEntityFooter = ({ title, price }) =>
        <ProductFooterContainer>
            <span className="title">{title || "商品價格"}</span>
            <span className="price">${price}</span>
        </ProductFooterContainer>
} 

const result = new BasketDefaultComponents();

export default result;

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