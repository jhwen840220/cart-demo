import React from 'react';

const GroupFooter = () =>
    <div className="group-footer">
        我是<span style={{color: '#cc1552', fontWeight: 'bold'}}> CampaignGTEnhance </span>的 groupFooter。
    </div>
    
const CampaignGTEnhance = ComposedComponent => class extends React.Component {
    static displayName = 'CampaignGTEnhance';
    render() {
        const {
            children,
        } = this.props;

        const AdditionalChild = ({children}) => {
            return (
                <div style={{padding: '8px', margin: '10px', border: '2px solid #CC0066', boxShadow: '1px 1px 5px #CC0066'}}>
                    {children}
                </div>
            )
        }

        return (
            <ComposedComponent 
                {...this.props}
                groupProps={{ groupFooter: <GroupFooter /> }} 
                entityProps={{ entityBGColor: '#65c963', entityPriceTitle: "滿額贈價格" }}
            >
                <AdditionalChild>
                    <div style={{fontSize: '14px', color: '#ad6655', fontWeight: 'bold'}}>我是一個額外增加的child(CampaignGTEnhance)</div>
                </AdditionalChild>
                {children} 
            </ComposedComponent>
        );
    }
}


export default CampaignGTEnhance;