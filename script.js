// Keep only one accordion open at a time
document.querySelectorAll('.accordion details').forEach(d => {
  d.addEventListener('toggle', () => {
    if (d.open) {
      document.querySelectorAll('.accordion details').forEach(o => {
        if (o !== d) o.open = false;
      });
    }
  });
});

// Optional: menu toggle (add a drawer if your screenshot has it)
document.querySelectorAll('.hamburger').forEach(btn => {
  btn.addEventListener('click', () => {
    // Implement drawer toggle if needed
  });
});
