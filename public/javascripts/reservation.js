document.getElementById('submit').addEventListener('click', (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;

  const data = { name, email, phone };

  axios.post('/api/reservation', data).then((res) => (window.location.pathname = '/list'));
});
