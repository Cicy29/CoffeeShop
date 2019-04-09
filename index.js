/*var request = new XMLHttpRequest()

request.open('GET', 'https://www.themealdb.com/api/json/v1/1/latest.php', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = this.response;

  if (request.status >= 200 && request.status < 400) {
    data.forEach(meals => {
      console.log(meals)
    })
  } else {
    console.log('error')
  }
}

request.send()*/

fetch('https://www.themealdb.com/api/json/v1/1/latest.php')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

//const app = document.getElementById('banner')