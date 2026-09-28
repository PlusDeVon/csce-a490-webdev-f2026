const toggleButton = document.getElementById('toggle');

// Check for saved theme preference on page load
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
}

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Save preference to localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

const contactOptions = [
  { checkbox: document.getElementById("email_entry"), details: document.getElementById("email_details"), field: document.getElementById("email") },
  { checkbox: document.getElementById("phone_entry"), details: document.getElementById("phone_details"), field: document.getElementById("phone") }
  ];

contactOptions.forEach(({ checkbox, details, field }) => {
  checkbox.addEventListener("change", () => {
  details.hidden = !checkbox.checked;
  field.required = checkbox.checked;

  if (!checkbox.checked) {
    field.value = "";
  }
  });
});