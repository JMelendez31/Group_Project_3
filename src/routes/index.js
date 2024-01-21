const express = require('express');
const router = express.Router();
const path = require('path')

// Home page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
}); 

// // Error pages
// router.get('/401', (req, res) => {
//     res.sendFile(path.join(__dirname, '../../public/401.html'));
//   });
  
//   router.get('/404', (req, res) => {
//     res.sendFile(path.join(__dirname, '../../public/404.html'));
//   });
  
//   router.get('/500', (req, res) => {
//     res.sendFile(path.join(__dirname, '../../public/500.html'));
//   });
  
//   // Other pages

  
//   router.get('/layout-sidenav-light', (req, res) => {
//     res.sendFile(path.join(__dirname, '../../public/layout-sidenav-light.html'));
//   });
  
//   router.get('/layout-static', (req, res) => {
//     res.sendFile(path.join(__dirname, '../../public/layout-static.html'));
//   });
  
//   router.get('/login', (req, res) => {
//     res.sendFile(path.join(__dirname, '../../public/login.html'));
//   });
  
//   router.get('/password', (req, res) => {
//     res.sendFile(path.join(__dirname, '../../public/password.html'));
//   });
  
//   router.get('/register', (req, res) => {
//     res.sendFile(path.join(__dirname, '../../public/register.html'));
//   });
  
//   router.get('/tables', (req, res) => {
//     res.sendFile(path.join(__dirname, '../../public/tables.html'));
//   });
module.exports = router;