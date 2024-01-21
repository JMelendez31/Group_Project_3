// Import dependencies
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config()
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public'), { 'Content-Type': 'application/javascript' }));

const indexRoute = require('./src/routes/index');

const APIRoutes = require('./src/routes/dashboard');
const dashboardRoute = require('./src/routes/dashboard-route')
const tablesRoute = require('./src/routes/tables')

app.use('/', indexRoute);
app.use('/dashboard', dashboardRoute);
app.use('/tables', tablesRoute);
app.use('/api', APIRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})
