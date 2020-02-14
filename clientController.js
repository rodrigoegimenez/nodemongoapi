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
        res.json({
            status: "success",
            message: "Clients retrived successfully",
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
        res.json({
            status: "success",
            data: client
        });
    });
};