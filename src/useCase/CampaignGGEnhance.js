import React from 'react';

const GroupFooter = () =>
    <div style={{backgroundColor: '#aaeedd'}}>
        我是<span style={{color: '#cc1552', fontWeight: 'bold'}}> CampaignGGEnhance </span>的 groupFooter。
    </div>

const CampaignGGEnhance = ComposedComponent => class extends React.Component {
    static displayName = 'CampaignGGEnhance';
    render() {

        return (
            <ComposedComponent 
                {...this.props} 
                groupProps={{ groupFooter: <GroupFooter /> }} 
                entityProps={{ entityBGColor: '#aaeedd' }}
            />
        );
    }
}

export default CampaignGGEnhance;