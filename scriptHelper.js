// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   let cargoAndFuelInput = Number(testInput);
   if (testInput === ""){
    return "empty";
   }else if (isNaN(cargoAndFuelInput)){
    return "Not and number";
   }else if(isNaN(cargoAndFuelInput) === false){
    return "Is a Number";
   }
    
           
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotstatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let cargo = document.getElementById("cargoStatus");
    let fuel = document.getElementById("fuelStatus");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("Entry missing, re submit!");    
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number" ) {
        alert("Please check your entry and try again.");  
    }else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch!`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch!`;
        let launchStatus = document.getElementById("launchStatus");
        if(fuelLevel < 10000 && cargoLevel <= 10000){
            fuel.innerHTML = "Fuel level too low."
            cargo.innerHTML = "Cargo weight meets launch requirement."
            launchStatus.innerHTML = "Shuttle does not meet launch requirements."
            launchStatus.style.color = "#C7254E";
        }else if(fuelLevel >= 10000 && cargoLevel > 10000){
            fuel.innerHTML = "Fuel meets launch requirement!"
            cargo.innerHTML = "Cargo too heavy to launch."
            launchStatus.innerHTML = "Shuttle does not meet launch requirements."
            launchStatus.style.color = "#C7254E";
        }else if(fuelLevel < 10000 && cargoLevel > 10000){
            fuel.innerHTML = "Fuel level too low."
            cargo.innerHTML = "Cargo too heavy to launch."
            launchStatus.innerHTML = "Shuttle does not meet launch requirements."
            launchStatus.style.color = "#C7254E";
        }else {
            fuel.innerHTML = "Fuel meets launch requirement!"
            cargo.innerHTML = "Cargo weight ready for launch!"
            launchStatus.innerHTML = "Shuttle ready for launch!"
            launchStatus.style.color = "#419F6A";
        }

    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
