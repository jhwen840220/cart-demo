
import React from 'react';
import styled from '@emotion/styled'
import logo from '../logo.svg'
const ENUM = {
    NORMAL_ITEM: '0'
}

const BasketProductGroup = (props) => {
    const {
        groupData,
        groupKey,
        children,
        footer
    } = props;
    let groupFooter = false;

    if (groupData.groupId != 0) {
        groupFooter = footer ? footer :
            <div>
                我是從 BasketProductGroup 來的預設 groupFooter。
            </div>
    }

    return (
        <ProductList>
            {groupData.groupId === ENUM.NORMAL_ITEM ?
                null :
                <div key={"groupHeader_" + groupKey} className="group-header">
                    {`${groupData.name}`}<strong>{`(${groupData.groupType})`}</strong>
                </div>
            }
            {children ?
                React.Children.map(children, (child) => {
                    /** 判斷產出的 productDetailUI */
                    const productDetailUI = child.props && child.props.productDetailUI
                        ? child.props.productDetailUI
                        : (
                            <BasketProductDetail>
                                <div className="img-block" style={{backgroundImage: `url(${child.props.item ? child.props.item.itemImg : logo})`}} />
                            </BasketProductDetail>
                        )
                    /** 規範 return 出的資料(此 demo 不考慮 kit) */
                    const returnItem = React.cloneElement(child, {
                        productDetailUI: productDetailUI,
                    })

                    return returnItem

                }) : false
            }
            {groupFooter && <GroupFooter>{groupFooter}</GroupFooter>}
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

const BasketProductDetail = styled.div`
    .img-block {
        width: 80px;
        height: 80px;
        border: 1px solid #DCDCDC;
        background-repeat: no-repeat;
        background-position: center;
    }
`

const GroupFooter = styled.div`
    padding: 8px;
    font-size: 14px;
`