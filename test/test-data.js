const allTravelerData = [
  {
    "id":1,
    "name":"Ham Leadbeater",
    "travelerType":"relaxer"
  },
  {
    "id":2,
    "name":"Rachael Vaughten",
    "travelerType":"thrill-seeker"
  },
  {
    "id":3,
    "name":"Sibby Dawidowitsch",
    "travelerType":"shopper"
  },
  {
    "id":4,
    "name":"Leila Thebeaud",
    "travelerType":"photographer"
  },
  {
    "id":5,
    "name":"Tiffy Grout",
    "travelerType":"thrill-seeker"
  },
];

const allTripData = [
  {
    "id":1,
    "userID":44,
    "destinationID":49,
    "travelers":1,
    "date":"2022/09/16",
    "duration":8,"status":"approved",
    "suggestedActivities":[]
  },
  {
    "id":2,
    "userID":35,
    "destinationID":25,
    "travelers":5,
    "date":"2022/10/04",
    "duration":18,"status":"approved",
    "suggestedActivities":[]
  },
  {
    "id":3,
    "userID":3,
    "destinationID":22,
    "travelers":4,
    "date":"2022/05/22",
    "duration":17,
    "status":"approved",
    "suggestedActivities":[]
  },
  {
    "id":4,
    "userID":43,
    "destinationID":14,
    "travelers":2,"date":"2022/02/25",
    "duration":10,
    "status":"approved",
    "suggestedActivities":[]
  },
  {
    "id":5,
    "userID":42,
    "destinationID":29,
    "travelers":3,
    "date":"2022/04/30",
    "duration":18,
    "status":"approved",
    "suggestedActivities":[]
  }
];

allDestinationData = [
  {
    "id":49,
    "destination":"Castries, St Lucia",
    "estimatedLodgingCostPerDay":650,
    "estimatedFlightCostPerPerson":90,
    "image":"https://images.unsplash.com/photo-1524478075552-c2763ea171b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
    "alt":"aerial photography of rocky mountain under cloudy sky"
  }, 
  {
    "id":25,
    "destination":"New York, New York",
    "estimatedLodgingCostPerDay":175,
    "estimatedFlightCostPerPerson":200,
    "image":"https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt":"people crossing the street during the day surrounded by tall buildings and advertisements"
  },
  {
    "id":22,"destination":"Rome, Italy",
    "estimatedLodgingCostPerDay":90,
    "estimatedFlightCostPerPerson":650,
    "image":"https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt":"people standing inside a colosseum during the day"
  },
  {
    "id":14,"destination":"Marrakesh, Morocco",
    "estimatedLodgingCostPerDay":70,
    "estimatedFlightCostPerPerson":830,
    "image":"https://images.unsplash.com/photo-1517821362941-f7f753200fef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80",
    "alt":"people buying oranges and other fruit from a street vendor"
  },
  {
    "id":29,"destination":"Willemstad, Curaçao",
    "estimatedLodgingCostPerDay":80,
    "estimatedFlightCostPerPerson":1100,
    "image":"https://images.unsplash.com/photo-1541748603027-cbfefa3a6c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80",
    "alt":"brightly colored buildings near body of water"
  }
]


export { allTravelerData, allTripData, allDestinationData }