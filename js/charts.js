
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('skillsChart').getContext('2d');

    const data = {
        labels: [
            'Web & App Development',
            'Frontend',
            'Backend & APIs',
            'Database',
            'UI/UX Tools',
            'Deployment & DevOps',
            'Version Control & Methodologies',
            'OS & Languages'
        ],
        datasets: [{
            label: 'Proficiency (%)',
            data: [95, 90, 92, 88, 85, 80, 85, 75],
            backgroundColor: [
                'rgba(102, 126, 234, 0.8)',
                'rgba(118, 75, 162, 0.8)',
                'rgba(102, 126, 234, 0.8)',
                'rgba(118, 75, 162, 0.8)',
                'rgba(102, 126, 234, 0.8)',
                'rgba(118, 75, 162, 0.8)',
                'rgba(102, 126, 234, 0.8)',
                'rgba(118, 75, 162, 0.8)'
            ],
            borderColor: 'rgba(0,0,0,0.8)',
            borderWidth: 1,
            borderRadius: 5
        }]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.dataset.label + ': ' + context.parsed.y + '%';
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                ticks: { stepSize: 10 },
                grid: { color: 'rgba(0,0,0,0.1)' }
            },
            x: {
                grid: { display: false }
            }
        }
    };

    new Chart(ctx, {
        type: 'bar', // you can change to 'radar' for circular style
        data: data,
        options: options
    });
});
 
