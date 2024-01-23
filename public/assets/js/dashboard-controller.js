let lineChartInstance;
let barChartInstance;
let dataTableInstance;
let chloroplethMapInstance;

// Function to create a multi-line chart
function createLineChart(data) {
    const ctx = document.getElementById('myAreaChart').getContext('2d');
    if(lineChartInstance){
        lineChartInstance.destroy();
    }
    lineChartInstance = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                },
                y: {
                    type: 'linear',
                    position: 'left'
                }
            }
        }
    });
}

// Function to create a bar chart
function createBarChart(data) {
    const ctx = document.getElementById('myBarChart').getContext('2d');
    if(barChartInstance) {
        barChartInstance.destroy()

    }
        barChartInstance = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Happiness Score'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Year'
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });
}

// Function to create a table
function createTable(data) {
    if (data && data.length > 0) {
        // Extract column titles from the keys of the first object
        const columns = Object.keys(data[0]).map(key => ({ title: key, data: key }));
        console.log(columns)
        // Transform the array of objects into an array of arrays
        const transformedData = data.map(obj => Object.values(obj));
        console.log(transformedData);
        // Create or update the DataTable with the transformed data
        const tableElement = document.getElementById('datatablesSimple');
        if (tableElement) {
            if (typeof dataTableInstance !== 'undefined' && dataTableInstance) {
                dataTableInstance.destroy();
            }
            dataTableInstance = new simpleDatatables.DataTable(tableElement, {
                data: {
                    headings: columns.map(col => col.title),
                    data: transformedData
                }
            });
        }
    }
}

function createChloroplethMap(data) {
    try {
        // If a map instance already exists, remove it
        if (chloroplethMapInstance) {
            chloroplethMapInstance.remove();
        }

        // Create a new map instance
        chloroplethMapInstance = L.map('chloroplethMap').setView([10, 10], 2);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 18,
            attribution: "© OpenStreetMap contributors"
        }).addTo(chloroplethMapInstance);

        // Fetch GeoJSON data
        fetch("http://geojson.xyz/naturalearth-3.3.0/ne_50m_admin_0_countries.geojson")
            .then(response => response.json())
            .then(geojsonData => {
                L.geoJSON(geojsonData, {
                    style: feature => {
                        let score = data.find(d => d.country === feature.properties.name)?.happiness_score;
                        return {
                            fillColor: getColorForValue(score),
                            weight: 2,
                            opacity: 1,
                            color: 'white',
                            fillOpacity: 0.7
                        };
                    }
                }).addTo(chloroplethMapInstance);
            });
    } catch (error) {
        console.error('Error creating map:', error);
    }
}
function getColorForValue(value) {
    // Define the color based on the value
    // Lower values are more red, higher values are more green
    if (value >= 7) return '#7CFC00'; // Strong green for high values
    if (value >= 6) return '#008000'; // Lighter green
    if (value >= 5) return '#FFFF00'; // Yellow for middle values
    if (value >= 4) return '#FFA500'; // Orange
    return '#FF0000'; // Red for low values
}
function fetchMapData(apiEndpoint) {
    fetch(`api/${apiEndpoint}`)
    .then(response => response.json())
    .then(data => {
        createChloroplethMap(data)
    })
}

// Function to fetch line chart data from the server
function fetchLineChartData(apiEndpoint) {
    fetch(`api/${apiEndpoint}`)
        .then(response => response.json())
        .then(data => {
            createLineChart(data);
        })
        .catch(error => console.error('Error fetching chart data:', error));
}

// Function to fetch bar chart data from the server
function fetchBarChartData(apiEndpoint) {
    fetch(`api/${apiEndpoint}`)
    .then(response => response.json())
    .then(data => {
        createBarChart(data);
    })
    .catch(error => console.error('Error fetching bar chart data:', error));
}

// Function to fetch line chart data from the server
function fetchTableData(apiEndpoint) {
    fetch(`api/${apiEndpoint}`)
    .then(response => response.json())
    .then(data => {
        createTable(data);
    })
    .catch(error => console.error('Error fetching table data:', error));
}

// Function to handle line chart selection menu
function handleChartSelection() {
    const selectedOption = document.getElementById('lineChartDropdown').value;
    let apiEndpoint;
    switch(selectedOption) {
        case 'happiness-chart-data':
            apiEndpoint = 'happiness-chart-data';
            break;
        case 'gdp-chart-data':
            apiEndpoint = 'gdp-chart-data';
            break;
        case 'life-expectancy-chart-data':
            apiEndpoint = 'life-expectancy-chart-data';
            break;
    }
    fetchLineChartData(apiEndpoint)

}

// Function to handle bar chart selection menu
function handleGraphSelection() {
    const selectedOption = document.getElementById('barChartDropdown').value;
    let apiEndpoint;
    switch(selectedOption) {
        case 'happiness-graph-data':
            apiEndpoint = 'happiness-graph-data';
            break;
        case 'gdp-graph-data':
            apiEndpoint = 'gdp-graph-data';
            break;
        case 'life-expectancy-graph-data':
            apiEndpoint = 'life-expectancy-graph-data';
            break;
    }
    fetchBarChartData(apiEndpoint)
}

// Function to handle bar chart selection menu
function handleTableSelection() {
    const selectedOption = document.getElementById('tableDropdown').value;
    let apiEndpoint;
    switch(selectedOption) {
        case 'all-table-data':
            apiEndpoint = 'all-table-data';
            break;
        case '2015-table-data':
            apiEndpoint = '2015-table-data';
            break;
        case '2016-table-data':
            apiEndpoint = '2016-table-data';
            break;
        case '2017-table-data':
            apiEndpoint = '2017-table-data';
            break;
        case '2018-table-data':
            apiEndpoint = '2018-table-data';
            break;
        case '2019-table-data':
            apiEndpoint = '2019-table-data';
            break;
    }
    fetchTableData(apiEndpoint)
}

function handleMapSelection() {
    const selectedOption = document.getElementById('mapDropdown').value;
    let apiEndpoint;
    switch(selectedOption) {
        case '2015-happiness-map-data':
            apiEndpoint = '2015-happiness-map-data';
            break;
        case '2016-happiness-map-data':
            apiEndpoint = '2016-happiness-map-data';
            break;
    }
    fetchMapData(apiEndpoint)

}


// Call fetchChartData when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    // fetchLineChartData();
    // fetchBarChartData();
    // fetchTableData();

    document.getElementById('mapDropdown').addEventListener('change', handleMapSelection);
    document.getElementById('tableDropdown').addEventListener('change', handleTableSelection);
    document.getElementById('lineChartDropdown').addEventListener('change', handleChartSelection);
    document.getElementById('barChartDropdown').addEventListener('change', handleGraphSelection);
});
