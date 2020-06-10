const tablesDiv = document.querySelector('.tables');
const waitlistDiv = document.querySelector('.waitlist');

axios.get('/api/reservation').then((res) => {
  console.log(res.data);
  renderPage(res.data);
});

function renderPage(data) {
  console.log(data);
  data.reservations.forEach((reservation, i) => {
    tablesDiv.append(createList(reservation, i, 'Reservation'));
  });

  data.waitlist.forEach((reservation, i) => {
    waitlistDiv.append(createList(reservation, i, 'Waitlist'));
  });
}

function createList(data, i, title) {
  const resDiv = document.createElement('div');
  const ul = document.createElement('ul');
  Object.keys(data).forEach((value) => {
    const li = document.createElement('li');
    li.innerText = `${value}: ${data[value]}`;
    ul.appendChild(li);
  });
  const secTitle = document.createElement('h4');
  secTitle.innerText = `${title} # ${i + 1}`;
  resDiv.append(secTitle);
  resDiv.appendChild(ul);
  return resDiv;
}
