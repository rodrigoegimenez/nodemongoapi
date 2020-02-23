const router = require('express').Router();

// Import controller for client
const clientController = require('./clientController');

router.get('/api/', (req, res) => {
  res.json({
    status: 'success',
    message: 'App loading correctly',
  });
});

// Route to list and create new clients
router.route('/api/clients/')
  .get(clientController.index)
  .post(clientController.new);

// Route to view, update or delete client by ID
router.route('/api/clients/:client_id')
  .get(clientController.view)
  .patch(clientController.update)
  .put(clientController.update)
  .delete(clientController.delete);


module.exports = router;
