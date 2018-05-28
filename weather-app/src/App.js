import React from "react";

import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "234fafb69924bece15e3f9c9d25e9a63";

// Initialize a component
class App extends React.Component {
    // State => an object that lives in a Component and keeps track of changing data withing a component (as a result of a user interaction, form submit, etc.)
    state =  {
        //Initial state
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }


    //This is a props
    //can be passed like a HTML attribute
    //Passing this props in Form meaning that Form has access to this props
    getWeather = async (event) => {
        //prevent full page refresh (eg. in single page app)
        event.preventDefault();

        // Grab user input from form
        const city = event.target.elements.city.value;
        const country = event.target.elements.country.value;

        // Using Fetch API to fetch data
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&mode=json&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();



        //change states value
        this.setState({
            temperature: data.main.temp,
            city: ,
            country: ,
            humidity: ,
            description: ,
            error: ""
        });


    }

    // Display data that goes inside the Component
    // return jsx => converted to js by Babel
    // can only return one pair of element
    render() {
        return (
            <div>
                <Title />
                <Form getWeather={this.getWeather}/>
            <Weather
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}
            />
            </div>
        );
    }
}

// Make component available
export default App;
