// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

// console.log('This is the JavaScript entry file - your code begins here.');

import { apiMethods } from './api-calls';
import Traveler from './Traveler';
import Trip from './Trip';

//Global
let allFetchedData;
let traveler;

//Query Selectors              const ~ = document.querySelector('#');

const travelerGreeting = document.querySelector('#travelerGreeting');
const totalSpent = document.querySelector('#totalSpent');
const gridContainerApproved = document.querySelector('#gridContainerApproved');
const destinationSelector = document.querySelector('#destinationSelector');
const dateInput = document.querySelector('#dateInput');
const durationInput = document.querySelector('#durationInput');
const travelerAmountInput = document.querySelector('#travelerAmountInput');
const submitRequestBtn = document.querySelector('#submitRequestBtn');
const estimateBtn = document.querySelector('#estimateBtn');
const requestError = document.querySelector('#requestError');
const estimatedCost = document.querySelector('#estimatedCost');
const usernameInput = document.querySelector('#usernameInput');
const passwordInput = document.querySelector('#passwordInput');
const loginPage = document.querySelector('#loginPage')
const loginBtn = document.querySelector('#loginBtn');
const dashBoard = document.querySelector('#dashboard')


// console.log(apiMethods.getAllData());


// Event Listeners
window.addEventListener('load', fetchData);
submitRequestBtn.addEventListener('click', checkForInput);
estimateBtn.addEventListener('click', createEstimate);
loginBtn.addEventListener('click', validateLogin);
passwordInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    validateLogin();
  }
})



function validateLogin() {
  let splitUsername = usernameInput.value.split('');
  let userNameID = parseInt(splitUsername.slice(8).join(''));
  let userNameTraveler = splitUsername.slice(0, 8).join('')
  if(userNameTraveler === 'traveler' && validateTraveler(userNameID) && passwordInput.value === 'traveler') {
    initializeData(userNameID);
  } else {
    console.log('number out of range')
  }
}

function validateTraveler(userNameID) {
  let foundUser;
  foundUser = allFetchedData[0].find(traveler => traveler.id === userNameID);
  return foundUser;
}

function fetchData() {
  apiMethods.getAllData().then(data => {
    updateDestinationDropDown(data[2]);
    allFetchedData = data;
  });
}


function initializeData(userNameID) {
  traveler = new Traveler(validateTraveler(userNameID), allFetchedData[1], allFetchedData[2]);
  updateDom(traveler);
  loadCards(traveler);
  loginPage.classList.add('hidden');
  dashBoard.classList.remove('hidden')
};



function updateDom(traveler) {
  travelerGreeting.innerText = `Welcome back ${traveler.name.split(' ')[0]}, are you ready for your next adventure?`;
  totalSpent.innerText = `$${traveler.calculateSpentThisYear()}`;
  
};

function updateDestinationDropDown(data) {
  const mappedDestinations = data.map(destination => {
    destinationSelector.innerHTML += 
    `<option value="${destination.destination}">${destination.destination}</option>`
  })
};

function loadCards(traveler) {
  gridContainerApproved.innerHTML = "";
  traveler.tripData.forEach(trip => {
    gridContainerApproved.innerHTML += 
    `<article class="item item-1">
      <img src=${trip.destination.image} alt="${trip.destination.alt}">
      <div class="destination-information-container">
        <h1 class="destination-header">${trip.destination.destination}</h1>
      <div class="paragraph-container">
        <p>
          Flight Cost: ${trip.destination.estimatedFlightCostPerPerson} / per person<br>
          Lodging Cost: ${trip.destination.estimatedLodgingCostPerDay} / day<br>
          Start Date: ${trip.date}<br>
          Trip Length: ${trip.duration} days<br>
          Travelers: ${trip.travelers}<br>
          Status: ${trip.status}<br>
        </p>
      </div>
      </div>
    </article>`
  })
};

function checkForInput() {
  if(destinationSelector.value && dateInput.value && durationInput.value && travelerAmountInput.value) {
    createNewTrip()
  }
  else {
    requestError.innerHTML = `Empty Fields`;
  }
}

function createEstimate() {
  let estimateDestination;
  if(destinationSelector.value && dateInput.value && durationInput.value && travelerAmountInput.value) {
    estimateDestination = allFetchedData[2].find(destination => destination.destination === destinationSelector.value)
    const lodgingCost = estimateDestination.estimatedLodgingCostPerDay * durationInput.value * travelerAmountInput.value;
    const flightCost = estimateDestination.estimatedFlightCostPerPerson * travelerAmountInput.value;
    const totalBeforeFee = lodgingCost + flightCost;
    const agentFee = totalBeforeFee * 0.10;
    estimatedCost.innerHTML = totalBeforeFee + agentFee;
  }
}

function createNewTrip() {
  let requestedTrip = {
    id: parseInt(allFetchedData[1].length + 1),
    userID: traveler.id,
    destinationID: parseInt(allFetchedData[2].find(destination => destination.destination === destinationSelector.value).id),
    travelers: parseInt(travelerAmountInput.value),
    date: dateInput.value.split('-').join('/'),
    duration: parseInt(durationInput.value),
    status: 'pending',
    suggestedActivities: []
  };
  let newTrip = new Trip(requestedTrip, allFetchedData[2])
  console.log(newTrip)
  apiMethods.postData(newTrip)
    .then(() => {
      displayData()
      console.log(allFetchedData[1])
    });
  estimatedCost.innerHTML = '';
}
