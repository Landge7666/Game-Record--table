
let srNo = 1;

function addRow(gameName) {
  const table = document.getElementById('tableBody');
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${srNo++}</td>
    <td><input type="date" value="${document.getElementById('playDate').value}" /></td>
    <td><input type="text" value="${gameName}" /></td>
    <td><input type="number" class="bid" value="0" onchange="updateTotals()" /></td>
    <td><input type="number" class="credit" value="0" onchange="updateTotals()" /></td>
    <td><input type="number" class="debit" value="0" onchange="updateTotals()" /></td>
    <td><input type="number" class="win" value="0" onchange="updateTotals()" /></td>
    <td><input type="number" class="loss" value="0" onchange="updateTotals()" /></td>
    <td><textarea placeholder="Play Bid"></textarea></td>
    <td><textarea placeholder="Win Bid"></textarea></td>
    <td><button onclick="deleteRow(this)">❌</button></td>
  `;
  table.appendChild(row);
  updateTotals();
}

function deleteRow(btn) {
  btn.parentElement.parentElement.remove();
  updateTotals();
}

function updateTotals() {
  let totalBid = 0, totalCredit = 0, totalDebit = 0, totalWin = 0, totalLoss = 0;
  document.querySelectorAll('.bid').forEach(e => totalBid += +e.value);
  document.querySelectorAll('.credit').forEach(e => totalCredit += +e.value);
  document.querySelectorAll('.debit').forEach(e => totalDebit += +e.value);
  document.querySelectorAll('.win').forEach(e => totalWin += +e.value);
  document.querySelectorAll('.loss').forEach(e => totalLoss += +e.value);

  document.getElementById('totalBid').innerText = totalBid;
  document.getElementById('totalCredit').innerText = totalCredit;
  document.getElementById('totalDebit').innerText = totalDebit;
  document.getElementById('totalWin').innerText = totalWin;
  document.getElementById('totalLoss').innerText = totalLoss;
}

function saveRecords() {
  const data = document.getElementById('tableBody').innerHTML;
  localStorage.setItem('records', data);
  alert('Records saved!');
}

function showSavedRecords() {
  const data = localStorage.getItem('records');
  if (data) {
    document.getElementById('tableBody').innerHTML = data;
    updateTotals();
  } else {
    alert('No records saved.');
  }
}

function clearAll() {
  if (confirm('Clear all data?')) {
    document.getElementById('tableBody').innerHTML = '';
    localStorage.removeItem('records');
    srNo = 1;
    updateTotals();
  }
}

function toggleCalculator() {
  const calc = document.getElementById('calculator');
  calc.style.display = calc.style.display === 'none' ? 'block' : 'none';
}

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}

// Placeholder functions
[
  'saveRowAnk',
  'saveAnkWeek',
  'saveAnkMonth',
  'saveJodiWeek',
  'saveJodiMonth',
  'showWeekRecords',
  'showMonthRecords'
].forEach(fn => {
  window[fn] = () => alert(`${fn} clicked – feature coming soon!`);
});
