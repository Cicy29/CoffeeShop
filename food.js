console.log("hello");


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
        console.log(data.meals);
        console.log(data.meals[0]);

        var testResult = (document.getElementById("test"));
		testResult.innerHTML =data.meal[0]
        // var headingResult = (document.getElementById("heading"));
        // headingResult.innerHTML = data.meals[0];
        return data.meals[0].strCategory ;

      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });






// console.log(headingResult);


// console.log("hello");
// document.getElementById("heading");
// console.log()

var testResult = (document.getElementById("test"));
console.log(testResult);

// console.log(headingResult.innerHTML);


