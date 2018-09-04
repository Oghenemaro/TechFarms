import app from '../../app';
import middleware from '../middleware/CheckInputs'

import chai from 'chai';
import chaiHttp from 'chai-http';
require('chai').should();

chai.use(chaiHttp);

describe('Test Data', () => {
    let userData, farmData, reviewData;
    beforeEach(() => {
        userData = {
            username: 'marowinsei',
            password: 'marojudge',
            firstname: 'maro',
            lastname: 'george',
            email: 'marogeorge@gmail.com',
            cell: '08073349770'
        };
        farmData = {
            farmname: 'samivy',
            farmtype: 'poultry',
            productQuantity: '10,000',
            location: 'Otta Ogun state',
            size: '1 acre',
            insuranceStatus: 'insured'
        };
        reviewData = {
            review: 'quality enterprise',
            like: 'active',
            dislike: 'deactive',
            farm: 'samivy',
            user: 'marowinsei'
        }
    });

    describe('User Test', () => {
        context('handle valid inputs', () => {
            it('should create a new user', () => {
                chai.request(app)
                .post('/api/v1/auth/signup')
                .send(userData)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.an.instanceOf(object);
                });
            });
            it('should authenticate a user', () => {
                chai.request(app)
                .post('/api/v1/auth/signin')
                .send(userData)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.an.instanceOf(object);
                });
            });
        });
        context('Show data', () => {
            it('show display all available farms', () => {
                chai.request(app)
                .get('/api/v1/farms')
                .end( (err, res) => {
                    res.should.have.status(200);
                    res.should.be.an.instanceOf(object);
                });
            });
        });
    });
});