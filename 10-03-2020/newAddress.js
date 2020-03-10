const Address = require('./address');
const request = require('request');
const randomNumbers = require('random-numbers');

let random = (randomNumbers.create(1,11))
let newaddress= Address[random-1].Street_Address;
const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${newaddress}.json?access_token=pk.eyJ1IjoidGxhbG9jMTUiLCJhIjoiY2s3ZXVqcDluMGF1cDNubHV2aWtkcm5qZiJ9.Ex1xxvwTgn3I4kTEliuRxw`
// Si es lo mismo la key y el valor se puede dejar solo uno, url: url
request({url}, (error, response) => {
    const data =JSON.parse(response.body)
    const coor2 = (data.features[0].center[1])
    const coor1 = (data.features[0].center[0])
    let temp = `https://api.darksky.net/forecast/b9ebd9a387ff8cc0038aca60cb31f421/${coor1},${coor2}`
    request(`https://api.darksky.net/forecast/b9ebd9a387ff8cc0038aca60cb31f421/${coor1},${coor2}`, (error, response) =>{
    const dato = JSON.parse(response.body);
    console.log(dato.currently.temperature)
    })
});


