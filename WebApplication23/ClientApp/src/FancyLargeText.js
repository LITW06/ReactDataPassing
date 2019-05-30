import React from 'react';

class FancyLargeText extends React.Component {
    render() {
        return (
            <h1 style={{
                fontSize: 100,
                fontFamily: 'Comic Sans MS',
                color: '#F124A8',
            }}>
                {this.props.text}
            </h1>
        );
    }
}

export default FancyLargeText;