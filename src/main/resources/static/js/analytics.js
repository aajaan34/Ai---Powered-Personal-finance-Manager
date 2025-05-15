// Sidebar Toggle Functionality
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const dashboardContainer = document.querySelector('.dashboard-container');
    sidebar.classList.toggle('active');
    dashboardContainer.classList.toggle('active');
  }
  
  // Dark Mode Toggle Functionality
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('change', function () {
    document.body.classList.toggle('dark-mode');
    // Save theme preference to localStorage
    localStorage.setItem('theme', this.checked ? 'dark' : 'light');
  });
  
  // Apply saved theme preference on page load
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.checked = true;
  }
  
  // Notification Dropdown Functionality
  const notification = document.querySelector('.notification');
  notification.addEventListener('click', function () {
    const dropdown = this.querySelector('.notification-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });
  
  // Close notification dropdown when clicking outside
  document.addEventListener('click', function (e) {
    if (!notification.contains(e.target)) {
      const dropdown = notification.querySelector('.notification-dropdown');
      dropdown.style.display = 'none';
    }
  });
  
  // Logout Functionality
  function logout() {
    // Clear user session or tokens (example using localStorage)
    localStorage.removeItem('userToken'); // Replace with your session/token key
  
    // Redirect to login page
    window.location.href = '/login'; // Replace with your login page URL
  }
  
  // Attach logout function to the logout button
  document.querySelector('.logout a')?.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default link behavior
    logout();
  });
  
  // Apply Filters Functionality
  function applyFilters() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const category = document.getElementById('category').value;
  
    if (!startDate || !endDate) {
      alert('Please select a start date and end date.');
      return;
    }
  
    // Simulate fetching data based on filters
    alert(`Applying filters: Start Date - ${startDate}, End Date - ${endDate}, Category - ${category}`);
    // You can replace this with actual logic to fetch and update analytics data
  }
  
  // Attach applyFilters function to the Apply button
  document.querySelector('.filters button')?.addEventListener('click', applyFilters);
  
  // Chart.js Integration
  document.addEventListener('DOMContentLoaded', function () {
    // Line Chart (Income vs Expenses Over Time)
    const lineChartCtx = document.getElementById('lineChart').getContext('2d');
    const lineChart = new Chart(lineChartCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: 'Income',
            data: [5000, 6000, 5500, 7000, 6500, 8000, 7500],
            borderColor: '#4CAF50',
            fill: false,
          },
          {
            label: 'Expenses',
            data: [2000, 2500, 3000, 3500, 4000, 4500, 5000],
            borderColor: '#F44336',
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Income vs Expenses Over Time',
          },
        },
      },
    });
  
    // Pie Chart (Spending by Category)
    const pieChartCtx = document.getElementById('pieChart').getContext('2d');
    const pieChart = new Chart(pieChartCtx, {
      type: 'pie',
      data: {
        labels: ['Food', 'Utilities', 'Entertainment', 'Transport'],
        datasets: [
          {
            data: [400, 250, 200, 150],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Spending by Category',
          },
        },
      },
    });
  
    // Forecast Chart (Income and Expense Forecast)
    const forecastChartCtx = document.getElementById('forecastChart').getContext('2d');
    const forecastChart = new Chart(forecastChartCtx, {
      type: 'bar',
      data: {
        labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Income Forecast',
            data: [8000, 8500, 9000, 9500, 10000],
            backgroundColor: '#4CAF50',
          },
          {
            label: 'Expense Forecast',
            data: [5000, 5500, 6000, 6500, 7000],
            backgroundColor: '#F44336',
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Income and Expense Forecast',
          },
        },
      },
    });
  
    // Trends Chart (Spending Trends)
    const trendsChartCtx = document.getElementById('trendsChart').getContext('2d');
    const trendsChart = new Chart(trendsChartCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: 'Spending Trends',
            data: [2000, 2500, 3000, 3500, 4000, 4500, 5000],
            borderColor: '#FF6384',
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Spending Trends',
          },
        },
      },
    });
  });