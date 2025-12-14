// Simple JavaScript for interactivity

document.addEventListener('DOMContentLoaded', function() {
  // Update copyright year
  const yearSpan = document.querySelector('footer p');
  if (yearSpan && yearSpan.textContent.includes('2024')) {
    yearSpan.textContent = yearSpan.textContent.replace('2024', new Date().getFullYear());
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Add hover effect to project images
  const projectImages = document.querySelectorAll('.project-img');
  projectImages.forEach(img => {
    img.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
    });
    
    img.addEventListener('mouseleave', function() {
      this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    });
  });

  // Console greeting
  console.log('👋 Welcome to Cassia Cai\'s portfolio!');
});