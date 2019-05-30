import React from 'react';


export default class TextBoxStuff extends React.Component {
    state = {
        text: ''
    }

    textboxChange = e => {
        this.setState({text: e.target.value});
    }

    clearClick = () => {
        this.setState({text: ''});
    }

    render() {
        return (
            <div>
                <input value={this.state.text} 
                type="text" 
                onChange={e => console.log(e.target.value)} />
                <h1>{this.state.text}</h1>
                <button onClick={this.clearClick}>Clear</button>
            </div>
        )
    }
}