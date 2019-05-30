import React from 'react';
import randomColor from 'randomcolor';

class ButtonCounter extends React.Component {

    constructor() {
        super();
        this.state = {
            incrementAmount: 1,
            counter: 0
        };
    }

    incrementClick = () => {
        const { counter, incrementAmount } = this.state;
        this.setState({ counter: counter + incrementAmount });
    }

    incrementAmountClick = () => {
        this.setState({ incrementAmount: this.state.incrementAmount + 1 });
    }

    changeColorClick = () => {
        const color = randomColor();
        this.props.onColorChange(color);
    }

    render() {
        const { counter, incrementAmount } = this.state;
        const { color } = this.props;
        return (
            <div className="row">
                <div className="col-md-2">
                    <h3 style={{color, fontSize: 100}}>{counter}</h3>
                    <button className="btn btn-primary" onClick={this.incrementClick}>Increment</button>
                </div>
                <div className="col-md-2">
                    <h3>{incrementAmount}</h3>
                    <button className="btn btn-success" onClick={this.incrementAmountClick}>Increment</button>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-warning" onClick={this.changeColorClick}>Change Color</button>
                </div>

            </div>
            );
    }
}

export default ButtonCounter;