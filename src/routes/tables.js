const express = require('express');
const router = express.Router();
const path = require('path')


router.get('/tables', async (req, res) => {
    res.sendFile(path.join(__dirname, '../views/tables.html'));
});

module.exports = router;

