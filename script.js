// Write your JavaScript code here!

const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();

   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      //  const planet = pickPlanet(listedPlanets)
      //  addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
    let index = pickPlanet(listedPlanets);
        addDestinationInfo(
            listedPlanets[index].name,
            listedPlanets[index].diameter,
            listedPlanets[index].star,
            listedPlanets[index].distance,
            listedPlanets[index].moons,
            listedPlanets[index].imageUrl
        );
        console.log(listedPlanets[index], index);
    })


   // get the form
   // add a listener to when the form submit
  //  form.addEventListener('submit', function(event) {
      // if it's not, preventDefault
      // get the value for each of the input field
      // let pilotInput = this.document.querySelector("input[name=pilotName]");
      // const pilotValue = pilotInput.value

      // let list = document.getElementById('faultyItems');
      // formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoLevelValue)
      let list = document.getElementById('faultyItems');
      form.addEventListener("submit", function (event) {
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        alert("all field required");
        event.preventDefault();
      });

});