import React, { Component } from 'react';

class Lamp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            on: props.on
        };
    }
    handleClick = () => {
        this.setState({ on: !this.state.on });
    };
    render() {
        const light = this.state.on ? 'on' : 'off';
        return (
            <div className="Lamp">
                <button 
                    onClick={this.handleClick}//={() => alert('Button clicked')}
                    className={light}
                >
                    {light.toUpperCase()}
                </button>
            </div>
        );
    }
}




export default Lamp;