import React from 'react';
import { render } from 'react-dom';
import NumberSubmitter from './NumberSubmitter';
import NumberList from './NumberList';

class App extends React.Component {
    state = {
        currentNumber: '',
        allNumbers: []
    }

    onNumberTextChange = e => {
        this.setState({ currentNumber: e.target.value });
    }

    onSubmitClick = () => {
        const copy = [...this.state.allNumbers];
        copy.push(this.state.currentNumber);
        this.setState({currentNumber: '', allNumbers: copy});
    }

    render() {
        return (
            <div className="container" style={{ marginTop: 40 }}>
                <NumberSubmitter 
                currentNumber={this.state.currentNumber}
                numberTextChange={this.onNumberTextChange}
                submitClick={this.onSubmitClick} />
                <NumberList numbers={this.state.allNumbers} />
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));