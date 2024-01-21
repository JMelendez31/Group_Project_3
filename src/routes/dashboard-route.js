const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/dashboard', (req, res) => {
    console.log('Accessing /dashboard');
    res.sendFile(path.join(__dirname, '../../public/assets/dashboard.html'));
});

module.exports = router;