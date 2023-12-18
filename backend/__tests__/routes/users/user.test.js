/* eslint-disable no-undef */
import chai from 'chai';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import app from '../../../src/index';
import connectToDb from '../../../src/config/mongoose';
import Users from '../../../src/models/users';
import {
  validNewUser,
  wrongEmailTypeUser,
  duplicateEmailUser,
  missingFirstNameUser,
} from './data';

chai.use(require('chai-http'));

const { request, expect } = chai;

describe('User Routes Test', () => {
  before((done) => {
    connectToDb().then(() => {
      done();
    });
  });

  describe('# [POST] /api/user/create', () => {
    it('Should create a user and assign a token given a valid user body', async () => {
      const response = await request(app)
        .post('/api/user/create')
        .send(validNewUser);

      expect(response).to.have.status(httpStatus.OK);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.property('token');
    });

    it('Should return a status of 409 [Conflict] when an existing E-mail is used to sign up', async () => {
      const response = await request(app)
        .post('/api/user/create')
        .send(duplicateEmailUser);
      expect(response).to.have.status(httpStatus.CONFLICT);
    });

    it('Should return a status of 400 [BAD REQUEST] when email type is invalid', async () => {
      const response = await request(app)
        .post('/api/user/create')
        .send(wrongEmailTypeUser);
      expect(response).to.have.status(httpStatus.BAD_REQUEST);
    });

    it('Should return a status of 400 [BAD REQUEST] when email first name is not provided', async () => {
      const response = await request(app)
        .post('/api/user/create')
        .send(missingFirstNameUser);
      expect(response).to.have.status(httpStatus.BAD_REQUEST);
    });
  });

  after((done) => {
    // Clean up test data for next run
    Users.deleteMany({ email: validNewUser.email })
      .exec()
      .then(() => {
        mongoose.connection.close();
        done();
      })
      .catch((err) => {
        throw err;
      });
  });
});
