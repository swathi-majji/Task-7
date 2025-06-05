const userContainer = document.getElementById('userContainer');
const reloadBtn = document.getElementById('reloadBtn');

function fetchUserData() {
  userContainer.innerHTML = "Loading users...";

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.json();
    })
    .then(users => {
      userContainer.innerHTML = '';
      users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user-card');
        userDiv.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
        userContainer.appendChild(userDiv);
      });
    })
    .catch(error => {
      userContainer.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    });
}

// Initial fetch
fetchUserData();

// Reload button functionality
reloadBtn.addEventListener('click', fetchUserData);
