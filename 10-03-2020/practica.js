const request = require('request');
const randomNumbers = require('random-numbers');

console.log('random', randomNumbers.create(1,100))
const url = "https://swapi.co/api/people/57/"
request({url}, (error, response)=>{
    const data = JSON.parse(response.body);
    console.log(data);
})
const geo = "https://api.mapbox.com/geocoding/v5/mapbox.places/Colima.json?access_token=pk.eyJ1IjoidGxhbG9jMTUiLCJhIjoiY2s3ZXVqcDluMGF1cDNubHV2aWtkcm5qZiJ9.Ex1xxvwTgn3I4kTEliuRxw"
// Si es lo mismo la key y el valor se puede dejar solo uno, url: url
request({geo:geo}, (error, response) => {
    const data =JSON.parse(response.body)
    console.log(data)
    console.log(data)
});

