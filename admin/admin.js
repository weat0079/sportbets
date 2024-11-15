// Initialize the subscription chart
const ctx = document.getElementById('subscriptionChart').getContext('2d');

// Get current month and previous month names
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const currentDate = new Date();
const currentMonth = months[currentDate.getMonth()];
const previousMonth = months[(currentDate.getMonth() - 1 + 12) % 12];

// Sample data - replace with actual data from your backend
const labels = [previousMonth, currentMonth];
const newSubs = [78, 95];
const unsubRate = [2.5, 2];

const subscriptionChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [
            {
                label: 'New Subscriptions',
                data: newSubs,
                backgroundColor: 'rgba(59, 130, 246, 0.7)',
                borderColor: '#3B82F6',
                borderWidth: 1,
                borderRadius: 8,
                categoryPercentage: 0.5,
                barPercentage: 0.8
            },
            {
                label: 'Unsubscribe Rate (%)',
                data: unsubRate,
                backgroundColor: 'rgba(239, 68, 68, 0.7)',
                borderColor: '#EF4444',
                borderWidth: 1,
                borderRadius: 8,
                categoryPercentage: 0.5,
                barPercentage: 0.8,
                yAxisID: 'y1'
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            intersect: false,
            mode: 'index'
        },
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#94A3B8',
                    padding: 20,
                    font: {
                        size: 12,
                        weight: '600'
                    }
                }
            },
            tooltip: {
                backgroundColor: '#1E293B',
                borderColor: '#3B82F6',
                borderWidth: 1,
                titleColor: '#F8FAFC',
                bodyColor: '#94A3B8',
                padding: 12,
                cornerRadius: 8,
                titleFont: {
                    size: 14,
                    weight: '600'
                },
                bodyFont: {
                    size: 13
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                    color: '#94A3B8',
                    padding: 10,
                    font: {
                        size: 12
                    }
                },
                title: {
                    display: true,
                    text: 'Number of Subscriptions',
                    color: '#94A3B8',
                    font: {
                        size: 12,
                        weight: '600'
                    }
                }
            },
            y1: {
                beginAtZero: true,
                position: 'right',
                grid: {
                    display: false
                },
                ticks: {
                    color: '#94A3B8',
                    padding: 10,
                    font: {
                        size: 12
                    }
                },
                title: {
                    display: true,
                    text: 'Unsubscribe Rate (%)',
                    color: '#94A3B8',
                    font: {
                        size: 12,
                        weight: '600'
                    }
                }
            },
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                    color: '#94A3B8',
                    padding: 10,
                    font: {
                        size: 13,
                        weight: '600'
                    }
                }
            }
        }
    }
}); 