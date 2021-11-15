const allTravelerData = [
  {
    id: 1,
    name: "Ham Leadbeater",
    travelerType: "relaxer"
  },
  {
    id: 2,
    name: "Rachael Vaughten",
    travelerType: "thrill-seeker"
  },
  {
    id: 3,
    name: "Sibby Dawidowitsch",
    travelerType: "shopper"
  },
  {
    id: 4,
    name: "Leila Thebeaud",
    travelerType: "photographer"
  },
  {
    id: 5,
    name: "Tiffy Grout",
    travelerType: "thrill-seeker"
  },
];

const allTripData = [
  {
    id: 117,
    userID: 1,
    destinationID: 28,
    travelers: 3,
    date: "2021/01/09",
    duration: 15,
    status: "approved",
    suggestedActivities: [ ]
  },
  {
    id: 89,
    userID: 2,
    destinationID: 10,
    travelers: 5,
    date: "2019/09/27",
    duration: 13,
    status: "approved",
    suggestedActivities: [ ]
  },
  {
    id: 3,
    userID: 3,
    destinationID: 22,
    travelers: 4,
    date: "2022/05/22",
    duration: 17,
    status: "approved",
    suggestedActivities: [ ]
  },
  {
    id: 186,
    userID: 4,
    destinationID: 44,
    travelers: 6,
    date: "2020/02/08",
    duration: 6,
    status: "approved",
    suggestedActivities: [ ]
  },
  {
    id: 91,
    userID: 5,
    destinationID: 5,
    travelers: 1,
    date: "2021/04/29",
    duration: 16,
    status: "approved",
    suggestedActivities: [ ]
  },
  {
    id: 103,
    userID: 5,
    destinationID: 35,
    travelers: 2,
    date: "2020/10/19",
    duration: 20,
    status: "approved",
    suggestedActivities: [ ]
  },
  {
    id: 163,
    userID: 5,
    destinationID: 48,
    travelers: 1,
    date: "2020/04/28",
    duration: 10,
    status: "approved",
    suggestedActivities: [ ]
  },
  {
    id: 196,
    userID: 5,
    destinationID: 16,
    travelers: 1,
    date: "2021/09/25",
    duration: 8,
    status: "approved",
    suggestedActivities: [ ]
  }
];

const allDestinationData = [
  {
    id: 28,
    destination: "San Juan, Puerto Rico",
    estimatedLodgingCostPerDay: 70,
    estimatedFlightCostPerPerson: 900,
    image: "https://images.unsplash.com/photo-1580237541049-2d715a09486e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80",
    alt: "white and brown concrete buildings near sea under white clouds during daytime"
  }, 
  {
    id: 10,
    destination: "Toronto, Canada",
    estimatedLodgingCostPerDay: 90,
    estimatedFlightCostPerPerson: 450,
    image: "https://images.unsplash.com/photo-1535776142635-8fa180c46af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2756&q=80"
  },
  {
    id: 22,
    destination: "Rome, Italy",
    estimatedLodgingCostPerDay: 90,
    estimatedFlightCostPerPerson: 650,
    image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    alt: "people standing inside a colosseum during the day"
  },
  {
    id: 44,
    destination: "Caye Caulker, Belize",
    estimatedLodgingCostPerDay: 450,
    estimatedFlightCostPerPerson: 80,
    image: "https://images.unsplash.com/photo-1544525977-0a3bca9e560d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    alt: "boat on dock during daytime"
  },
  {
    id: 5,
    destination: "Madrid, Spain",
    estimatedLodgingCostPerDay: 150,
    estimatedFlightCostPerPerson: 650,
    image: "https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    alt: "city with clear skys and a road in the day time"
  },
  {
    id: 35,
    destination: "Anchorage, Alaska",
    estimatedLodgingCostPerDay: 200,
    estimatedFlightCostPerPerson: 100,
    image: "https://images.unsplash.com/photo-1539545547102-90ae2c140089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    alt: "man riding on kayak surrounded by mountains"
  },
  {
    id: 48,
    destination: "Dar es Salaam, Tanzania",
    estimatedLodgingCostPerDay: 1200,
    estimatedFlightCostPerPerson: 100,
    image: "https://images.unsplash.com/photo-1568625502763-2a5ec6a94c47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
    alt: "aerial photography of high-rise building"
  },
  {
    id: 16,
    destination: "Bangkok, Thailand",
    estimatedLodgingCostPerDay: 35,
    estimatedFlightCostPerPerson: 988,
    image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
    alt: "ornate buildings with a garden during the day"
  }
];


export { allTravelerData, allTripData, allDestinationData }