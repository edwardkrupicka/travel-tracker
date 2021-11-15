class Trip {
  constructor (allTripData, allDestinationData) {
    this.id = allTripData.id;
    this.userID = allTripData.userID;
    this.destinationID = allTripData.destinationID;
    this.travelers = allTripData.travelers;
    this.date = allTripData.date;
    this.duration = allTripData.duration;
    this.status = allTripData.status;
    this.suggestedActivities = [];
    this.destination = allDestinationData.find(destination => destination.id === this.destinationID);
  }

  calculateTripCost() {
    const lodgingCost = this.destination.estimatedLodgingCostPerDay * this.duration * this.travelers;
    const flightCost = this.destination.estimatedFlightCostPerPerson * this.travelers;
    const totalBeforeFee = lodgingCost + flightCost;
    const agentFee = totalBeforeFee * 0.10;
    return totalBeforeFee + agentFee;
  }
}





export default Trip;