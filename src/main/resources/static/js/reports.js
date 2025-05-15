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
  
  // Settings Page Functionality
  function changePassword() {
    alert('Change Password functionality will be implemented here.');
  }
  
  function enableTwoFactorAuth() {
    alert('Two-Factor Authentication functionality will be implemented here.');
  }
  
  function saveSettings() {
    alert('Settings saved successfully!');
  }
  
  function cancelChanges() {
    alert('Changes discarded.');
  }
  
  // Attach settings functions to buttons
  document.querySelector('.security-options .btn:nth-child(1)')?.addEventListener('click', changePassword);
  document.querySelector('.security-options .btn:nth-child(2)')?.addEventListener('click', enableTwoFactorAuth);
  document.querySelector('.settings-actions .btn-primary')?.addEventListener('click', saveSettings);
  document.querySelector('.settings-actions .btn-secondary')?.addEventListener('click', cancelChanges);
  
  // Report Generation Functionality (Placeholder)
  function generateReport() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const category = document.getElementById('category').value;
  
    if (!startDate || !endDate) {
      alert('Please select a start date and end date.');
      return;
    }
  
    // Simulate report generation
    alert(`Generating report from ${startDate} to ${endDate} for category: ${category}`);
    // You can replace this with actual logic to fetch and display report data
  }
  
  // Attach report generation function to button
  document.querySelector('.generate-report-btn')?.addEventListener('click', generateReport);
  
  // Export Report Functionality (Placeholder)
  function exportPDF() {
    alert('Exporting report as PDF...');
    // Add logic to generate and download PDF
  }
  
  function exportCSV() {
    alert('Exporting report as CSV...');
    // Add logic to generate and download CSV
  }
  
  // Attach export functions to buttons
  document.querySelector('.export-options .btn:nth-child(1)')?.addEventListener('click', exportPDF);
  document.querySelector('.export-options .btn:nth-child(2)')?.addEventListener('click', exportCSV);