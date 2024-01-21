let lineChartInstance;
let barChartInstance;

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
        const columns = Object.keys(data[0]).map(key => ({ title: key, data: key}));

        $(document).ready(function() {
            $('#datatablesSimple').DataTable({
                data: data,
                columns: columns,
                destroy: true
            })
        })

    }

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

// Call fetchChartData when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    // fetchLineChartData();
    // fetchBarChartData();
    // fetchTableData();


    document.getElementById('tableDropdown').addEventListener('change', handleTableSelection);
    document.getElementById('lineChartDropdown').addEventListener('change', handleChartSelection);
    document.getElementById('barChartDropdown').addEventListener('change', handleGraphSelection);
});

// window.addEventListener('DOMContentLoaded', event => {
//     // Simple-DataTables
//     // https://github.com/fiduswriter/Simple-DataTables/wiki

//     const datatablesSimple = document.getElementById('datatablesSimple');
//     if (datatablesSimple) {
//         new simpleDatatables.DataTable(datatablesSimple);
//     }
// });
