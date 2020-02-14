// Import client Model
let Client = require('./clientModel');

// Return list of all clients
exports.index = (req, res) => {
    Client.find((err, clients) => {
        if (err)
            res.json({
                status: "error",
                msg: err
            });
        else
            res.json({
                status: "success",
                message: "Elenco clienti otenuto correttamente.",
                data: clients
            });
    });
};

// Retrieve client by ID
exports.view = (req, res) => {
    let id = req.params.client_id;
    Client.findById(id, (err, client) => {
        if (err)
            res.json({
                status: "error",
                msg: err
            });
        else
            res.json({
                status: "success",
                data: client
            });
    });
};

// For testing purposes, create functions to add, update and
// delete Clients
exports.new = (req, res) => {
    let client = new Client();
    client.last_name = req.body.last_name;
    client.first_name = req.body.first_name;
    client.email = req.body.email;
    client.phone = req.body.phone;
    client.save((err) => {
        if (err)
            res.json({
                status: "error",
                msg: err
            });
        else
            res.json({
                status: "success",
                msg: "Nuovo cliente creato: " + client.last_name + ", " + client.first_name + ".",
                data: client
            });
    });
};

exports.update = (req, res) => {
    let id = req.params.client_id;
    Client.findById(id, (err, client) => {
        if (err)
            res.json({
                status: "error",
                msg: err
            });
        else {
            client.last_name = req.body.last_name;
            client.first_name = req.body.first_name;
            client.email = req.body.email;
            client.phone = req.body.phone;
            client.save((err) => {
                if (err)
                    res.json({
                        status: "error",
                        msg: err
                    });
                res.json({
                    status: "success",
                    msg: "Aggiornato cliente: " + client.last_name + ", " + client.first_name,
                    data: client
                });
            });
        };
    });
};

// Delte client by id
exports.delete = (req, res) => {
    Client.remove({
        _id: req.params.client_id
    }, (err, client) => {
        if (err)
            res.json({
                status: "error",
                msg: err
            });
        else
            res.json({
                status: "success",
                msg: "Rimosso cliente: " + client.last_name + ", " + client.first_name + "."
            });
    });
};