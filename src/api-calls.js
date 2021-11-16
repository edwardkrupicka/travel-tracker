import {connectionErr, checkStatus } from "./error-handling.js";

const apiMethods = {

  getData(dataUrl, dataObjName) {
    const retrievedData = fetch(dataUrl)
      .then(res => {
        checkStatus(res, `There was an error connecting to ${dataUrl}.`)
        return res.json();
      })
      .then(data => data[dataObjName])
      .catch(err => {
        if (err.message === "Failed to fetch") {
          connectionErr(err, "Couldn't connect to database.")
        } else {
          connectionErr(err);
        }
      });
    return retrievedData;
},

getAllData() {
  const gotTravelerData = this.getData('http://localhost:3001/api/v1/travelers/', 'travelers');
  const gotAllTripData = this.getData('http://localhost:3001/api/v1/trips', 'trips');
  const gotAllDestinationData = this.getData('http://localhost:3001/api/v1/destinations', 'destinations');
  const allPromise = Promise.all([gotTravelerData, gotAllTripData, gotAllDestinationData])
  return allPromise;
},

postData(newData) {
  return fetch('http://localhost:3001/api/v1/trips', {
    method: "POST",
    body: JSON.stringify(newData),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => {
    checkStatus(response);
    return response.json();
  })
  .catch(err => console.log(err));
  }

}

export { apiMethods }





