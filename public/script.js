const irvingData = [];
let irvingOneBed = 0;
let irvingTwoBeds = 0;
let irvingThreeBeds = 0;
const roscoeData = [];
let roscoeOneBed = 0;
let roscoeTwoBeds = 0;
let roscoeThreeBeds = 0;
const buckData = [];
let buckOneBed = 0;
let buckTwoBeds = 0;
let buckThreeBeds = 0;
const andersonData = [];
let andersonOneBed = 0;
let andersonTwoBeds = 0;
let andersonThreeBeds = 0;
const littleData = [];
let littleOneBed = 0;
let littleTwoBeds = 0;
let littleThreeBeds = 0;

async function allRecords() {
  const recordsRequest = await fetch('/api/allrecords');
  const recordsData = await recordsRequest.json();

  const chart = new CanvasJS.Chart('chartContainer', {
    theme: 'light2',
    animationEnabled: true,
    title: {
      text: 'Properties by Number of Bedrooms'
    },
    axisY: {
      title: 'Properties'
    },
    axisX: {
      title: 'Number of Bedrooms'
    },
    toolTip: {
      shared: 'true'
    },
    legend: {
      cursor: 'pointer'
    },
    data: [{
      type: 'spline',
      showInLegend: true,
      name: 'Irving Park',
      dataPoints: irvingData
    },
    {
      type: 'spline',
      showInLegend: true,
      name: 'Roscoe Village',
      dataPoints: roscoeData
    },
    {
      type: 'spline',
      showInLegend: true,
      name: 'Bucktown',
      dataPoints: buckData
    },
    {
      type: 'spline',
      showInLegend: true,
      name: 'Andersonville',
      dataPoints: andersonData
    },
    {
      type: 'spline',
      showInLegend: true,
      name: 'Little Village',
      dataPoints: littleData
    }]
  });
  recordsData.forEach((record) => {
    if (record.neighborhood_name === 'Irving Park') {
      if (record.bedrooms === 1) {
        irvingOneBed += 1;
      } else if (record.bedrooms === 2) {
        irvingTwoBeds += 1;
      } else if (record.bedrooms === 3) {
        irvingThreeBeds += 1;
      }
    } else if (record.neighborhood_name === 'Roscoe Village') {
      if (record.bedrooms === 1) {
        roscoeOneBed += 1;
      } else if (record.bedrooms === 2) {
        roscoeTwoBeds += 1;
      } else if (record.bedrooms === 3) {
        roscoeThreeBeds += 1;
      }
    } else if (record.neighborhood_name === 'Bucktown') {
      if (record.bedrooms === 1) {
        buckOneBed += 1;
      } else if (record.bedrooms === 2) {
        buckTwoBeds += 1;
      } else if (record.bedrooms === 3) {
        buckThreeBeds += 1;
      }
    } else if (record.neighborhood_name === 'Andersonville') {
      if (record.bedrooms === 1) {
        andersonOneBed += 1;
      } else if (record.bedrooms === 2) {
        andersonTwoBeds += 1;
      } else if (record.bedrooms === 3) {
        andersonThreeBeds += 1;
      }
    } else if (record.neighborhood_name === 'Little Village') {
      if (record.bedrooms === 1) {
        littleOneBed += 1;
      } else if (record.bedrooms === 2) {
        littleTwoBeds += 1;
      } else if (record.bedrooms === 3) {
        littleThreeBeds += 1;
      }
    }
  });
  irvingData.push({label: 'One Bedroom', y: irvingOneBed});
  irvingData.push({label: 'Two Bedrooms', y: irvingTwoBeds});
  irvingData.push({label: 'Three Bedrooms', y: irvingThreeBeds});
  roscoeData.push({label: 'One Bedroom', y: roscoeOneBed});
  roscoeData.push({label: 'Two Bedrooms', y: roscoeTwoBeds});
  roscoeData.push({label: 'Three Bedrooms', y: roscoeThreeBeds});
  buckData.push({label: 'One Bedroom', y: buckOneBed});
  buckData.push({label: 'Two Bedrooms', y: buckTwoBeds});
  buckData.push({label: 'Three Bedrooms', y: buckThreeBeds});
  andersonData.push({label: 'One Bedroom', y: andersonOneBed});
  andersonData.push({label: 'Two Bedrooms', y: andersonTwoBeds});
  andersonData.push({label: 'Three Bedrooms', y: andersonThreeBeds});
  littleData.push({label: 'One Bedroom', y: littleOneBed});
  littleData.push({label: 'Two Bedrooms', y: littleTwoBeds});
  littleData.push({label: 'Three Bedrooms', y: littleThreeBeds});
  chart.render();
}

async function listingsTable() {
  const listingsRequest = await fetch(`/api/listings/${userSearch}`);
  const listingsData = await listingsRequest.json();
  const tableBody = document.querySelector('.target');
  tableBody.innerHTML = '';
  const tableData = document.createElement('tr');
  listingsData.forEach((listing) => {
    tableData.innerHTML = `
    <td>${listing.listing_id}</td>
    <td>${listing.neighborhood_id}</td>
    <td>${listing.host_id}</td>
    <td>${listing.listing_name}</td>
    <td>${listing.days_avail}</td>
    <td>${listing.price}</td>
    `;
    tableBody.append(tableData);
  })
}

function getSearch() {
  userSearch = document.getElementById('recordsSearch').value;
  listingsTable();
}

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', getSearch);

window.onload = allRecords();