/* 
 * ENTERPRISE INTERACTION LAYER 
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Navbar Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.background = 'rgba(5, 5, 5, 0.98)';
        } else {
            header.style.padding = '0';
            header.style.background = 'rgba(5, 5, 5, 0.9)';
        }
    });

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .hero-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });

    console.log("Grover's Gym Enterprise Framework Loaded - Katihar Node");
});
