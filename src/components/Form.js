import React from "react";

const Form = props => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="City..." />
        <input type="text" name="country" placeholder="Country..." />
        <button className="waves-effect waves-light btn">Get Weather</button>
    </form>
);

export default Form;