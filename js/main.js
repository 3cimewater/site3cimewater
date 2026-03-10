/* ========================================
   3Cime Water Solutions — JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  // =====================
  // AOS Init
  // =====================
  AOS.init({
    duration: 700,
    once: true,
    offset: 80,
    easing: 'ease-out-cubic'
  });

  // =====================
  // Active nav link on scroll
  // =====================
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    const scrollY = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (link) {
        if (scrollY >= top && scrollY < bottom) {
          document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  }

  // =====================
  // Navbar scroll behavior
  // =====================
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('backToTop');

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    if (scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
    updateActiveNavLink();
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // =====================
  // Back to top
  // =====================
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // =====================
  // Mobile hamburger
  // =====================
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Fecha ao clicar em qualquer link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
    });
  });

  // Fecha ao clicar fora
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
    }
  });

  // =====================
  // Dropdown — Soluções (mobile toggle)
  // =====================
  const navDropdown = document.getElementById('navDropdown');
  const navDropdownTrigger = document.getElementById('navDropdownTrigger');

  if (navDropdown && navDropdownTrigger) {
    // Mobile: clique no trigger abre/fecha accordion
    navDropdownTrigger.addEventListener('click', (e) => {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        e.preventDefault();
        navDropdown.classList.toggle('open');
      }
      // Desktop: o hover CSS cuida — sem preventDefault para o link funcionar
    });

    // Fechar dropdown ao clicar fora
    document.addEventListener('click', (e) => {
      if (!navDropdown.contains(e.target)) {
        navDropdown.classList.remove('open');
      }
    });

    // Fechar dropdown ao rolar (desktop)
    window.addEventListener('scroll', () => {
      navDropdown.classList.remove('open');
    }, { passive: true });
  }

  // =====================
  // Smooth scroll for all anchor links
  // =====================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'));
        const targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });

  // =====================
  // Counter Animation
  // =====================
  const statNums = document.querySelectorAll('.stat-num[data-count]');
  let countersStarted = false;

  function animateCounters() {
    if (countersStarted) return;
    const heroStats = document.querySelector('.hero-stats');
    if (!heroStats) return;
    const rect = heroStats.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      countersStarted = true;
      statNums.forEach(el => {
        const target = parseInt(el.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = Math.floor(current);
        }, 16);
      });
    }
  }

  window.addEventListener('scroll', animateCounters, { passive: true });
  animateCounters();

  // =====================
  // Circular progress animation (Diferenciais)
  // =====================
  const progressCircles = document.querySelectorAll('.metric-circle .progress');
  let metricsAnimated = false;

  // Map class to percentage
  const percentMap = { p97: 97, p85: 85, p99: 99 };
  const circumference = 2 * Math.PI * 40; // r=40 => ~251.2

  function animateMetrics() {
    if (metricsAnimated) return;
    const section = document.querySelector('.diferenciais');
    if (!section) return;
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      metricsAnimated = true;
      progressCircles.forEach(circle => {
        const classes = Array.from(circle.classList);
        const pClass = classes.find(c => percentMap[c]);
        if (pClass) {
          const pct = percentMap[pClass];
          const offset = circumference - (pct / 100) * circumference;
          circle.style.strokeDashoffset = offset;
        }
      });
    }
  }

  // Inject gradient defs into SVGs
  document.querySelectorAll('.metric-circle svg').forEach(svg => {
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    defs.innerHTML = `<linearGradient id="metricGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00d4ff"/>
      <stop offset="100%" stop-color="#0066cc"/>
    </linearGradient>`;
    svg.prepend(defs);
  });

  window.addEventListener('scroll', animateMetrics, { passive: true });
  animateMetrics();

  // =====================
  // Particles (Hero background)
  // =====================
  const canvas = document.createElement('canvas');
  const particlesContainer = document.getElementById('particles');
  if (particlesContainer) {
    canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;';
    particlesContainer.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animId;

    function resizeCanvas() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function createParticles() {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 18000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.4 + 0.1
        });
      }
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        // Move
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`;
        ctx.fill();

        // Connect nearby
        particles.slice(i + 1).forEach(p2 => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.05 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(drawParticles);
    }

    // Init
    resizeCanvas();
    createParticles();
    drawParticles();

    window.addEventListener('resize', () => {
      cancelAnimationFrame(animId);
      resizeCanvas();
      createParticles();
      drawParticles();
    });
  }

  // =====================
  // Contact form submission
  // =====================

  // ── EmailJS configuração ───────────────────────────────────────────────────
  // Para ativar o envio de e-mail:
  // 1. Crie uma conta gratuita em https://www.emailjs.com
  // 2. Crie um "Email Service" (Gmail, Outlook etc.) → copie o Service ID
  // 3. Crie um "Email Template" com as variáveis abaixo → copie o Template ID
  // 4. Em Account → API Keys → copie a Public Key
  // 5. Substitua os valores abaixo pelas suas credenciais reais
  const EMAILJS_PUBLIC_KEY  = 'SUA_PUBLIC_KEY_AQUI';
  const EMAILJS_SERVICE_ID  = 'SUA_SERVICE_ID_AQUI';
  const EMAILJS_TEMPLATE_ID = 'SUA_TEMPLATE_ID_AQUI';
  const DEST_EMAIL          = 'vlamir.petrelli@3cimewater.com.br';

  // Inicializa EmailJS somente se as chaves estiverem configuradas
  const emailjsReady = (
    EMAILJS_PUBLIC_KEY  !== 'SUA_PUBLIC_KEY_AQUI' &&
    EMAILJS_SERVICE_ID  !== 'SUA_SERVICE_ID_AQUI' &&
    EMAILJS_TEMPLATE_ID !== 'SUA_TEMPLATE_ID_AQUI'
  );
  if (emailjsReady && typeof emailjs !== 'undefined') {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }

  // Mapa de valores do select → rótulo legível
  const solucaoLabel = {
    'aquadisk':          'AquaDisk® — Filtro de disco para canal',
    'aqua-minidisk':     'Aqua MiniDisk® — Versão compacta',
    'aqua-megadisk':     'Aqua MegaDisk® — Alta capacidade municipal',
    'aquaprime':         'AquaPrime® — Tratamento primário avançado',
    'aquastorm':         'AquaStorm™ — Águas pluviais e escoamento',
    'aqua-diamond':      'Aqua Diamond® — Geometria de alta eficiência',
    'aquadrum':          'AquaDrum® — Tambor rotativo autossuficiente',
    'aquamb-process':    'AquaMB Process® — Têxtil + ultrafiltração',
    'aqua-mbr':          'Aqua-Aerobic® MBR — Biorreator de membrana',
    'aqua-multibore-c':  'Aqua MultiBore® C Series — Membranas cerâmicas',
    'aqua-multibore-p':  'Aqua MultiBore® P Series — Membranas poliméricas',
    'gbt-omega':         'GBT — Esteira Gravitacional OMEGA',
    'daf':               'DAF — Flotação por Ar Dissolvido',
    'bfp':               'Belt Filter Press — Filtro de esteira OMEGA',
    'screw-press':       'Screw Press — Prensa parafuso',
    'sludge-dryer':      'Sludge Dryer — Secador de baixa temperatura',
    'outro':             'Outro / Ainda não sei'
  };

  const contatoForm = document.getElementById('contatoForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contatoForm) {
    contatoForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = contatoForm.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
      btn.disabled = true;

      const formData = {
        nome:      contatoForm.nome.value.trim(),
        empresa:   contatoForm.empresa.value.trim(),
        email:     contatoForm.email.value.trim(),
        telefone:  contatoForm.telefone.value.trim(),
        segmento:  contatoForm.segmento.value,
        solucao:   contatoForm.solucao.value,
        mensagem:  contatoForm.mensagem.value.trim()
      };

      const solucaoTexto = solucaoLabel[formData.solucao] || formData.solucao || 'Não informado';
      const dataHora     = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

      // ── 1. Salvar na API REST (backup) ──────────────────────────────────
      try {
        await fetch('tables/contatos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
      } catch (err) {
        console.warn('API REST indisponível:', err.message);
      }

      // ── 2. Enviar e-mail via EmailJS ─────────────────────────────────────
      if (emailjsReady && typeof emailjs !== 'undefined') {
        try {
          await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
            dest_email:     DEST_EMAIL,
            from_nome:      formData.nome,
            from_empresa:   formData.empresa,
            from_email:     formData.email,
            from_telefone:  formData.telefone,
            segmento:       formData.segmento,
            solucao:        solucaoTexto,
            mensagem:       formData.mensagem,
            data_hora:      dataHora,
            reply_to:       formData.email
          });
          console.log('E-mail enviado com sucesso via EmailJS.');
        } catch (err) {
          console.warn('EmailJS: falha no envio —', err.text || err.message);
        }
      } else {
        console.info('EmailJS não configurado — apenas salvo na API REST.');
      }

      // ── 3. Exibir mensagem de sucesso ────────────────────────────────────
      setTimeout(() => {
        contatoForm.style.display = 'none';
        formSuccess.style.display = 'block';
      }, 600);
    });
  }

  // =====================
  // Newsletter form
  // =====================
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input[type="email"]');
      const btn = newsletterForm.querySelector('button');
      const email = input.value;

      btn.innerHTML = '<i class="fas fa-check"></i>';
      btn.style.background = 'linear-gradient(135deg, #00c896, #00a87a)';

      try {
        await fetch('tables/newsletter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });
      } catch (err) {
        console.warn('Newsletter: API indisponível.');
      }

      input.value = '';
      input.placeholder = 'Inscrição realizada!';
      setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-paper-plane"></i>';
        btn.style.background = '';
        input.placeholder = 'seu@email.com';
      }, 3000);
    });
  }

  // =====================
  // Card hover ripple effect
  // =====================
  document.querySelectorAll('.solucao-card, .info-card, .diff-item').forEach(card => {
    card.addEventListener('mouseenter', function () {
      this.style.willChange = 'transform, box-shadow';
    });
    card.addEventListener('mouseleave', function () {
      this.style.willChange = 'auto';
    });
  });

  // =====================
  // Intersection Observer for enhanced animations
  // =====================
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.solucao-card, .segmento, .pillar').forEach(el => {
    observer.observe(el);
  });

  // =====================
  // Typing effect for hero subtitle (optional subtle enhancement)
  // =====================
  const heroBadge = document.querySelector('.hero-badge');
  if (heroBadge) {
    // Add a subtle pulse animation via JS
    setInterval(() => {
      heroBadge.style.boxShadow = '0 0 20px rgba(0,212,255,0.3)';
      setTimeout(() => {
        heroBadge.style.boxShadow = 'none';
      }, 800);
    }, 3000);
  }

  // =====================
  // Phone mask
  // =====================
  const phoneInput = document.getElementById('telefone');
  if (phoneInput) {
    phoneInput.addEventListener('input', function () {
      let val = this.value.replace(/\D/g, '');
      if (val.length <= 11) {
        val = val.replace(/^(\d{2})(\d)/, '($1) $2');
        val = val.replace(/(\d{4,5})(\d{4})$/, '$1-$2');
      }
      this.value = val;
    });
  }

  console.log('%c3Cime Water Solutions 💧', 'color:#00d4ff;font-size:1.2rem;font-weight:bold;');
  console.log('%cWebsite carregado com sucesso!', 'color:#64748b;');
});
