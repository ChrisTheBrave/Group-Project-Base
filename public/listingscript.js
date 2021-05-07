function changeVisibility() {
  document.getElementById('disappear-onclick').style.visibility = 'hidden';
  document.getElementById('appear-onclick').style.visibility = 'visible';
}

function newListing() {
  document.getElementById('disappear-onclick').style.visibility = 'visible';
  document.getElementById('appear-onclick').style.visibility = 'hidden';
}

async function handleButtonCreate() {
  const inputField = document.querySelector('#neighborhood_name');
  const url = '/api/neighborhoods';
  const request = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ neighborhood_name: inputField.value })
  });
}

document.getElementById('create').addEventListener('click', (event) => {
  event.preventDefault();
  handleButtonCreate();
  changeVisibility();
});

async function handleButtonDelete() {
  const inputField = document.querySelector('#neighborhood_id_delete');
  const url = `/api/neighborhoods/${inputField.value}`;
  const request = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ neighborhood_id: inputField.value })
  });
}

document.getElementById('delete').addEventListener('click', (event) => {
  event.preventDefault();
  handleButtonDelete();
});

async function handleButtonUpdate() {
  const inputID = document.querySelector('#neighborhood_id_update');
  const inputName = document.querySelector('#neighborhood_name_update');
  const url = '/api/neighborhoods';
  const request = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ neighborhood_id: inputID.value, neighborhood_name: inputName.value})
  });
}

document.getElementById('update').addEventListener('click', (event) => {
  event.preventDefault();
  handleButtonUpdate();
});