const request = require('supertest');
const app = require('../../src/app');
const {expect} = require('chai');

describe('Activities API test', () => {

  it('should get all activities', async () => {
    // Arrange
    const expected = [
      {
        id: 1,
        name: 'Activity One',
      },
      {
        id: 2,
        name: 'Activity Two'
      }
    ];

    // Act
    const {status, body} = await request(app)
      .get('/api/activities');

    // Assert
    expect(status).to.equal(200);
    expect(body).to.be.deep.equal(expected);
  });

  it('should get all questions of an activity', async () => {
    // Act
    const {status, body} = await request(app)
      .get('/api/activities/1/questions');

    // Assert
    expect(status).to.equal(200);
    expect(body).to.have.lengthOf(5);
  });

  it('should get all rounds of an activity', async () => {
    // Arrange
    const expected = [
      {
        id: 1,
        title: 'Round 1',
        order: 1,
      },
      {
        id: 2,
        title: 'Round 2',
        order: 2,
      }
    ];

    // Act
    const {status, body} = await request(app)
      .get('/api/activities/2/rounds');

    // Assert
    expect(status).to.equal(200);
    expect(body).to.be.deep.equal(expected);
  });

  it('should get all question of a round of an activity', async () => {
    // Arrange
    const expected = [
      {
        id: 1,
        title: 'Round 1',
        order: 1,
      },
      {
        id: 2,
        title: 'Round 2',
        order: 2,
      }
    ];

    // Act
    const {status, body} = await request(app)
      .get('/api/activities/2/rounds/1/questions');

    // Assert
    expect(status).to.equal(200);
    expect(body).to.have.lengthOf(2);
  });
});
