
const apiKey = '9640dc04eb6e35c56fe5517a5dee5305';

const url = `https://api.openweathermap.org/data/2.5/weather?q=miami&appid=${apiKey}&units=imperial`;

// We make a fetch(server-side) request to openweathermap for current weather data
// The url must match the server's criteria for a request
fetch(url)
  // The first then callback function will be put to the side until the server responds back
  .then(function (responseObj) {
    // Passing the parsed json promise object to the next then
    return responseObj.json();
  })
  .then(function (data) {
    // Once we have the data, we create some html utilizing that data in some way
    const html = `
    <h2>Temp: ${data.main.temp}</h2>
    `;
    // Target an existing element in the DOM
    const outputDiv = document.querySelector('.output');

    // Output our completed html into the DOM/Window
    outputDiv.innerHTML = html;
  })
  .catch(function (error) {
    console.log(error);
  });




// fetch(url)
//   .then(function (responseObj) {
//     const dataPromise = responseObj.json();

//     dataPromise.then(function (data) {
//       console.log(data);
//     });
//   })
//   .catch(function (error) {
//     console.log(error);
//   });