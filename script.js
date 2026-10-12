/**
 * Vansh Agarwal Portfolio - Core JavaScript
 * Features: Mobile Navigation, Active Scrollspy, Project Filtering,
 * Clipboard Copy with Toast Feedback, and Back-to-Top.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- Dynamic Year ---
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // --- Header Elevation on Scroll ---
  const header = document.getElementById('navbar');
  const handleScrollHeader = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScrollHeader, { passive: true });

  // --- Mobile Navigation Menu ---
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  const openMobileMenu = () => {
    mobileToggle.classList.add('active');
    mobileToggle.setAttribute('aria-expanded', 'true');
    mobileToggle.setAttribute('aria-label', 'Close mobile navigation menu');
    navMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    mobileToggle.classList.remove('active');
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileToggle.setAttribute('aria-label', 'Open mobile navigation menu');
    navMenu.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close when clicking any nav link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          closeMobileMenu();
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && e.target !== mobileToggle) {
        closeMobileMenu();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        closeMobileMenu();
        mobileToggle.focus();
      }
    });
  }

  // --- Active Nav Link on Scroll (Scrollspy) ---
  const sections = document.querySelectorAll('section[id]');
  const updateActiveNavLink = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (targetLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach((link) => link.classList.remove('active'));
          targetLink.classList.add('active');
        }
      }
    });
  };
  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  // --- Project Filtering ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        // Update active filter button
        filterButtons.forEach((b) => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        // Filter projects
        projectCards.forEach((card) => {
          const categories = card.getAttribute('data-category') || '';
          if (filter === 'all' || categories.split(' ').includes(filter)) {
            card.classList.remove('is-hidden');
          } else {
            card.classList.add('is-hidden');
          }
        });
      });
    });
  }

  // --- Toast Notification Helper ---
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  let toastTimeout = null;

  const showToast = (message) => {
    if (!toast) return;
    if (toastMessage) toastMessage.textContent = message;
    toast.classList.add('show');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  };

  // --- Clipboard Copy Helper ---
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          // Fallback for older contexts or unsecure localhost
          const textArea = document.createElement('textarea');
          textArea.value = textToCopy;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          textArea.style.top = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          textArea.remove();
        }
        showToast(`Copied: ${textToCopy}`);
      } catch (err) {
        showToast('Unable to copy automatically');
      }
    });
  });

  // --- Back to Top Button ---
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});

