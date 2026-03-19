/* ═══════════════════════════════════════════════════════════
   main.js  –  közös navbar / footer inject + shared logic
═══════════════════════════════════════════════════════════ */

/* ── 1. Navbar HTML ── */
const NAV_HTML = `
<header id="navbar" class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm transition-shadow duration-300">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16 lg:h-20">

      <!-- Logo -->
      <a href="index.html" class="flex items-center gap-2 group">
        <div class="w-9 h-9 bg-orange-600 rounded-lg flex items-center justify-center shadow-md group-hover:bg-orange-700 transition-colors">
          <i data-lucide="hard-hat" class="w-5 h-5 text-white"></i>
        </div>
        <div class="text-left">
          <div class="font-bold text-gray-900 text-sm leading-tight">ÉpítőMester</div>
          <div class="text-xs text-orange-600 font-medium leading-tight">Kft.</div>
        </div>
      </a>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-8">
        <a href="index.html"            class="nav-link text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors py-1">Főoldal</a>
        <a href="rolunk.html"           class="nav-link text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors py-1">Rólunk</a>
        <a href="szolgaltatasok.html"   class="nav-link text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors py-1">Szolgáltatások</a>
        <a href="referenciak.html"      class="nav-link text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors py-1">Referenciák</a>
        <a href="kapcsolat.html"        class="nav-link text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors py-1">Kapcsolat</a>
      </nav>

      <!-- CTA desktop -->
      <a href="kapcsolat.html" class="hidden md:inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm">
        <i data-lucide="phone" class="w-4 h-4"></i>
        Ajánlatot kérek
      </a>

      <!-- Hamburger -->
      <button id="menu-btn" class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
        <i data-lucide="menu" class="w-5 h-5" id="menu-icon"></i>
      </button>
    </div>

    <!-- Mobile menu -->
    <div id="mobile-menu">
      <div class="pb-4 space-y-1 border-t border-gray-100 pt-3">
        <a href="index.html"            class="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Főoldal</a>
        <a href="rolunk.html"           class="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Rólunk</a>
        <a href="szolgaltatasok.html"   class="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Szolgáltatások</a>
        <a href="referenciak.html"      class="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Referenciák</a>
        <a href="kapcsolat.html"        class="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Kapcsolat</a>
        <div class="px-4 pt-2">
          <a href="kapcsolat.html" class="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors">Ajánlatot kérek</a>
        </div>
      </div>
    </div>
  </div>
</header>
`;

/* ── 2. Footer HTML ── */
const FOOTER_HTML = `
<footer class="bg-gray-900 text-gray-400">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

      <div class="lg:col-span-2">
        <div class="flex items-center gap-2 mb-4">
          <div class="w-9 h-9 bg-orange-600 rounded-lg flex items-center justify-center">
            <i data-lucide="hard-hat" class="w-5 h-5 text-white"></i>
          </div>
          <div>
            <div class="font-bold text-white text-sm leading-tight">ÉpítőMester Kft.</div>
            <div class="text-xs text-orange-500 leading-tight">Megbízható kivitelezés</div>
          </div>
        </div>
        <p class="text-sm leading-relaxed max-w-xs mb-5">Magas minőségű építőipari megoldások 2008 óta. Lakóépületek, ipari csarnokok, felújítások Magyarország-szerte.</p>
        <div class="flex gap-3">
          <a href="#" class="w-8 h-8 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors"><i data-lucide="facebook" class="w-3.5 h-3.5"></i></a>
          <a href="#" class="w-8 h-8 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors"><i data-lucide="instagram" class="w-3.5 h-3.5"></i></a>
          <a href="#" class="w-8 h-8 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors"><i data-lucide="linkedin" class="w-3.5 h-3.5"></i></a>
        </div>
      </div>

      <div>
        <h4 class="text-white font-bold text-sm mb-4">Navigáció</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="index.html"          class="hover:text-orange-400 transition-colors">Főoldal</a></li>
          <li><a href="rolunk.html"         class="hover:text-orange-400 transition-colors">Rólunk</a></li>
          <li><a href="szolgaltatasok.html" class="hover:text-orange-400 transition-colors">Szolgáltatások</a></li>
          <li><a href="referenciak.html"    class="hover:text-orange-400 transition-colors">Referenciák</a></li>
          <li><a href="kapcsolat.html"      class="hover:text-orange-400 transition-colors">Kapcsolat</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-white font-bold text-sm mb-4">Elérhetőség</h4>
        <ul class="space-y-3 text-sm">
          <li class="flex items-start gap-2">
            <i data-lucide="map-pin" class="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0"></i>
            Cím kérésre megadható
          </li>
          <li class="flex items-center gap-2">
            <i data-lucide="phone" class="w-4 h-4 text-orange-500 flex-shrink-0"></i>
            +36 30 123 4567
          </li>
          <li class="flex items-center gap-2">
            <i data-lucide="mail" class="w-4 h-4 text-orange-500 flex-shrink-0"></i>
            info@epitomester.hu
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
      <p>© 2024 ÉpítőMester Kft. Minden jog fenntartva.</p>
      <div class="flex gap-5">
        <a href="#" class="hover:text-orange-400 transition-colors">Adatvédelmi tájékoztató</a>
        <a href="#" class="hover:text-orange-400 transition-colors">Általános feltételek</a>
        <a href="#" class="hover:text-orange-400 transition-colors">Impresszum</a>
      </div>
    </div>
  </div>
</footer>

<!-- Scroll to top -->
<button id="scroll-top" onclick="window.scrollTo({top:0,behavior:'smooth'})"
  class="fixed bottom-6 right-6 z-40 w-11 h-11 bg-orange-600 hover:bg-orange-700 text-white rounded-xl shadow-lg flex items-center justify-center transition-all">
  <i data-lucide="arrow-up" class="w-4 h-4"></i>
</button>
`;

/* ── 3. Inject nav + footer ── */
document.addEventListener('DOMContentLoaded', () => {
  const navSlot    = document.getElementById('nav-placeholder');
  const footerSlot = document.getElementById('footer-placeholder');
  if (navSlot)    navSlot.innerHTML    = NAV_HTML;
  if (footerSlot) footerSlot.innerHTML = FOOTER_HTML;

  // Lucide icons (first pass)
  lucide.createIcons();

  // Highlight active nav link
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Navbar scroll shadow
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) navbar.classList.toggle('navbar-scrolled', window.scrollY > 10);
    const btn = document.getElementById('scroll-top');
    if (btn) btn.classList.toggle('visible', window.scrollY > 300);
  });

  // Mobile menu toggle
  const menuBtn = document.getElementById('menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      const menu = document.getElementById('mobile-menu');
      const icon = document.getElementById('menu-icon');
      menu.classList.toggle('open');
      icon.setAttribute('data-lucide', menu.classList.contains('open') ? 'x' : 'menu');
      lucide.createIcons();
    });
  }

  // AOS
  AOS.init({ duration: 700, once: true, offset: 60 });
});
