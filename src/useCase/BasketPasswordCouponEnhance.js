import React from 'react';

const BasketPasswordCouponEnhance = ComposedComponent => (class extends React.Component {

    static displayName = "BasketPasswordCouponEnhance";

    constructor(props) {
        super(props);
    }

    render() {
        const {
            discountTotal
        } = this.props;
        return (
            <ComposedComponent {...this.props} discountTotal={[
                discountTotal ? discountTotal : false,
                <div key="BasketPasswordCouponEnhance" style={{borderRadius: '2px', color: 'gray', padding: '4px', margin: '0 6px', border: '2px solid #FFD447', fontSize: '12px'}}>透過BasketPasswordCouponEnhance 加上去的child</div>
            ]} />
        );
    }
});

export default BasketPasswordCouponEnhance