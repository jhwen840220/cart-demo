import React from 'react';

const BasketEnhances = (BaseComponent) => {
    return class extends React.Component {
        static displayName = 'BasketEnhances';
        WrappedComponent = BaseComponent;
        constructor(props) {
            super(props);
            props && props.decorators && props.decorators.map((decorator) => {
                return this.WrappedComponent = decorator(this.WrappedComponent)
            })
        }
        render() {
            const {
                WrappedComponent
            } = this;

            return (
                <WrappedComponent {...this.props}>
                    {this.props.children}
                </WrappedComponent>
            );
        }
    }
}

export default BasketEnhances;