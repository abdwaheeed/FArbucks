const names = document.getElementById('name');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const form = document.getElementById('form');
const phone = document.getElementById('phone')

const phoneRegex = /^(08|\+62)[0-9]+$/

form.addEventListener('submit', (e) => {

  if (names.value === '' || names.value == null) {
    alert('Name is required');
  }

  if (password.value.length <= 5) {
    alert('Password must be longer than 6 characters');
  }

  if (password.value.length >= 20) {
    alert('Password must be less than 20 characters');
  }

  if (confirmPassword.value !== password.value) {
    alert('Passwords do not match');
  }

  if(!phoneRegex.test(phone)){
    alert('Phone number invalid')
  }

});
