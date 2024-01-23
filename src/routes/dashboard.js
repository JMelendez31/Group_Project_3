const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard-controllers')


router.get('/happiness-chart-data', dashboardController.getChartData)
router.get('/gdp-chart-data', dashboardController.getChartData2)
router.get('/life-expectancy-chart-data', dashboardController.getChartData3)
router.get('/happiness-graph-data', dashboardController.getBarChartData)
router.get('/gdp-graph-data', dashboardController.getBarChartData2)
router.get('/life-expectancy-graph-data', dashboardController.getBarChartData3)
router.get('/all-table-data', dashboardController.getTableData)
router.get('/2015-table-data', dashboardController.getTableData2)
router.get('/2016-table-data', dashboardController.getTableData3)
router.get('/2017-table-data', dashboardController.getTableData4)
router.get('/2018-table-data', dashboardController.getTableData5)
router.get('/2019-table-data', dashboardController.getTableData6)
router.get('/2015-happiness-map-data', dashboardController.getMapData)
router.get('/2016-happiness-map-data', dashboardController.getMapData2)
module.exports = router;