import React from 'react';

export default class NumberSubmitter extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-2">
                    <input value={this.props.currentNumber} 
                    onChange={this.props.numberTextChange} 
                    type="text" className="form-control" 
                    placeholder="Enter Number" />
                </div>
                <div className="col-md-1">
                    <button onClick={this.props.submitClick} 
                    className="btn btn-primary">Add Number</button>
                </div>
            </div>
        )
    }
}