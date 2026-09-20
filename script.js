function convertTemperature() {
    // Get the input value
    let temperature = Number(document.getElementById("temperature").value);

    // Get the selected unit
    let unit = document.getElementById("unit").value;

    // Get the result area
    let result = document.getElementById("result");

    // Check if input is empty or invalid
    if (document.getElementById("temperature").value === "" || isNaN(temperature)) {
        result.innerHTML = "<p>Please enter a valid temperature.</p>";
        return;
    }

    // Absolute zero validation
    if (unit === "celsius" && temperature < -273.15) {
        result.innerHTML = "<p>Temperature cannot be below absolute zero (-273.15°C).</p>";
        return;
    }
    if (unit === "fahrenheit" && temperature < -459.67) {
        result.innerHTML = "<p>Temperature cannot be below absolute zero (-459.67°F).</p>";
        return;
    }
    if (unit === "kelvin" && temperature < 0) {
        result.innerHTML = "<p>Kelvin temperature cannot be below 0 K.</p>";
        return;
    }

    let celsius;
    let fahrenheit;
    let kelvin;

    // Convert from Celsius
    if (unit === "celsius") {
        celsius = temperature;
        fahrenheit = (temperature * 9 / 5) + 32;
        kelvin = temperature + 273.15;
    } 
    // Convert from Fahrenheit
    else if (unit === "fahrenheit") {
        fahrenheit = temperature;
        celsius = (temperature - 32) * 5 / 9;
        kelvin = celsius + 273.15;
    } 
    // Convert from Kelvin
    else if (unit === "kelvin") {
        kelvin = temperature;
        celsius = temperature - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
    }

    // Display results
    result.innerHTML = `
        <p><strong>Celsius:</strong> ${celsius.toFixed(2)} °C</p>
        <p><strong>Fahrenheit:</strong> ${fahrenheit.toFixed(2)} °F</p>
        <p><strong>Kelvin:</strong> ${kelvin.toFixed(2)} K</p>
    `;
}