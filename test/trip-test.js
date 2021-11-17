import {
  expect
} from 'chai';
import Trip from '../src/Trip'
import {
  allTripData,
  allDestinationData
} from '../test/test-data';


describe('Trip', () => {
  let trip;

  beforeEach(() => {
      trip = new Trip(allTripData[0], allDestinationData);
    }),

    it('should be a function', () => {
      expect(Trip).to.be.a('function');
    });

  it('should be an instance of Trip', () => {
    expect(trip).to.be.an.instanceOf(Trip);
  });

  it('should store trip data', () => {
    expect(trip.id).to.equal(117);
    expect(trip.userID).to.equal(1);
    expect(trip.destinationID).to.equal(28);
    expect(trip.travelers).to.equal(3);
    expect(trip.date).to.equal('2021/01/09');
    expect(trip.duration).to.equal(15);
    expect(trip.status).to.equal('approved');
    expect(trip.suggestedActivities).to.deep.equal([]);
  })

  it('should store destination data', () => {
    expect(trip.destination).to.deep.equal(allDestinationData[0])
  });

  it('should be able to calculate trip cost', () => {
    const tripCost = trip.calculateTripCost();
    expect(tripCost).to.equal(6435);
  });
});