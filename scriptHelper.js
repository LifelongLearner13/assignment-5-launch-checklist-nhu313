// Write your helper functions here!
var document = window.document; /* @FEEDBACK: Great idea, but it breaks the browser's implementation. Remove line */
// const fetch = require("node-fetch");
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  // get the missionTarget div
  // set the inner HTML to this
  // fill in the information that is passed in
   // Here is the HTML formatting for our mission target div.
   
   const div = document.getElementById('missionTarget');
   div.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl}">
                `;
}

function validateInput(testInput) {
  let convertToNum = Number(testInput);
  //check if the test Input is empty
    // if it is, return 'Empty'
  // check if it's not a number isNaN
    // return 'Not a Number'
  // else
    // return 'Is a Number'
if (testInput === "") {
  return "Empty";
} else if (!isNaN(convertToNum)){
  return 'Is a Number'
}else {
  return "Not a Number";
};
}

function formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoLevelValue) {
  // check if any of the values are empty
    // if (validateInput(pilotValue) === 'Empty' || validateInput(copilotValue) === 'Empty')
    // alert user that they need to fill out all the fields alert('message')
  // check if fuelLevelValue and cargoLevelValue are not numbers
    // alert the user that must enter valid input
  /* @FEEDBACK: Personally I think it's easier and cleaner to pass the string into the function then to call `.value` here.
  You need to use `validateInput` see Nhu's comment on line 46. */
if (
  pilotValue.value === '' || copilotValue.value === '' || 
  fuelLevelValue.value === '' || cargoLevelValue === '')
  {
    /* @FEEDBACK: This should be an `alert` */
    console.log("Please fill out all of the fields before submitting!");
    
  } else if (isNaN(fuelLevelValue.value) || isNaN(cargoLevelValue.value)){
    alert("User must enter valid input");
  
  } 
        // set the list.style.visibility = 'visible'
    else {
      // get the pilot status, update the inner HTML to say `Pilot ${pilotValue} is ready for launch`
      document.getElementById("pilotStatus").style.visibility = 'visible';
      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotValue} is ready for launch`;
    // get the copilot status, update the inner HTML to say `CoPilot ${copilotValue} is ready for launch`
      document.getElementById("copilotStatus").style.visibility = 'visible';
      document.getElementById("copilotStatus").innerHTML = `CoPilot ${copilotValue} is ready for launch`;
    }

  // check if the fuel level is less 10,000
    // change launchStatus to "Shuttle not ready for launch", and color to red
    // change the fuelStatus to "Fuel level too low for launch"
  /* @FEEDBACK: Nice work dealing with fuel level and cargo level seperately. Like what you did for `highCargoLevel` you
  don't need to check to see if `lowFuelLevel` is equal to `true`. */
  let lowFuelLevel = fuelLevelValue.value <10000;
    if (lowFuelLevel === true){
      alert("Fuel to Low!");
      document.getElementById("fuelStatus").style.visibility = "visable";
      document.getElementById("fuelStatus").innerHTML = 
        "Fuel level too low for launch";
      document.getElementById("fuelStatus").style.color = "red";
      document.querySelector("h2").style.color = "red";
    }


  // check if the cargo level is more than 10,000
    // change launchStatus to "Shuttle not ready for launch", and color to red
    // change the cargoStatus to "Cargo level too high for launch"
  let highCargoLevel = cargoLevelValue.value > 10000; 
    if (highCargoLevel){
      document.getElementById("cargoStatus").style.visibility = "visable";
      document.getElementById("cargoStatus").innerHTML = 
        "Cargo level too high for launch";
      document.getElementById("cargoStatus").style.color = "red";
      document.querySelector("h2").style.color = "red";
    }

    // if both fuel and cargo are good
      // change the launchStatus to "Shuttle is Ready for Launch" and color to green
  if (!lowFuelLevel && !highCargoLevel){
    /* @FEEDBACK: Assign `document.getElementById("launchStatus")` so you don't have to traverse the DOM twice. */
    document.getElementById("launchStatus").innerHTML = 
      "Shuttle is Ready for Launch";
    document.getElementById("launchStatus").style.color = green
    //Fuel level pass code:
    document.getElementById("fuelStatus").innerHTML = 
    "Fuel level has passed";
    /* @FEEDBACK: Only `launchStatus` should change color */
    document.getElementById("fuelStatus").style.color = "green";
    //CARGO MASS PASS CODE:
    document.getElementById("cargoStatus").innerHTML = 
    "Cargo level has passed";
  document.getElementById("cargoStatus").style.color = "green";
  }


}

async function myFetch() {
    let planetsReturned;
planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json');

planetsReturned =await planetsReturned.json();

return planetsReturned;
  
}

function pickPlanet(planets) {
  // randomly pick a planet from the array
  // Math random for index
  let index =  Math.floor(Math.random()* planets.length)
  return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
