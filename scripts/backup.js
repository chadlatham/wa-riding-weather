// (function() {
//   var ridingAreas = require('ridingareas.js');
//   console.log(ridingAreas);
// })();


// Textbelt API proof of concept
// curl -X POST http://textbelt.com/text -d number=2533357059 -d "message=I sent this message for free with textbelt.com"

// Textbelt API JavaScript proof of concept
// const url = 'http://textbelt.com/text';
// let phoneNumber = 2533357059;
// let textMessage = 'From JavaScript';
//
// $.post( "http://textbelt.com/text", { number: phoneNumber, message: textMessage })
//   .done(function(data) {
//     console.log(data);
//   }
// );




// http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID={APIKEY}
// http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}
// API KEY: 4241da6fa29994783519776c66246929

// {"_id":5805687,"name":"Olympia","country":"US","coord":{"lon":-122.900703,"lat":47.037868}}

// Do not send requests more then 1 time per 10 minutes from one device/one API key. Normally the weather is not changing so frequently.

// 2 Use the name of the server as api.openweathermap.org. Please never use the IP address of the server.

// 3 Call API by city ID instead of city name, city coordinates or zip code. In this case you get precise respond exactly for your city.

// 4 Free account has limitation of capacity and data availability. If you do not get respond from server do not try to repeat your request immediately, but only after 10 min. Also we recommend to store your previous request data.

// const apiKey = '4241da6fa29994783519776c66246929';
// const url = 'http://api.openweathermap.org/data/2.5/';
// let cityId = '5788054'
// let lon = -122.900703;
// let lat = 47.037868;
// let timeFrame = 'forecast'
// let method = '/city'

// To search by city code
// let query = `${url}${timeFrame}/${method}?id=${cityId}&APPID=${OWMKey}`;

// To search by latitude and longitude
// let query = `${url}${timeFrame}?APPID=${OWMKey}&lat=${lat}&lon=${lon}&units=imperial`
// let queryString = 'http://api.openweathermap.org/data/2.5/forecast?APPID=4241da6fa29994783519776c66246929&lat=47.037868&lon=-122.900703'

// $xhr = $.getJSON(query);
// $xhr.done((data) => {
//   console.log(data);
// });

// console.log(ridingAreas);
// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
// var jqxhr = $.getJSON( "example.json", function() {
//   console.log( "success" );
// })
//   .done(function() {
//     console.log( "second success" );
//   })
//   .fail(function() {
//     console.log( "error" );
//   })
//   .always(function() {
//     console.log( "complete" );
//   });
//
// // Perform other work here ...
//
// // Set another completion function for the request above
// jqxhr.complete(function() {
//   console.log( "second complete" );
// });

// google.maps.event.addListener(marker, 'click', function() {
//         infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
//           'Place ID: ' + place.place_id + '<br>' +
//           place.formatted_address + '</div>');
//         infowindow.open(map, this);
//       });
