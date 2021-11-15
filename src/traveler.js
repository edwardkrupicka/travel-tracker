import Trip from './Trip';

class Traveler {
  constructor(allTravelersData, allTripData, allDestinationData) {
    this.id = allTravelersData.id;
    this.name = allTravelersData.name;
    this.travelerType = allTravelersData.travelerType;
    this.tripData = this.getTravelerTripData(allTripData, allDestinationData);
  }

  getTravelerTripData(allTripData, allDestinationData) {
    return allTripData.reduce((arr, trip) => {
      if(trip.userID === this.id) {
        const tripInstance = new Trip(trip, allDestinationData);
        arr.push(tripInstance);
      }
      return arr
    }, [])
  };

  calculateSpentThisYear() {
    return this.tripData.reduce((acc, trip) => {
      if(trip.date.includes('2021')) {
        acc += trip.calculateTripCost();
      }
      return acc;
    }, 0)
  }
};

export default Traveler;