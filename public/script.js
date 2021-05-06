let roomInput = '';
let bathroomsInput = '';
let bedsInput = '';
let propInput = '';
let bedroomsInput = '';
let accommodatesInput = '';

async function Records() {
  console.log('data request');
  const recordsRequest = await fetch('/api/allrecords');
  const recordsData = await recordsRequest.json();
  return recordsData;
}
async function Calendar() {
  const apif = await fetch('/api/allrecords');
  const recordsRequest = await fetch('/api/properties');
  const recordsData = await recordsRequest.json();
  return recordsData;
}
async function calendarTable() {
  const apif = await fetch('/api/properties');
  const recordsArray = await apif.json();
  const filteredRecords = []
  recordsArray.forEach((record) => {
    if (record.room_type === roomInput) {
      filteredRecords.push(record);
    } else if (record.bathrooms === bathroomsInput) {
      filteredRecords.push(record);
    } else if (record.beds === Number(bedsInput)) {
      filteredRecords.push(record);
    } else if (record.property_type === propInput) {
      filteredRecords.push(record);
    } else if (record.bedrooms === Number(bedroomsInput)) {
      filteredRecords.push(record);
    } else if (record.accommodates === Number(accommodatesInput)) {
      filteredRecords.push(record);
    }
  })
  const y = document.querySelector('.target');
  y.innerHTML = '';
  filteredRecords.forEach((c) => {
    const CVar = document.createElement('tr');
    CVar.innerHTML = `
            <td>${c.property_id}</td>
            <td>${c.property_type}</td>
            <td>${c.room_type}</td>
            <td>${c.accommodates}</td>
            <td>${c.bathrooms}</td>
            <td>${c.bedrooms}</td>
            <td>${c.beds}</td>
        `;
    y.append(CVar);
  });
}

function getSearches() {
  roomInput = document.getElementById('roomtype').value;
  bathroomsInput = document.getElementById('bathrooms').value;
  bedsInput = document.getElementById('beds').value;
  propInput = document.getElementById('proptype').value;
  bedroomsInput = document.getElementById('bedrooms').value;
  accommodatesInput = document.getElementById('accommodates').value;
  calendarTable();
}

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', getSearches);