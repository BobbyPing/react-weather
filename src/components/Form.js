import React from "react";

import './Form.css';

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" autocomplete="off" placeholder="City"/>
                <input type="text" name="country" autocomplete="off" placeholder="Country"/>
                <button>Get Weather</button>
            </form>
        );
    }
};

export default Form;