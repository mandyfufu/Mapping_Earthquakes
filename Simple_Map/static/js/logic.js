// Add console.log to check to see if our code is working.
//console.log("working");

// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([40.7, -94.5], 4); or below

let map = L.map("mapid", {
    center: [
      40.7, -94.5
    ],
    zoom: 5
  });

  let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribute: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
    id: "mapbox/dark-v11",
    accessToken: API_KEY

  });

L.marker([34.0522, -118.2437]).addTo(map);
L.marker([40.7128, -74.0060]).addTo(map);
L.marker([41.8781, -87.6298]).addTo(map);
L.marker([29.7604, -95.3698]).addTo(map);
L.marker([41.2565, -95.9345]).addTo(map);

var cities = [{
    location: [40.7128, -74.0059],
    name: "New York",
    population: "8,550,405"
  },
  {
    location: [41.8781, -87.6298],
    name: "Chicago",
    population: "2,720,546"
  },
  {
    location: [29.7604, -95.3698],
    name: "Houston",
    population: "2,296,224"
  },
  {
    location: [34.0522, -118.2437],
    name: "Los Angeles",
    population: "3,971,883"
  },
  {
    location: [41.2524, -95.9980],
    name: "Omaha",
    population: "446,599"
  }
  ];
  
  cities.forEach(function(city) {
    console.log(city)
    L.marker(city.location).addTo(map);
  });
  
  //marker.bindPopup(popup);


//marker.bindPopup('Hello there!');

// var marker = L.marker([
//     [34.0522, -118.2437],
//     [40.7128, -74.0060],
//     [41.8781, -87.6298],
//     [29.7604, -95.3698],
//     [41.2565, -95.9345]
// ]).addTo(map);

// Add small dot to map instead of a marker but can  adjust radius
//   L.circle([34.0522, -118.2437], {
//     radius: 100
//  }).addTo(map);

// Add cirle to map instead of a marker
// L.circleMarker([34.0522, -118.2437]).addTo(map);

//   var polygon = L.polygon([
//     [34.0522, -118.2437],
//     [40.7128, -74.0060],
//     [41.8781, -87.6298],
//     [29.7604, -95.3698],
//     [41.2565, -95.9345]
//   ]).addTo(map);

  // Then we add our 'graymap' tile layer to the map.
streets.addTo(map);