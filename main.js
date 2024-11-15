// Scroll reveal
document.addEventListener('DOMContentLoaded', function() {
    const reveals = document.querySelectorAll('.reveal');

    function revealOnScroll() {
        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // Pricing toggle
    const toggleBtns = document.querySelectorAll('.pricing-toggle button');
    const prices = {
        monthly: {
            premium: '$19.99',
            pro: '$129.99'
        },
        annual: {
            premium: '$191.88',
            pro: '$1,247.88'
        }
    };

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            toggleBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const isAnnual = this.textContent.includes('Annual');
            const priceType = isAnnual ? 'annual' : 'monthly';
            
            document.querySelectorAll('.plan').forEach(plan => {
                const priceElement = plan.querySelector('.price');
                const planType = plan.classList.contains('pro') ? 'pro' : 'premium';
                priceElement.textContent = prices[priceType][planType];
            });
        });
    });

    // Add parallax effect to hero images
    const heroSection = document.querySelector('.hero');
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        const dashboard = document.querySelector('.dashboard-preview');
        const mobile = document.querySelector('.mobile-preview');
        
        dashboard.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
        mobile.style.transform = `translate(${mouseX * 40}px, ${mouseY * 40}px)`;
    });

    // Add drag scroll functionality for reviews
    const reviewsGrid = document.querySelector('.reviews-grid');
    let isDown = false;
    let startX;
    let scrollLeft;

    reviewsGrid.addEventListener('mousedown', (e) => {
        isDown = true;
        reviewsGrid.style.cursor = 'grabbing';
        startX = e.pageX - reviewsGrid.offsetLeft;
        scrollLeft = reviewsGrid.scrollLeft;
    });

    reviewsGrid.addEventListener('mouseleave', () => {
        isDown = false;
        reviewsGrid.style.cursor = 'grab';
    });

    reviewsGrid.addEventListener('mouseup', () => {
        isDown = false;
        reviewsGrid.style.cursor = 'grab';
    });

    reviewsGrid.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - reviewsGrid.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed multiplier
        reviewsGrid.scrollLeft = scrollLeft - walk;
    });
});

// Add smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 