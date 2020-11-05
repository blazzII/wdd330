const apiURL = 'https://api.github.com/users';

// DOM
const theUser = document.querySelector('.user');

function handleError(err) {
  console.log("HELP! "+ err);
}

async function displayUser(username) {
  theUser.textContent = 'loading ...';
  const response = await fetch(`${apiURL}/${username}`);
  const data = await response.json();
  console.log(data);
  console.log(data.name);
  console.log(data.location);
  console.log(data.bio);
  theUser.innerHTML = `<strong>${data.name}</strong> 🌲 ${data.bio}`;
}

displayUser('blazzii').catch(handleError);