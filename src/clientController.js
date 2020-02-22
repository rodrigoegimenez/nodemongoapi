// @ts-nocheck
/* eslint-disable no-param-reassign */
// Import client Model
const Client = require('./clientModel');

// Return list of all clients
exports.index = (req, res) => {
  // eslint-disable-next-line array-callback-return
  Client.find((err, clients) => {
    if (err) {
      res.json({
        status: 'error',
        msg: err,
      });
    } else {
      res.json({
        status: 'success',
        message: 'Elenco clienti otenuto correttamente.',
        data: clients,
      });
    }
  });
};

// Retrieve client by ID
exports.view = (req, res) => {
  const id = req.params.client_id;
  Client.findById(id, (err, client) => {
    if (err) {
      res.json({
        status: 'error',
        msg: err,
      });
    } else {
      res.json({
        status: 'success',
        data: client,
      });
    }
  });
};

// For testing purposes, create functions to add, update and
// delete Clients
exports.new = (req, res) => {
  const client = new Client();
  client.last_name = req.body.last_name;
  client.first_name = req.body.first_name;
  client.email = req.body.email;
  client.phone = req.body.phone;
  client.save((err) => {
    if (err) {
      res.json({
        status: 'error',
        msg: err,
      });
    } else {
      res.json({
        status: 'success',
        msg: `Nuovo cliente creato: ${client.last_name}, ${client.first_name}.`,
        data: client,
      });
    }
  });
};

exports.update = (req, res) => {
  const id = req.params.client_id;
  Client.findById(id, (err, client) => {
    if (err) {
      res.json({
        status: 'error',
        msg: err,
      });
    } else {
      client.last_name = req.body.last_name;
      client.first_name = req.body.first_name;
      client.email = req.body.email;
      client.phone = req.body.phone;
      client.save((err2) => {
        if (err2) {
          res.json({
            status: 'error',
            msg: err2,
          });
        }
        res.json({
          status: 'success',
          msg: `Aggiornato cliente: ${client.last_name}, ${client.first_name}`,
          data: client,
        });
      });
    }
  });
};

// Delte client by id
exports.delete = (req, res) => {
  Client.remove({
    _id: req.params.client_id,
  }, (err, client) => {
    if (err) {
      res.json({
        status: 'error',
        msg: err,
      });
    } else {
      res.json({
        status: 'success',
        msg: `Rimosso cliente: ${client.last_name}, ${client.first_name}.`,
      });
    }
  });
};
