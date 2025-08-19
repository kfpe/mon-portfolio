// --- DARK MODE (Bootstrap 5.3 data-bs-theme) ---
const htmlEl = document.documentElement;
const btnDesktop = document.getElementById('themeToggle');
const btnMobile  = document.getElementById('themeToggleMobile');

function setTheme(mode) {
  htmlEl.setAttribute('data-bs-theme', mode);
  localStorage.setItem('theme', mode);
  // Met à jour les libellés/icônes
  const toDark = mode === 'light';
  if (btnDesktop) {
    btnDesktop.innerHTML = toDark
      ? '<i class="fa-regular fa-moon me-1"></i><span>Dark</span>'
      : '<i class="fa-regular fa-sun me-1"></i><span>Light</span>';
  }
  if (btnMobile) {
    btnMobile.innerHTML = toDark
      ? '<i class="fa-regular fa-moon me-2"></i><span>Activer Dark mode</span>'
      : '<i class="fa-regular fa-sun me-2"></i><span>Désactiver Dark mode</span>';
  }
}

// Appliquer le thème initial
setTheme(localStorage.getItem('theme') || 'light');

// Boutons
btnDesktop?.addEventListener('click', () => {
  setTheme(htmlEl.getAttribute('data-bs-theme') === 'light' ? 'dark' : 'light');
});
btnMobile?.addEventListener('click', () => {
  setTheme(htmlEl.getAttribute('data-bs-theme') === 'light' ? 'dark' : 'light');
});

// --- Compétences dynamiques (typing) ---
document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('competencesDynamic');
  if (!target) return;
  const items = ["HTML/CSS", "Bootstrap 5", "JavaScript", "PHP", "Laravel 10", "Java", "VBA/VB"];
  let i = 0, j = 0, typing = true;

  const tick = () => {
    if (typing) {
      if (j < items[i].length) {
        target.textContent += items[i][j++];
      } else { typing = false; setTimeout(tick, 1500); return; }
    } else {
      if (j > 0) {
        target.textContent = items[i].slice(0, --j);
      } else { typing = true; i = (i + 1) % items.length; }
    }
    setTimeout(tick, 80);
  };
  tick();
});

// --- Validation Bootstrap du formulaire de contact ---
(() => {
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault(); event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();

// --- Année dynamique footer ---
document.getElementById('year').textContent = new Date().getFullYear();
