import React from 'react';

export default class NumberList extends React.Component {

    render() {
        const { numbers } = this.props;
        return (
            <ul>
                {numbers.map((i, idx) => <li key={idx}>{i}</li>)}
            </ul>
        )
    }
}

