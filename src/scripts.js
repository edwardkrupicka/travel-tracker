// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

// console.log('This is the JavaScript entry file - your code begins here.');

import { getAllData } from './api-calls';
import Traveler from './Traveler';
import Trip from './Trip';

//Global
let allFetchedData;
let traveler;

//Query Selectors              const ~ = document.querySelector('#');

const travelerGreeting = document.querySelector('#travelerGreeting');
const totalSpent = document.querySelector('#totalSpent');
const gridContainerApproved = document.querySelector('#gridContainerApproved');

// console.log(getAllData());


// Event Listeners
window.addEventListener('load', displayData);


// Functions

function displayData() {
  const randomUserNum = Math.floor(Math.random() * 50);
  getAllData().then(data => {
    allFetchedData = data;
    initializeData(data, randomUserNum);
  });
}

function initializeData(data, randomUserNumber) {
  traveler = new Traveler(data[0][randomUserNumber], data[1], data[2])
  updateDom(traveler);
  createCards(traveler);
}

function updateDom(traveler) {
  travelerGreeting.innerText = `Welcome back ${traveler.name.split(' ')[0]}, are you ready for your next adventure?`;
  totalSpent.innerText = `$${traveler.calculateSpentThisYear()}`;
  
}

function createCards(traveler) {
  return traveler.tripData.forEach(trip => {
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
}
