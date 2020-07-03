import React from 'react';
import BasketEnhances from '../useCase/BasketEnhances';
import CampaignGGEnhance from '../useCase/CampaignGGEnhance';
import CampaignGTEnhance from '../useCase/CampaignGTEnhance';
import BasketPasswordCouponEnhance from '../useCase/BasketPasswordCouponEnhance';
import BasketProductGroup from './BasketProductGroup';
import BasketProductEntity from './BasketProductEntity';


const basketComponentsFactory = (function() {

    const BasketComponentsFactory = function() {
        const BasketProductWithEnhances = BasketEnhances(BasketProductEntity);
        const BasketProductGroupWithEnhances = BasketEnhances(BasketProductGroup);

        const BasketProductList = ({data}) => {
            return (
                <div>
                    { Object.keys(data.basketProducts).length ?
                        <div style={{border: '5px solid #67AB9F', borderRadius: '10px', padding: '2.5px'}}>
                            {
                                Object.keys(data.basketProducts).map(basketGroupKey => {
                                    if (data.basketProducts[basketGroupKey] && data.basketProducts[basketGroupKey].items) {
                                        let groupData = { ...data.basketProducts[basketGroupKey] };
                                        let groupDecorators = [];
                                        switch (groupData.groupType) {
                                            case 'Campaign_GT':
                                                groupDecorators.push(CampaignGTEnhance);
                                                break;
                                            case 'Campaign_GG':
                                                groupDecorators.push(CampaignGGEnhance);
                                                break;
                                            default:
                                                break;
                                        }

                                        return (
                                            <BasketProductGroupWithEnhances
                                                key={"BasketProductGroup_" + basketGroupKey}
                                                groupData={groupData}
                                                groupKey={basketGroupKey}
                                                decorators={groupDecorators}
                                            >
                                                {data.basketProducts[basketGroupKey].items.map((item, index) => {
                                                    let decorators = [];
                                                    decorators.push(BasketPasswordCouponEnhance);
                                                    return (
                                                        <BasketProductWithEnhances
                                                            key={index}
                                                            decorators={decorators}
                                                            item={item}
                                                        />
                                                    )
                                                })}
                                            </BasketProductGroupWithEnhances>
                                        );
                                    }
                                })
                            }
                        </div> :
                        null
                    }
                </div>
            )
        }
        const components = {
            BasketProductList
        }

        this.getComponents = () => {
            return components
        }
    }
    return new BasketComponentsFactory();

})();

export default basketComponentsFactory;