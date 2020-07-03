import React from 'react';
const CampaignGTEnhance = ComposedComponent => class extends React.Component {
    static displayName = 'CampaignGTEnhance';
    render() {
        const {
            children,
            groupData,
            groupKey,
        } = this.props;

        const groupFooter =
            <div key={"groupFooter_" + groupData.groupId + "_" + groupKey} className="group-footer">
                <div>
                    我是
                    <span style={{color: '#cc1552', fontWeight: 'bold'}}> CampaignGTEnhance </span>
                    的 groupFooter。
                </div>
            </div>
        const AdditionalChild = ({children}) => {
            return (
                <div style={{padding: '8px', margin: '10px', border: '2px solid #CC0066', boxShadow: '1px 1px 5px #CC0066'}}>
                    {children}
                </div>
            )
        }
        const AdditionalChildWithProductDetailUI = ({children, productDetailUI}) => {
            return (
                <div style={{padding: '8px', margin: '10px', border: '2px solid #CC0066', boxShadow: '1px 1px 5px #CC0066'}}>
                    {children}
                    {productDetailUI}
                    <span style={{fontSize: '14px', color: '#04ae65', fontWeight: 'bold'}}>↑↑↑但我有放組好的 productDetailUI</span>
                </div>
            )
        }

        return (
            <ComposedComponent {...this.props} footer={groupFooter}>
                {React.Children.map(children, (child) => {
                    return child &&
                        React.cloneElement(child, {
                            title: "GT title(CampaignGTEnhance)"
                        })
                })}
                <AdditionalChild>
                    <div style={{fontSize: '14px', color: '#ad6655', fontWeight: 'bold'}}>我是一個額外增加的child(CampaignGTEnhance)</div>
                </AdditionalChild>
                <AdditionalChildWithProductDetailUI>
                    <div style={{fontSize: '14px', color: '#cc7509', fontWeight: 'bold'}}>我是另一個額外增加的child(CampaignGTEnhance)</div>
                </AdditionalChildWithProductDetailUI>
            </ComposedComponent>
        );
    }
}


export default CampaignGTEnhance;