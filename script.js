// Close the mobile menu after a nav link is tapped
const menuToggle = document.getElementById('menu-toggle');
document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.checked = false;
  });
});

// Remember the chosen theme (dark by default, checked = light)
const themeToggle = document.getElementById('theme-toggle');
try {
  themeToggle.checked = localStorage.getItem('theme') === 'light';
  themeToggle.addEventListener('change', () => {
    localStorage.setItem('theme', themeToggle.checked ? 'light' : 'dark');
  });
} catch (e) {
  // storage unavailable: theme simply won't persist
}
