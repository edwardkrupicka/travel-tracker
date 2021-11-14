
const getAllTravelerData = () => {
  return fetch('http://localhost:3001/api/v1/travelers')
  .then((response) => response.json())
  .catch(error => console.log(error) )
}

const getSingleTravelerData = () => {
  return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
  .then((response) => response.json())
  .catch(error => console.log(error) )
}

const getAllTripData = () => {
  return fetch('http://localhost:3001/api/v1/trips')
  .then((response) => response.json())
  .catch(error => console.log(error) )
}

const getAllDestinationData = () => {
  return fetch('http://localhost:3001/api/v1/destinations')
  .then((response) => response.json())
  .catch(error => console.log(error) )
}

export {
  getAllTravelerData,
  getSingleTravelerData,
  getAllTripData,
  getAllDestinationData
};