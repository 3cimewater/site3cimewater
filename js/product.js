// =============================================
// 3CIME Water Solutions — Product Page Script
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // ── AOS Init ──────────────────────────────
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic', offset: 60 });
  }

  // ── Navbar scroll class ───────────────────
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  // ── Hamburger menu ────────────────────────
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      document.body.classList.toggle('menu-open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    // Fecha ao clicar em qualquer link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.classList.remove('menu-open');
        document.body.style.overflow = '';
      });
    });
    // Fecha ao clicar fora do menu
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.classList.remove('menu-open');
        document.body.style.overflow = '';
      }
    });
  }

  // ── Dropdown — Soluções (mobile accordion) ─
  const navDropdown = document.getElementById('navDropdown');
  const navDropdownTrigger = document.getElementById('navDropdownTrigger');
  if (navDropdown && navDropdownTrigger) {
    navDropdownTrigger.addEventListener('click', (e) => {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        e.preventDefault();
        navDropdown.classList.toggle('open');
      }
    });
    document.addEventListener('click', (e) => {
      if (!navDropdown.contains(e.target)) {
        navDropdown.classList.remove('open');
      }
    });
    window.addEventListener('scroll', () => {
      navDropdown.classList.remove('open');
    }, { passive: true });
  }

  // ── Back-to-top button ────────────────────
  const backBtn = document.getElementById('backToTop');
  if (backBtn) {
    window.addEventListener('scroll', () => {
      backBtn.classList.toggle('visible', window.scrollY > 400);
    });
    backBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── Smooth scroll for same-page anchors ───
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  console.log('%c3CIME Water Solutions', 'color:#00d4ff;font-size:1.2rem;font-weight:bold;');
  console.log('%cPágina de produto carregada com sucesso!', 'color:#64748b;');
});
