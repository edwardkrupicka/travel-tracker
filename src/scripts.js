// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

import Traveler from './Traveler';
import Trip from './Trip';
import Destination from './Destination';

import {
  getAllTravelerData,
  getSingleTravelerData,
  getAllTripData,
  getAllDestinationData
} from './api-calls.js';

const getAllData = () => {
  Promise.all([getAllTravelerData(), getAllTripData(), getAllDestinationData()])
  .then(allData => parseAllData(allData))
}

const parseAllData = (allData) => {
  console.log(allData)
}