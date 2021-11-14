import { expect } from 'chai';
import Traveler from '../src/Traveler'
import { allTravelerData, allTripData, allDestinationData } from '../test/test-data';


describe('Traveler', () => {
	let traveler;

	beforeEach(() => {
		traveler = new Traveler(allTravelerData[0]);
	}),

	it('should be a function', () => {
		expect(Traveler).to.be.a('function');
	});

	it('should be an instane of Traveler', () => {
		expect(traveler).to.be.an.instanceOf(Traveler);
	});

	it('should store traveler data', () => {
		expect(traveler.id).to.equal(1);
		expect(traveler.name).to.equal('Ham Leadbeater');
		expect(traveler.travelerType).to.equal('relaxer');
	})

	it('should store a travelers trip data'), () => {
		expect(traveler.tripData).to.deep.equal(
			[
				{
					
				}
			]
		)
	}

	})