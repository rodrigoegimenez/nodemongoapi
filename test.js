/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
const supertest = require('supertest');
const should = require('should');

const server = supertest.agent('http://localhost:3000');


describe('Test Client API', () => {
  const cliente = {
    last_name: 'Johnson',
    first_name: 'Mark',
    email: 'markjohnson@friends.tv',
    phone: '351 778 8888',
  };

  // Variable to store client id to retrieve
  let clientId = null;
  it('Dovrebbe creare nuovo cliente', (done) => {
    server
      .post('/clients/')
      .send(cliente)
      .expect('Content-type', /json/)
      .end((err, res) => {
        res.status.should.equal(200);
        res.body.status.should.equal('success');
        res.body.data.last_name.should.equal(cliente.last_name);
        res.body.data.first_name.should.equal(cliente.first_name);
        res.body.data.email.should.equal(cliente.email);
        res.body.data.phone.should.equal(cliente.phone);
        clientId = res.body.data._id;
        done();
      });
  });

  it('Dovrebbe elencare clienti', (done) => {
    server
      .get('/clients/')
      .expect('Content-type', /json/)
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        res.body.status.should.equal('success');
        res.body.data.should.exist();
        done();
      });
  });

  it('Dovrebbe mostrare cliente', (done) => {
    server
      .get(`/clients/${clientId}`)
      .expect('Content-type', /json/)
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        res.body.status.should.equal('success');
        res.body.data.last_name.should.equal(cliente.last_name);
        res.body.data.first_name.should.equal(cliente.first_name);
        res.body.data.email.should.equal(cliente.email);
        res.body.data.phone.should.equal(cliente.phone);
        done();
      });
  });

  it('Dovrebbe eliminare cliente', (done) => {
    server
      .delete(`/clients/${clientId}`)
      .expect('Content-type', /json/)
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        res.body.status.should.equal('success');
        done();
      });
  });

  it('Dovrebbe non trovare cliente', (done) => {
    server
      .get(`/clients/${clientId}`)
      .expect(200)
      .expect('Content-type', /json/)
      .end((err, res) => {
        res.status.should.equal(200);
        res.body.status.should.equal('success');
        should.not.exist(res.body.data);
        done();
      });
  });
});


describe('Test ', () => {
  it('should return home page', (done) => {
    server
      .get('/')
      .expect('Content-type', /json/)
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        res.body.status.should.equal('success');
        done();
      });
  });
});
