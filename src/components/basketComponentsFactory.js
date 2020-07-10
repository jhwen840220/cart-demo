import React from 'react';
import CampaignGGEnhance from '../useCase/CampaignGGEnhance';
import CampaignGTEnhance from '../useCase/CampaignGTEnhance';
import BasketEntityEnhance from '../useCase/BasketEntityEnhance';
import BasketProductGroup from './BasketProductGroup';
import BasketProductEntity from './BasketProductEntity';

const basketComponentsFactory = (function() {
    const BasketComponentsFactory = function() {
        let Group = null;
        let Entity = null;

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
                                                Group = CampaignGTEnhance(BasketProductGroup);
                                                break;
                                            case 'Campaign_GG':
                                                Group = CampaignGGEnhance(BasketProductGroup);
                                                break;
                                            default:
                                                Group = BasketProductGroup
                                                break;
                                        }

                                        return (
                                            <Group
                                                key={"BasketProductGroup_" + basketGroupKey}
                                                groupData={groupData}
                                                groupKey={basketGroupKey}
                                            >
                                                {data.basketProducts[basketGroupKey].items.map((item, index) => {
                                                    Entity = BasketEntityEnhance(BasketProductEntity);
                                                    return (
                                                        <Entity
                                                            key={index}
                                                            item={item}
                                                        />
                                                    )
                                                })}
                                            </Group>
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