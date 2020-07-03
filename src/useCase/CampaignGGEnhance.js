import React from 'react';
const CampaignGGEnhance = ComposedComponent => class extends React.Component {
    static displayName = 'CampaignGGEnhance';
    render() {
        const {
            children
        } = this.props;

        const groupFooter =
            <div style={{backgroundColor: '#aaeedd'}}>
                我是<span style={{color: '#cc1552', fontWeight: 'bold'}}> CampaignGGEnhance </span>的 groupFooter。
            </div>

        return (
            <ComposedComponent {...this.props} footer={groupFooter}>
                {React.Children.map(children, (child) => {
                    return child &&
                        React.cloneElement(child, {
                            title: "GG title(CampaignGGEnhance)",
                            backgroundColor: '#aaeedd'
                        })
                })}
            </ComposedComponent>
        );
    }
}

export default CampaignGGEnhance;