// Sample Transaction Data
const transactions = [
    { date: '2023-10-01', description: 'Salary', category: 'Income', amount: 5000, type: 'income' },
    { date: '2023-10-02', description: 'Groceries', category: 'Food', amount: -150, type: 'expense' },
    { date: '2023-10-03', description: 'Internet Bill', category: 'Utilities', amount: -60, type: 'expense' },
    { date: '2023-10-04', description: 'Freelance Work', category: 'Income', amount: 1200, type: 'income' },
  ];
  
  // DOM Elements
  const filterSelect = document.getElementById('filter');
  const searchInput = document.getElementById('search');
  const tableBody = document.querySelector('table tbody');
  const transactionChartCtx = document.getElementById('transactionChart').getContext('2d');
  
  // Function to Render Transactions
  function renderTransactions(filteredTransactions) {
    tableBody.innerHTML = ''; // Clear existing rows
  
    filteredTransactions.forEach((transaction) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${transaction.date}</td>
        <td>${transaction.description}</td>
        <td>${transaction.category}</td>
        <td class="amount ${transaction.type}">${transaction.type === 'income' ? '+' : '-'}$${Math.abs(transaction.amount).toFixed(2)}</td>
        <td><span class="badge ${transaction.type}">${transaction.type === 'income' ? 'Income' : 'Expense'}</span></td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // Function to Filter Transactions
  function filterTransactions() {
    const filterValue = filterSelect.value;
    const searchValue = searchInput.value.toLowerCase();
  
    let filteredTransactions = transactions;
  
    // Apply type filter
    if (filterValue !== 'all') {
      filteredTransactions = filteredTransactions.filter(
        (transaction) => transaction.type === filterValue
      );
    }
  
    // Apply search filter
    if (searchValue) {
      filteredTransactions = filteredTransactions.filter((transaction) =>
        transaction.description.toLowerCase().includes(searchValue)
      );
    }
  
    // Render filtered transactions
    renderTransactions(filteredTransactions);
  }
  
  // Event Listeners for Filter and Search
  filterSelect.addEventListener('change', filterTransactions);
  searchInput.addEventListener('input', filterTransactions);
  
  // Initial Render
  renderTransactions(transactions);
  
  // Chart.js Integration
  document.addEventListener('DOMContentLoaded', function () {
    const monthlySummaryData = {
      labels: ['Oct 1', 'Oct 2', 'Oct 3', 'Oct 4'],
      datasets: [
        {
          label: 'Income',
          data: [5000, 0, 0, 1200],
          backgroundColor: '#4CAF50',
          borderColor: '#4CAF50',
          borderWidth: 1,
        },
        {
          label: 'Expenses',
          data: [0, -150, -60, 0],
          backgroundColor: '#F44336',
          borderColor: '#F44336',
          borderWidth: 1,
        },
      ],
    };
  
    const transactionChart = new Chart(transactionChartCtx, {
      type: 'bar',
      data: monthlySummaryData,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Monthly Summary',
          },
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      },
    });
  });