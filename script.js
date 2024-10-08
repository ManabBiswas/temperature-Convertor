function convertTemperature() {
    const from = document.getElementById('From').value;
    const to = document.getElementById('To').value;
    const temp = parseFloat(document.getElementById('temperature').value);

    if (isNaN(temp)) {
        alert('Please enter a valid temperature');
        return;
    }

    let Tempo;// for temporary memory & temop for temperature value

    // Celsius to Fahrenheit
    if (from === 'C' && to === 'F') {
        Tempo = (temp * 9/5) + 32;
    }
    // Celsius to Kelvin
    else if (from === 'C' && to === 'K') {
        Tempo = temp + 273.15;
    }
    // Fahrenheit to Celsius
    else if (from === 'F' && to === 'C') {
        Tempo = (temp - 32) * 5/9;
    }
    // Fahrenheit to Kelvin
    else if (from === 'F' && to === 'K') {
        Tempo = (temp - 32) * 5/9 + 273.15;
    }
    // Kelvin to Celsius
    else if (from === 'K' && to === 'C') {
        Tempo = temp - 273.15;
    }
    // Kelvin to Fahrenheit
    else if (from === 'K' && to === 'F') {
        Tempo = (temp - 273.15) * 9/5 + 32;
    } 
    else {
        Tempo = temp; // when from and to units are the same
    }

    document.getElementById('converted temperature').value = Tempo.toFixed(2);
}
