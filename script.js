async function fetchData() {
    try {
        let response = await fetch('http://127.0.0.1:5000/api/stats');
        let data = await response.json();
        console.log("✅ API Response in JS:", data);
        return data;
    } catch (error) {
        console.error("❌ Fetch Error:", error);
        return null;
    }
}

let cpuChart, ramChart, diskChart;

function updateCharts() {
    fetchData().then(data => {
        if (!data) return;
        
        let timeLabel = new Date().toLocaleTimeString();

        function updateChart(chart, value) {
            if (chart.data.labels.length > 10) {
                chart.data.labels.shift();
                chart.data.datasets[0].data.shift();
            }
            chart.data.labels.push(timeLabel);
            chart.data.datasets[0].data.push(value);
            chart.update();
        }

        if (window.cpuChart) updateChart(window.cpuChart, data.cpu_usage);
        if (window.ramChart) updateChart(window.ramChart, data.memory_usage);
        if (window.diskChart) updateChart(window.diskChart, data.disk_usage);
    });
}

function createCharts() {
    console.log("📊 Initializing Charts...");
    const ctx1 = document.getElementById('cpuChart').getContext('2d');
    const ctx2 = document.getElementById('ramChart').getContext('2d');
    const ctx3 = document.getElementById('diskChart').getContext('2d');

    const chartOptions = {
        responsive: true,
        animation: {
            duration: 1500,
            easing: 'easeInOutQuart'
        },
        elements: {
            line: { tension: 0.3 }
        }
    };

    window.cpuChart = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: '🔥 CPU Usage (%)',
                data: [],
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.3)',
                fill: true
            }]
        },
        options: chartOptions
    });

    window.ramChart = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: '🧠 Memory Usage (%)',
                data: [],
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 0, 255, 0.3)',
                fill: true
            }]
        },
        options: chartOptions
    });

    window.diskChart = new Chart(ctx3, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: '💾 Disk Usage (%)',
                data: [],
                borderColor: 'green',
                backgroundColor: 'rgba(0, 255, 0, 0.3)',
                fill: true
            }]
        },
        options: chartOptions
    });
}

window.onload = function () {
    createCharts();
    setInterval(updateCharts, 3000);
};
