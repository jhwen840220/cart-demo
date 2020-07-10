import React from 'react';
import CampaignGGEnhance from '../useCase/CampaignGGEnhance';
import CampaignGTEnhance from '../useCase/CampaignGTEnhance';
import BasketProductGroup from './BasketProductGroup';
import BasketProductEntity from './BasketProductEntity';

const basketComponentsFactory = (function() {
    const BasketComponentsFactory = function() {
        let HOCGroup = null;

        const BasketProductList = ({ data }) => {
            return (
                <div>
                    { Object.keys(data.basketProducts).length ?
                        <div style={{border: '5px solid #67AB9F', borderRadius: '10px', padding: '2.5px'}}>
                            {
                                Object.keys(data.basketProducts).map(basketGroupKey => {
                                    if (data.basketProducts[basketGroupKey] && data.basketProducts[basketGroupKey].items) {
                                        let groupData = { ...data.basketProducts[basketGroupKey] };
                                        switch (groupData.groupType) {
                                            case 'Campaign_GT':
                                                HOCGroup = CampaignGTEnhance(BasketProductGroup);
                                                break;
                                            case 'Campaign_GG':
                                                HOCGroup = CampaignGGEnhance(BasketProductGroup);
                                                break;
                                            default:
                                                HOCGroup = BasketProductGroup;
                                                break;
                                        }

                                        let entityItems = data.basketProducts[basketGroupKey].items;
                                        return (
                                            <HOCGroup
                                                key={"BasketProductGroup_" + basketGroupKey}
                                                groupData={groupData}
                                                groupKey={basketGroupKey}
                                            >
                                                {entityItems.map((item, index) => {
                                                    return (
                                                        <BasketProductEntity
                                                            key={index}
                                                            item={item}
                                                        />
                                                    )
                                                })}
                                            </HOCGroup>
                                        );
                                    }
                                    else return null
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