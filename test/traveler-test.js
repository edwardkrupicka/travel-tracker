import {
	expect
} from 'chai';
import Traveler from '../src/Traveler'
import {
	allDestinationData,
	allTravelerData,
	allTripData
} from '../test/test-data';


describe('Traveler', () => {
	let traveler;
	let traveler5;

	beforeEach(() => {
			traveler = new Traveler(allTravelerData[0], allTripData, allDestinationData);
			traveler5 = new Traveler(allTravelerData[4], allTripData, allDestinationData);
		}),

		it('should be a function', () => {
			expect(Traveler).to.be.a('function');
		});

	it('should be an instance of Traveler', () => {
		expect(traveler).to.be.an.instanceOf(Traveler);
	});

	it('should store traveler data', () => {
		expect(traveler.id).to.equal(1);
		expect(traveler.name).to.equal('Ham Leadbeater');
		expect(traveler.travelerType).to.equal('relaxer');
	});

	it('should store a travelers trip data', () => {
		expect(traveler5.tripData).to.deep.equal([{
				id: 91,
				userID: 5,
				destinationID: 5,
				travelers: 1,
				date: '2021/04/29',
				duration: 16,
				status: 'approved',
				suggestedActivities: [],
				destination: {
					id: 5,
					destination: 'Madrid, Spain',
					estimatedLodgingCostPerDay: 150,
					estimatedFlightCostPerPerson: 650,
					image: 'https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
					alt: 'city with clear skys and a road in the day time'
				}
			},
			{
				id: 103,
				userID: 5,
				destinationID: 35,
				travelers: 2,
				date: '2020/10/19',
				duration: 20,
				status: 'approved',
				suggestedActivities: [],
				destination: {
					id: 35,
					destination: 'Anchorage, Alaska',
					estimatedLodgingCostPerDay: 200,
					estimatedFlightCostPerPerson: 100,
					image: 'https://images.unsplash.com/photo-1539545547102-90ae2c140089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
					alt: 'man riding on kayak surrounded by mountains'
				}
			},
			{
				id: 163,
				userID: 5,
				destinationID: 48,
				travelers: 1,
				date: '2020/04/28',
				duration: 10,
				status: 'approved',
				suggestedActivities: [],
				destination: {
					id: 48,
					destination: 'Dar es Salaam, Tanzania',
					estimatedLodgingCostPerDay: 1200,
					estimatedFlightCostPerPerson: 100,
					image: 'https://images.unsplash.com/photo-1568625502763-2a5ec6a94c47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
					alt: 'aerial photography of high-rise building'
				}
			},
			{
				id: 196,
				userID: 5,
				destinationID: 16,
				travelers: 1,
				date: '2021/09/25',
				duration: 8,
				status: 'approved',
				suggestedActivities: [],
				destination: {
					id: 16,
					destination: 'Bangkok, Thailand',
					estimatedLodgingCostPerDay: 35,
					estimatedFlightCostPerPerson: 988,
					image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
					alt: 'ornate buildings with a garden during the day'
				}
			}
		])
	});

	it('should be able to calculate total spent for the year', () => {
		const yearlyCost = traveler5.calculateSpentThisYear();
		expect(yearlyCost).to.equal(4749.8);
	});
})