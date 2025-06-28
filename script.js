// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
        // Ensure the target section remains focusable
        targetSection.setAttribute('tabindex', '-1'); // Make the section focusable
        targetSection.focus(); // Focus on the section
    });
});

// Animate progress bars on scroll
const progressBars = document.querySelectorAll('.progress');

const animateProgressBars = () => {
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
};

document.querySelectorAll('a[href^="#skills"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
        // Ensure the skills section remains focusable
        targetSection.setAttribute('tabindex', '-1'); // Make the section focusable
        targetSection.focus(); // Focus on the section
    });
});

// Add hover effect to project cards
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.style.transform = 'translateY(-10px)';
        project.style.transition = 'transform 0.3s ease';
    });

    project.addEventListener('mouseleave', () => {
        project.style.transform = 'translateY(0)';
    });
});

// Pop-up for project details
const projectLinks = document.querySelectorAll('.project-link');

projectLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const projectTitle = link.closest('.project').querySelector('h3').innerText;
        const projectDescription = link.closest('.project').querySelector('ul').innerHTML;

        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.innerHTML = `
            <div class="popup-content">
                <h3>${projectTitle}</h3>
                <ul>${projectDescription}</ul>
                <button class="close-popup">Close</button>
            </div>
        `;
        document.body.appendChild(popup);

        // Add active class to show pop-up
        setTimeout(() => {
            popup.classList.add('active');
        }, 10);

        // Close pop-up when clicking outside or on the close button
        popup.addEventListener('click', (e) => {
            if (e.target.classList.contains('popup') || e.target.classList.contains('close-popup')) {
                popup.classList.remove('active');
                setTimeout(() => {
                    popup.remove();
                }, 300); // Match the transition duration
            }
        });
    });
});

// Scroll-triggered animations for sections
const sections = document.querySelectorAll('section');

const checkScroll = () => {
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollY = window.scrollY;
        const innerHeight = window.innerHeight;

        if (scrollY > sectionTop - innerHeight + sectionHeight / 2) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// Dynamic Year Update in Footer
const footerYear = document.querySelector('footer p');
footerYear.innerHTML = `&copy; ${new Date().getFullYear()} Hemanth Kumar Reddy Pattern. All rights reserved.`;

// Hover effect for social links
const socialLinks = document.querySelectorAll('.social-links a');

socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.2)';
        link.style.transition = 'transform 0.3s ease';
    });

    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1)';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const navbarLinks = document.querySelectorAll('#navbar a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust for navbar height
                    behavior: 'smooth'
                });

                // Update active link
                navbarLinks.forEach(nav => nav.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    // Active link on scroll
    window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY + 100; 

        navbarLinks.forEach(link => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                const sectionTop = target.offsetTop - 60;
                const sectionBottom = sectionTop + target.offsetHeight;
                
                if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                    navbarLinks.forEach(nav => nav.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    });
});
window.onload = function () {
    window.scrollTo(0, 0);
};

