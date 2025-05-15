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
  
  // Progress Bars Functionality
  function updateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar .progress');
    progressBars.forEach((bar) => {
      const width = bar.style.width; // Get the width from inline style
      bar.style.width = '0'; // Reset width to 0 for animation
      setTimeout(() => {
        bar.style.width = width; // Animate to the target width
      }, 100);
    });
  }
  
  // Call the function to animate progress bars on page load
  updateProgressBars();
  
  // Chart.js Integration
  document.addEventListener('DOMContentLoaded', function () {
    // Income vs Expenses Chart
    const incomeExpenseChartCtx = document.getElementById('incomeExpenseChart').getContext('2d');
    const incomeExpenseChart = new Chart(incomeExpenseChartCtx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: 'Income',
            data: [5000, 6000, 5500, 7000, 6500, 8000, 7500],
            backgroundColor: '#4CAF50',
            borderColor: '#4CAF50',
            borderWidth: 1,
          },
          {
            label: 'Expenses',
            data: [2000, 2500, 3000, 3500, 4000, 4500, 5000],
            backgroundColor: '#F44336',
            borderColor: '#F44336',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Income vs Expenses',
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
  
    // Savings Over Time Chart
    const savingsChartCtx = document.getElementById('savingsChart').getContext('2d');
    const savingsChart = new Chart(savingsChartCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: 'Savings',
            data: [3000, 3500, 4000, 4500, 5000, 5500, 6000],
            borderColor: '#36A2EB',
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Savings Over Time',
          },
        },
      },
    });
  });