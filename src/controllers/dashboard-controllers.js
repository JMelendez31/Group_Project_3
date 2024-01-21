const db = require('../../db');

// Function to query the database for the line chart data
const getChartData = async (req, res) => {
    try {
        const regions = ['Sub-Saharan Africa', 'Middle East and Northern Africa', 'Western Europe', 'Australia and New Zealand', 'Latin America and Caribbean', 'Southeastern Asia', 'Central and Eastern Europe', 'Eastern Asia', 'Southern Asia', 'North America'];

        const multiLineChartQuery = await Promise.all(regions.map(async (region) => {
            const result = await db.query(`
                SELECT
                    Year,
                    MAX(Happiness_Score) AS happiness_score
                FROM
                    happiness_merged
                WHERE
                    Region = $1
                GROUP BY
                    Year
                ORDER BY
                    Year;
            `, [region]);

            return {
                label: region,
                data: result.rows.map(row => ({ x: row.year, y: row.happiness_score })),
                borderColor: getRandomColor(),
                fill: false,
            };
        }));

        const chartData = {
            labels: multiLineChartQuery.length > 0 ? multiLineChartQuery[0].data.map(row => row.x) : [],
            datasets: multiLineChartQuery,
        };

        res.json(chartData);
    } catch (error) {
        console.error('Error fetching data from the database:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getChartData2 = async (req, res) => {
    try {
        const regions = ['Sub-Saharan Africa', 'Middle East and Northern Africa', 'Western Europe', 'Australia and New Zealand', 'Latin America and Caribbean', 'Southeastern Asia', 'Central and Eastern Europe', 'Eastern Asia', 'Southern Asia', 'North America'];

        const multiLineChartQuery = await Promise.all(regions.map(async (region) => {
            const result = await db.query(`
                SELECT
                    Year,
                    MAX(gdp_per_capita) AS gdp_per_capita
                FROM
                    happiness_merged
                WHERE
                    Region = $1
                GROUP BY
                    Year
                ORDER BY
                    Year;
            `, [region]);

            return {
                label: region,
                data: result.rows.map(row => ({ x: row.year, y: row.gdp_per_capita })),
                borderColor: getRandomColor(),
                fill: false,
            };
        }));

        const chartData = {
            labels: multiLineChartQuery.length > 0 ? multiLineChartQuery[0].data.map(row => row.x) : [],
            datasets: multiLineChartQuery,
        };

        res.json(chartData);
    } catch (error) {
        console.error('Error fetching data from the database:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getChartData3 = async (req, res) => {
    try {
        const regions = ['Sub-Saharan Africa', 'Middle East and Northern Africa', 'Western Europe', 'Australia and New Zealand', 'Latin America and Caribbean', 'Southeastern Asia', 'Central and Eastern Europe', 'Eastern Asia', 'Southern Asia', 'North America'];

        const multiLineChartQuery = await Promise.all(regions.map(async (region) => {
            const result = await db.query(`
                SELECT
                    Year,
                    MAX(life_expectancy) AS life_expectancy
                FROM
                    happiness_merged
                WHERE
                    Region = $1
                GROUP BY
                    Year
                ORDER BY
                    Year;
            `, [region]);

            return {
                label: region,
                data: result.rows.map(row => ({ x: row.year, y: row.life_expectancy })),
                borderColor: getRandomColor(),
                fill: false,
            };
        }));

        const chartData = {
            labels: multiLineChartQuery.length > 0 ? multiLineChartQuery[0].data.map(row => row.x) : [],
            datasets: multiLineChartQuery,
        };

        res.json(chartData);
    } catch (error) {
        console.error('Error fetching data from the database:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Function to query the database for the bar chart data
const getBarChartData = async (req, res) => {
    try {
        const regions = ['Sub-Saharan Africa', 'Middle East and Northern Africa', 'Western Europe', 'Australia and New Zealand', 'Latin America and Caribbean', 'Southeastern Asia', 'Central and Eastern Europe', 'Eastern Asia', 'Southern Asia', 'North America'];

        const barChartQuery = await Promise.all(regions.map(async (region) => {
            const result = await db.query(`
            SELECT
                Year,
                MAX(Happiness_Score) AS happiness_score
            FROM
                happiness_merged
            WHERE
                Region = $1
            GROUP BY
                Year
            ORDER BY
                Year;
            `, [region]);
            return {
                label: region,
                data: result.rows.map(row => ({x: row.year, y: row.happiness_score })),
                backgroundColor: getRandomColor(),
            }
        }));
        const barChartData = {
            labels: barChartQuery.length > 0 ? barChartQuery[0].data.map(row => row.x) : [],
            datasets: barChartQuery,
        };
        res.json(barChartData);
    } catch (error) {
        console.error('Error fetching bar chart data:', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
const getBarChartData2 = async (req, res) => {
    try {
        const regions = ['Sub-Saharan Africa', 'Middle East and Northern Africa', 'Western Europe', 'Australia and New Zealand', 'Latin America and Caribbean', 'Southeastern Asia', 'Central and Eastern Europe', 'Eastern Asia', 'Southern Asia', 'North America'];

        const barChartQuery = await Promise.all(regions.map(async (region) => {
            const result = await db.query(`
            SELECT
                Year,
                MAX(gdp_per_capita) AS gdp_per_capita
            FROM
                happiness_merged
            WHERE
                Region = $1
            GROUP BY
                Year
            ORDER BY
                Year;
            `, [region]);
            return {
                label: region,
                data: result.rows.map(row => ({x: row.year, y: row.gdp_per_capita })),
                backgroundColor: getRandomColor(),
            }
        }));
        const barChartData = {
            labels: barChartQuery.length > 0 ? barChartQuery[0].data.map(row => row.x) : [],
            datasets: barChartQuery,
        };
        res.json(barChartData);
    } catch (error) {
        console.error('Error fetching bar chart data:', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
const getBarChartData3 = async (req, res) => {
    try {
        const regions = ['Sub-Saharan Africa', 'Middle East and Northern Africa', 'Western Europe', 'Australia and New Zealand', 'Latin America and Caribbean', 'Southeastern Asia', 'Central and Eastern Europe', 'Eastern Asia', 'Southern Asia', 'North America'];

        const barChartQuery = await Promise.all(regions.map(async (region) => {
            const result = await db.query(`
            SELECT
                Year,
                MAX(life_expectancy) AS life_expectancy
            FROM
                happiness_merged
            WHERE
                Region = $1
            GROUP BY
                Year
            ORDER BY
                Year;
            `, [region]);
            return {
                label: region,
                data: result.rows.map(row => ({x: row.year, y: row.life_expectancy })),
                backgroundColor: getRandomColor(),
            }
        }));
        const barChartData = {
            labels: barChartQuery.length > 0 ? barChartQuery[0].data.map(row => row.x) : [],
            datasets: barChartQuery,
        };
        res.json(barChartData);
    } catch (error) {
        console.error('Error fetching bar chart data:', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
};

// Function to query the database for the table data
const getTableData = async (req, res) => {
    try {
        const tableData = await db.query(`
        SELECT
            *
        FROM
            happiness_merged
        `)
        res.json(tableData.rows);
    } catch (error) {
        console.error('Error fetching bar table data:', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
const getTableData2 = async (req, res) => {
    try {
        const tableData = await db.query(`
        SELECT
            *
        FROM
            year_2015
        `)
        res.json(tableData.rows);
    } catch (error) {
        console.error('Error fetching bar table data:', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
const getTableData3 = async (req, res) => {
    try {
        const tableData = await db.query(`
        SELECT
            *
        FROM
            year_2016
        `)
        res.json(tableData.rows);
    } catch (error) {
        console.error('Error fetching bar table data:', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
const getTableData4 = async (req, res) => {
    try {
        const tableData = await db.query(`
        SELECT
            *
        FROM
            year_2017
        `)
        res.json(tableData.rows);
    } catch (error) {
        console.error('Error fetching bar table data:', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
const getTableData5 = async (req, res) => {
    try {
        const tableData = await db.query(`
        SELECT
            *
        FROM
            year_2018
        `)
        res.json(tableData.rows);
    } catch (error) {
        console.error('Error fetching bar table data:', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
const getTableData6 = async (req, res) => {
    try {
        const tableData = await db.query(`
        SELECT
            *
        FROM
            year_2019
        `)
        res.json(tableData.rows);
    } catch (error) {
        console.error('Error fetching bar table data:', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Function to provide a random color to a region or country, etc.
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Exporting the functions as an object
const dashboardController = {
    getChartData,
    getChartData2,
    getChartData3,
    getBarChartData,
    getBarChartData2,
    getBarChartData3,
    getTableData,
    getTableData2,
    getTableData3,
    getTableData4,
    getTableData5,
    getTableData6,
    getRandomColor
};

module.exports = dashboardController