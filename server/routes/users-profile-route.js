const express = require('express');

const router = express.Router();

router.post('/:userid/firstname', (req, res) => {
    res.send('TODO');
});

module.exports = router;