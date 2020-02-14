let router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        status: "success",
        message: "App loading correctly"
    });
});

module.exports = router;