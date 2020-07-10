import React from 'react';

const GroupFooter = () =>
    <div style={{backgroundColor: '#aaeedd'}}>
        我是<span style={{color: '#cc1552', fontWeight: 'bold'}}> CampaignGGEnhance </span>的 groupFooter。
    </div>

const CampaignGGEnhance = ComposedComponent => class extends React.Component {
    static displayName = 'CampaignGGEnhance';
    render() {
        const {
            children
        } = this.props;

        return (
            <ComposedComponent {...this.props} footer={<GroupFooter />}>
                {React.Children.map(children, (child) => {
                    return child &&
                        React.cloneElement(child, {
                            backgroundColor: '#aaeedd'
                        })
                })} 
            </ComposedComponent>
        );
    }
}

export default CampaignGGEnhance;