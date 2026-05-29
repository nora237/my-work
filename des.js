*1. Menu burger responsive*
<nav class="navbar">
  <div class="logo">TonNom</div>
  <ul class="nav-links">
    <li><a href="#accueil">Accueil</a></li>
    <li><a href="#projets">Projets</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <div class="burger">
    <span></span><span></span><span></span>
  </div>
</nav>
// Toggle menu mobile
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('toggle');
});

// Ferme le menu quand on clique sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    burger.classList.remove('toggle');
  });
});
Avec ce CSS à côté :
.nav-links { display: flex; gap: 2rem; }
.burger { display: none; cursor: pointer; }
.burger span { display: block; width: 25px; height: 3px; background: #fff; margin: 5px; }

@media (max-width: 768px) {
  .nav-links {
    position: absolute; right: 0; top: 60px;
    background: #111; flex-direction: column;
    width: 100%; text-align: center;
    transform: translateX(100%); transition: 0.3s;
  }
  .nav-links.active { transform: translateX(0); }
  .burger { display: block; }
}
*2. Animation d’apparition au scroll - responsive et légère*
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });


