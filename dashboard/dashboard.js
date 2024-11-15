document.addEventListener('DOMContentLoaded', function() {
    fetchPropsData();
    initializeCommonElements();
    initializePropsPage();
});

async function fetchPropsData() {
    try {
        // Replace with your actual API endpoint
        const response = await fetch('https://your-api.com/props');
        const data = await response.json();
        populateProps(data);
    } catch (error) {
        console.error('Error fetching props data:', error);
        // Handle error appropriately
    }
}

function populateProps(props) {
    const propsGrid = document.querySelector('.props-grid');
    propsGrid.innerHTML = ''; // Clear existing content

    props.forEach(prop => {
        const propCard = document.createElement('div');
        propCard.className = 'prop-card';
        propCard.innerHTML = `
            <div class="prop-header">
                <div class="game-info">
                    <span class="game-time">${prop.gameTime}</span>
                    <span class="game-teams">${prop.teams}</span>
                </div>
                <div class="prop-badges">
                    <div class="prop-badge ev-positive">${prop.ev}% EV</div>
                    ${prop.hotStreak ? '<div class="prop-badge hot-streak">🔥 Hot</div>' : ''}
                </div>
            </div>
            <div class="prop-content">
                <div class="player-info">
                    <img src="${prop.playerImage}" alt="${prop.playerName}" class="player-image">
                    <div class="player-details">
                        <span class="player-name">${prop.playerName}</span>
                        <span class="prop-detail">${prop.propDetail}</span>
                    </div>
                </div>
                <div class="prop-insights">
                    ${prop.insights.map(insight => `
                        <div class="insight-row">
                            <span class="insight-label">${insight.label}</span>
                            <span class="insight-trend ${insight.trend >= 70 ? 'positive' : 'negative'}">${insight.trend}%</span>
                            <span class="insight-value">${insight.value}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="prop-actions">
                <div class="sportsbooks">
                    ${prop.sportsbooks.map(sportsbook => `
                        <img src="${sportsbook.logo}" alt="${sportsbook.name}">
                    `).join('')}
                </div>
                <button class="analyze-btn">
                    <i class="fas fa-chart-line"></i>
                    Analysis
                </button>
            </div>
        `;
        propsGrid.appendChild(propCard);
    });
}

function initializeCommonElements() {
    const menuLinks = document.querySelectorAll('.nav-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function initializePropsPage() {
    const sportBtns = document.querySelectorAll('.sport-btn');
    sportBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            sportBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const propTypeBtns = document.querySelectorAll('.prop-type-btn');
    propTypeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            propTypeBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const analyzeBtns = document.querySelectorAll('.analyze-btn');
    analyzeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Analyze clicked');
        });
    });
} 