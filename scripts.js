
// On page load, apply dark theme if saved
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

function toggleTheme() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function openAbout() {
  document.getElementById('about-modal').classList.remove('hidden');
}

function closeAbout() {
  document.getElementById('about-modal').classList.add('hidden');
}

// Animate each line of the poem on page load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.poem-lines').forEach(block => {
    const lines = block.querySelectorAll('p');
    lines.forEach((line, index) => {
      line.classList.add('fade-line');
      line.style.animationDelay = `${(index + 1) * 0.1}s`;
    });
  });
});