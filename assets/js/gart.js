/* ГАРТ — концепт-демо. Ванільний JS, без залежностей. */
(() => {
  'use strict';

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ============================================================
     1. Розклад
     ============================================================ */
  const DAYS = [
    ['ПН', 'понеділок'], ['ВТ', 'вівторок'], ['СР', 'середа'], ['ЧТ', 'четвер'],
    ['ПТ', 'пʼятниця'], ['СБ', 'субота'], ['НД', 'неділя']
  ];

  const LOAD = { 1: 'лагідно', 2: 'робоче', 3: 'на межі' };
  const S = (t, n, who, where, load) => ({ t, n, who, where, load });

  const WEEK = [
    [ S('07:00', 'Пружина', 'Ярина Дідух', 'Студія 2', 1),
      S('08:30', 'Поміст', 'Мирослав Гриців', 'Важка зона', 2),
      S('12:30', 'Метал', 'Оксана Бондар', 'Полігон', 3),
      S('18:00', 'Гарт: сила', 'Остап Кравець', 'Важка зона', 3),
      S('19:15', 'Кільце', 'Тарас Вовк', 'Студія 1', 2),
      S('20:30', 'Відпуск', 'Дана Ліщук', 'Відновлення', 1) ],

    [ S('07:00', 'Течія', 'Ярина Дідух', 'Студія 2', 1),
      S('09:00', 'Канат', 'Тарас Вовк', 'Полігон', 2),
      S('13:00', 'Гарт: сила', 'Остап Кравець', 'Важка зона', 3),
      S('18:00', 'Метал', 'Оксана Бондар', 'Полігон', 3),
      S('19:30', 'Поміст', 'Мирослав Гриців', 'Важка зона', 2),
      S('21:00', 'Пружина', 'Ярина Дідух', 'Студія 2', 1) ],

    [ S('06:30', 'Метал', 'Оксана Бондар', 'Полігон', 3),
      S('08:30', 'Пружина', 'Ярина Дідух', 'Студія 2', 1),
      S('12:00', 'Кільце', 'Тарас Вовк', 'Студія 1', 2),
      S('18:00', 'Гарт: сила', 'Остап Кравець', 'Важка зона', 3),
      S('19:15', 'Канат', 'Тарас Вовк', 'Полігон', 2),
      S('20:30', 'Відпуск', 'Дана Ліщук', 'Відновлення', 1) ],

    [ S('07:00', 'Течія', 'Ярина Дідух', 'Студія 2', 1),
      S('09:00', 'Поміст', 'Мирослав Гриців', 'Важка зона', 2),
      S('13:00', 'Метал', 'Оксана Бондар', 'Полігон', 3),
      S('18:00', 'Кільце', 'Тарас Вовк', 'Студія 1', 2),
      S('19:30', 'Гарт: сила', 'Остап Кравець', 'Важка зона', 3),
      S('21:00', 'Пружина', 'Ярина Дідух', 'Студія 2', 1) ],

    [ S('06:30', 'Гарт: сила', 'Остап Кравець', 'Важка зона', 3),
      S('08:30', 'Пружина', 'Ярина Дідух', 'Студія 2', 1),
      S('12:30', 'Канат', 'Тарас Вовк', 'Полігон', 2),
      S('17:30', 'Метал', 'Оксана Бондар', 'Полігон', 3),
      S('19:00', 'Поміст', 'Мирослав Гриців', 'Важка зона', 2),
      S('20:15', 'Відпуск', 'Дана Ліщук', 'Відновлення', 1) ],

    [ S('09:00', 'Поміст', 'Мирослав Гриців', 'Важка зона', 2),
      S('10:30', 'Метал', 'Оксана Бондар', 'Полігон', 3),
      S('12:00', 'Кільце', 'Тарас Вовк', 'Студія 1', 2),
      S('13:30', 'Гарт: сила', 'Остап Кравець', 'Важка зона', 3),
      S('16:00', 'Течія', 'Ярина Дідух', 'Студія 2', 1),
      S('17:30', 'Відпуск', 'Дана Ліщук', 'Відновлення', 1) ],

    [ S('10:00', 'Пружина', 'Ярина Дідух', 'Студія 2', 1),
      S('11:30', 'Канат', 'Тарас Вовк', 'Полігон', 2),
      S('13:00', 'Поміст', 'Мирослав Гриців', 'Важка зона', 2),
      S('15:00', 'Течія', 'Ярина Дідух', 'Студія 2', 1),
      S('17:00', 'Відпуск', 'Дана Ліщук', 'Відновлення', 1) ]
  ];

  const daysEl = $('#days');
  const schedEl = $('#sched');

  if (daysEl && schedEl) {
    const todayIdx = (new Date().getDay() + 6) % 7;

    DAYS.forEach(([short, long], i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'day';
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-selected', String(i === todayIdx));
      b.setAttribute('aria-controls', 'sched');
      b.setAttribute('aria-label', long + (i === todayIdx ? ', сьогодні' : ''));
      if (i === todayIdx) b.dataset.today = 'true';
      b.tabIndex = i === todayIdx ? 0 : -1;
      b.textContent = short;
      b.addEventListener('click', () => showDay(i));
      daysEl.appendChild(b);
    });

    const dayBtns = $$('.day', daysEl);

    function showDay(i) {
      dayBtns.forEach((d, k) => {
        d.setAttribute('aria-selected', String(k === i));
        d.tabIndex = k === i ? 0 : -1;
      });
      schedEl.innerHTML = WEEK[i].map(s => {
        const dots = [1, 2, 3].map(n => '<i class="' + (n <= s.load ? 'on' : '') + '"></i>').join('');
        return '<div class="slot">' +
          '<span class="slot__t">' + s.t + '</span>' +
          '<span class="slot__n">' + s.n + '</span>' +
          '<span class="slot__who">' + s.who + '</span>' +
          '<span class="slot__where">' + s.where + '</span>' +
          '<span class="slot__load"><span class="slot__dots" aria-hidden="true">' + dots + '</span>' +
          '<span>' + LOAD[s.load] + '</span></span>' +
          '</div>';
      }).join('');
    }

    daysEl.addEventListener('keydown', (e) => {
      const cur = dayBtns.findIndex(d => d.getAttribute('aria-selected') === 'true');
      let next = null;
      if (e.key === 'ArrowRight') next = (cur + 1) % dayBtns.length;
      if (e.key === 'ArrowLeft') next = (cur - 1 + dayBtns.length) % dayBtns.length;
      if (e.key === 'Home') next = 0;
      if (e.key === 'End') next = dayBtns.length - 1;
      if (next === null) return;
      e.preventDefault();
      showDay(next);
      dayBtns[next].focus();
    });

    showDay(todayIdx);
  }

  /* ============================================================
     2. Шапка та активний розділ
     ============================================================ */
  const nav = $('#nav');
  const navLinks = $$('.nav__link');
  const sections = $$('main section[id]');

  function paint() { if (nav) nav.dataset.stuck = String(window.scrollY > 24); }

  let rafId = 0;
  function onScroll() {
    if (rafId) return;
    rafId = requestAnimationFrame(() => { rafId = 0; paint(); });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) return;
    if (rafId) { cancelAnimationFrame(rafId); rafId = 0; }
    paint();
  });
  paint();

  if ('IntersectionObserver' in window && sections.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        navLinks.forEach(l => l.setAttribute('aria-current', String(l.getAttribute('href') === '#' + e.target.id)));
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
    sections.forEach(s => spy.observe(s));
  }

  /* ============================================================
     3. Поява блоків
     ============================================================ */
  if (!calm && 'IntersectionObserver' in window) {
    const rises = $$('[data-rise]');
    const reveal = (el, stagger) => {
      const sibs = Array.from(el.parentElement.children).filter(n => n.hasAttribute('data-rise'));
      const i = Math.max(0, sibs.indexOf(el));
      el.style.transitionDelay = stagger ? Math.min(i * 60, 240) + 'ms' : '0ms';
      el.dataset.in = 'true';
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        // видно зараз — або лишилось вище екрана після стрибка по якорю
        if (!e.isIntersecting && e.boundingClientRect.top > 0) return;
        reveal(e.target, e.isIntersecting);
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.04 });
    rises.forEach(r => io.observe(r));

    window.addEventListener('load', () => {
      rises.forEach(r => {
        if (r.dataset.in === 'true') return;
        if (r.getBoundingClientRect().top < window.innerHeight) { reveal(r, true); io.unobserve(r); }
      });
    });
  } else {
    $$('[data-rise]').forEach(r => { r.dataset.in = 'true'; });
  }

  /* ============================================================
     3b. Відкриття героя й лічильники
     ============================================================ */
  // клас вмикає хореографію: до нього хіро тримається у стартовому стані
  const start = () => requestAnimationFrame(() => document.body.classList.add('ready'));
  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start);
  // страховка: якщо load не прийшов (кеш, фонова вкладка), не лишаємо хіро прихованим
  setTimeout(() => document.body.classList.add('ready'), 1200);

  const nf = new Intl.NumberFormat('uk-UA');

  function runCount(el) {
    const to = Number(el.dataset.to);
    if (!Number.isFinite(to)) return;
    if (calm) { el.textContent = nf.format(to); return; }
    const dur = 1100;
    let t0 = null;
    const tick = (t) => {
      if (t0 === null) t0 = t;
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = nf.format(Math.round(to * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    el.textContent = '0';
    requestAnimationFrame(tick);
  }

  const counters = $$('.count');
  if (counters.length) {
    if ('IntersectionObserver' in window) {
      const co = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          runCount(e.target);
          co.unobserve(e.target);
        });
      }, { threshold: 0.6 });
      counters.forEach(c => co.observe(c));
    } else {
      counters.forEach(c => { c.textContent = nf.format(Number(c.dataset.to)); });
    }
  }

  /* ============================================================
     4. Мобільне меню
     ============================================================ */
  const burger = $('#burger');
  const drawer = $('#drawer');

  if (burger && drawer) {
    const setOpen = (open) => {
      drawer.dataset.open = String(open);
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Закрити меню' : 'Відкрити меню');
      document.body.style.overflow = open ? 'hidden' : '';
    };
    burger.addEventListener('click', () => setOpen(drawer.dataset.open !== 'true'));
    $$('a', drawer).forEach(a => a.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.dataset.open === 'true') { setOpen(false); burger.focus(); }
    });
  }

  /* ============================================================
     5. Картка відеотуру — чесно кажемо, що це демо
     ============================================================ */
  const tour = $('#tourBtn');
  if (tour) {
    tour.addEventListener('click', () => {
      const note = document.createElement('p');
      note.className = 'label';
      note.style.cssText = 'margin-top:.6rem;max-width:22rem';
      note.textContent = 'Відеотур у демоверсії не відтворюється — тут стоїть плеєр клубу.';
      note.setAttribute('role', 'status');
      const holder = tour.parentElement;
      if (!holder.querySelector('[role="status"]')) holder.appendChild(note);
    });
  }

  /* ============================================================
     6. Форма запису — перевірка у браузері
     ============================================================ */
  const form = $('#bookForm');

  if (form) {
    const dateInput = $('#i-date');
    if (dateInput) {
      const t = new Date();
      const pad = (n) => String(n).padStart(2, '0');
      dateInput.min = t.getFullYear() + '-' + pad(t.getMonth() + 1) + '-' + pad(t.getDate());
    }

    const RULES = {
      'i-name': (v) => {
        if (!v.trim()) return 'Вкажіть імʼя — так ми знатимемо, кого зустрічати.';
        if (v.trim().length < 2) return 'Замало символів. Введіть імʼя повністю.';
        return '';
      },
      'i-phone': (v) => {
        const d = v.replace(/\D/g, '');
        if (!d) return 'Потрібен номер: ним ми підтвердимо дату візиту.';
        if (!/^(?:380\d{9}|0\d{9})$/.test(d)) return 'Формат не підходить. Введіть у вигляді +380 XX XXX XX XX.';
        return '';
      },
      'i-date': (v) => {
        if (!v) return 'Оберіть дату — пробний день бронюється наперед.';
        const picked = new Date(v + 'T00:00:00');
        const today = new Date(); today.setHours(0, 0, 0, 0);
        if (picked < today) return 'Ця дата вже минула. Оберіть сьогоднішній або пізніший день.';
        return '';
      }
    };

    function check(input, show) {
      const rule = RULES[input.id];
      if (!rule) return true;
      const msg = rule(input.value);
      const field = input.closest('.field');
      const err = $('[data-err]', field);
      if (msg && show) {
        field.dataset.invalid = 'true';
        input.setAttribute('aria-invalid', 'true');
        $('i', err).textContent = msg;
      } else if (!msg) {
        field.dataset.invalid = 'false';
        input.removeAttribute('aria-invalid');
      }
      return !msg;
    }

    Object.keys(RULES).forEach(id => {
      const el = $('#' + id);
      if (!el) return;
      el.addEventListener('blur', () => check(el, true));
      el.addEventListener('input', () => {
        if (el.closest('.field').dataset.invalid === 'true') check(el, true);
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const ids = Object.keys(RULES);
      const bad = ids.filter(id => !check($('#' + id), true));
      const ok = $('#formOk');

      if (bad.length) {
        ok.dataset.show = 'false';
        const first = $('#' + bad[0]);
        first.focus();
        first.scrollIntoView({ block: 'center', behavior: calm ? 'auto' : 'smooth' });
        return;
      }

      const btn = $('#submitBtn');
      const label = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '<span>Перевіряємо…</span>';

      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = label;
        const name = $('#i-name').value.trim();
        const d = new Date($('#i-date').value + 'T00:00:00');
        const fmt = d.toLocaleDateString('uk-UA', { day: 'numeric', month: 'long' });
        $('#okMain').textContent = name + ', заявку на ' + fmt + ' прийнято.';
        ok.dataset.show = 'true';
        ok.scrollIntoView({ block: 'center', behavior: calm ? 'auto' : 'smooth' });
        form.reset();
        $$('.field', form).forEach(f => { f.dataset.invalid = 'false'; });
      }, 600);
    });
  }
})();
