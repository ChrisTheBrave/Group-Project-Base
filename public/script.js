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
  const y = document.querySelector('.target');
  recordsArray.forEach((c) => {
    const CVar = document.createElement('tr');
    CVar.innerHTML = `
            <td>${c.property_id}</td>
            <td>${c.room_type}</td>
            <td>${c.bathrooms}</td>
        `;
    y.append(CVar);
  });
}
window.onload = calendarTable();