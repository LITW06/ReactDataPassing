import React from 'react';
import { render } from 'react-dom';
import ButtonCounter from './ButtonCounter';
import FancyLargeText from './FancyLargeText';
import TextBoxStuff from './TextBoxStuff';
import NumberSubmitter from './NumberSubmitter';

class App extends React.Component {
    state = {
        color: 'green'
    }

    onColorChange = color => {
        this.setState({color});
    }
    
    render() {
        return (
            <div className="container" style={{ marginTop: 40 }}>
                {/* <ButtonCounter color={this.state.color} onColorChange={this.onColorChange} />
                <FancyLargeText text={this.state.color} /> */}
                {/* <TextBoxStuff /> */}
            </div>
            );
    }
}

render(<App />, document.getElementById('root'));