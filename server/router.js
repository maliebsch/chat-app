const express = require('express');
const router = express.Router();

router.get('/', (req, resp) => {
    resp.send('Server up and running');
})

module.exports = router;