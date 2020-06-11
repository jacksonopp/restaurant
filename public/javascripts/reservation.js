const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('#close');
const continueBtn = document.querySelector('#continue');

document.getElementById('submit').addEventListener('click', (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;

  const data = { name, email, phone };

  if (!data.name || !data.email || !data.phone) {
    // console.log('error');
    return triggerModal('error');
  }

  axios.post('/api/reservation', data).then((res) => {
    triggerModal(res.data);
    // window.location.pathname = '/list';
  });
});

function triggerModal(result) {
  modal.classList.remove('hide');
  continueBtn.classList.remove('hide');
  const modalBody = modal.childNodes[3].childNodes[3];
  console.log(result);

  if (result === 'error') {
    modalBody.innerHTML = `
<h3>Please enter all fields</h3>
    `;
    continueBtn.classList.add('hide');
    return;
  }

  if (result.success) {
    modalBody.innerHTML = `
<h3>You were added to the reservation list.</h3>
<p>Your reservation id is ${result.new_reservation.id}</p>
`;
  } else {
    modalBody.innerHTML = `
<h3>We have no tables left. You were added to the waitlist.</h3>
<p>Your waitlist id is ${result.new_reservation.id}</p>
    `;
  }
}

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.add('hide');
});

continueBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.pathname = '/list';
});
