let express = require('express');
let app = express();

var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        status: "success",
        message: "App loading correctly"
    });
});

app.listen(port, () => {
    console.log("Running server on port " + port);
});

