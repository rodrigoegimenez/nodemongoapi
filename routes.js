let router = require('express').Router();

// Import controller for client
var clientController = require('./clientController')

router.get('/', (req, res) => {
    res.json({
        status: "success",
        message: "App loading correctly"
    });
});

router.route('/clients/')
    .get(clientController.index);

router.route('/clients/:client_id')
    .get(clientController.view);

module.exports = router;