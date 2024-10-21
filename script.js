function filterData() {
  event.preventDefault();
  var startdate = document.getElementById("startdate").value;
  var enddate = document.getElementById("enddate").value;
  console.log("startdate");
  console.log("Ending date: " + enddate);
  fetch("https://compute.samford.edu/zohauth/clients/data");
}

async function fetchData() {
  try {
      const response = await fetch('https://compute.samford.edu/zohauth/clients/datajson');
      const data = await response.json();

      const table = document.getElementById('dataTable');

      data.forEach(item => {
          const row = document.createElement('tr');
          
          // Create ID cell with link
          const idCell = document.createElement('td');
          const link = document.createElement('a');
          link.href = `details.html?id=${item.id}`; // Assuming ID is unique
          link.textContent = `Pitch ${item.id}`;
          idCell.appendChild(link);
          row.appendChild(idCell);
          
          // Create Speed cell
          const speedCell = document.createElement('td');
          speedCell.textContent = item.speed || '--';
          row.appendChild(speedCell);
          
          // Create Result cell
          const resultCell = document.createElement('td');
          resultCell.textContent = item.result || '--';
          row.appendChild(resultCell);
          
          // Create Datetime cell
          const datetimeCell = document.createElement('td');
          datetimeCell.textContent = item.datetime || '--';
          row.appendChild(datetimeCell);

          table.appendChild(row);
      });
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

// Fetch data on page load
window.onload = fetchData;
