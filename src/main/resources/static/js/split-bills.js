// split-bills.js

// Sample Data
let participants = [];
let balances = {};

// Add Participant
document.getElementById('add-participant').addEventListener('click', function () {
  const participantName = prompt('Enter participant name:');
  if (participantName) {
    participants.push(participantName);
    balances[participantName] = balances[participantName] || 0; // Initialize balance if not exists
    renderParticipants();
  }
});

// Render Participants
function renderParticipants() {
  const participantsList = document.getElementById('participants-list');
  participantsList.innerHTML = participants
    .map(
      (participant) => `
      <div class="participant">
        <span>${participant}</span>
        <input type="number" id="${participant}-share" placeholder="Share" ${document.getElementById('split-method').value === 'equally' ? 'disabled' : ''}>
      </div>
    `
    )
    .join('');
}

// Handle Split Method Change
document.getElementById('split-method').addEventListener('change', function () {
  renderParticipants();
});

// Add Expense
document.getElementById('add-expense-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const description = document.getElementById('expense-description').value;
  const amount = parseFloat(document.getElementById('expense-amount').value);
  const splitMethod = document.getElementById('split-method').value;

  if (!description || !amount || participants.length === 0) {
    alert('Please fill out all fields and add participants.');
    return;
  }

  // Reset balances before calculating new ones
  balances = {};

  // Calculate shares
  let shares = {};
  if (splitMethod === 'equally') {
    const share = amount / participants.length;
    participants.forEach((participant) => {
      shares[participant] = share;
    });
  } else if (splitMethod === 'percentage') {
    let totalPercentage = 0;
    participants.forEach((participant) => {
      const percentage = parseFloat(document.getElementById(`${participant}-share`).value);
      if (isNaN(percentage)) {
        alert('Please enter valid percentages for all participants.');
        return;
      }
      totalPercentage += percentage;
      shares[participant] = (amount * percentage) / 100;
    });
    if (totalPercentage !== 100) {
      alert('Total percentage must be 100%.');
      return;
    }
  } else if (splitMethod === 'custom') {
    let totalAmount = 0;
    participants.forEach((participant) => {
      const share = parseFloat(document.getElementById(`${participant}-share`).value);
      if (isNaN(share)) {
        alert('Please enter valid amounts for all participants.');
        return;
      }
      totalAmount += share;
      shares[participant] = share;
    });
    if (totalAmount !== amount) {
      alert('Total shares must equal the expense amount.');
      return;
    }
  }

  // Update balances
  participants.forEach((participant) => {
    balances[participant] = (balances[participant] || 0) - shares[participant];
  });

  // Render balances
  renderBalances();

  // Reset form
  document.getElementById('add-expense-form').reset();
  participants = [];
  renderParticipants();
});

// Render Balances
function renderBalances() {
  const balancesTable = document.getElementById('balances-table').getElementsByTagName('tbody')[0];
  balancesTable.innerHTML = Object.entries(balances)
    .map(
      ([participant, balance]) => `
      <tr>
        <td>${participant}</td>
        <td class="${balance < 0 ? 'negative' : 'positive'}">${balance < 0 ? `Owes $${Math.abs(balance).toFixed(2)}` : `Is owed $${balance.toFixed(2)}`}</td>
      </tr>
    `
    )
    .join('');
}