import React from "react";

const Weather = props => (
    <div>
        {/* set condition to display desired output */}
        {
            props.city && props.country && <p> Location:
	 		<span className="weather__value"> {props.city}, {props.country} </span>
            </p>
        }
        {
            props.temperature && <p> Temperature:
	 		<span className="weather__value"> {props.temperature} </span>
            </p>
        }
        {
            props.humidity && <p> Humidity:
	 		<span className="weather__value"> {props.humidity} </span>
            </p>
        }
        {
            props.description && <p> Conditions:
	 		<span className="weather__value"> {props.description} </span>
            </p>
        }
        {
            props.error && <p className="weather__error">{props.error}</p>
        }
    </div>
);

export default Weather;