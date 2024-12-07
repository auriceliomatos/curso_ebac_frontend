// Example of fetching GitHub profile data using AJAX (XMLHttpRequest)

document.addEventListener('DOMContentLoaded', function() {

    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');
    const bioElement = document.querySelector('#bio');
    const companyElement = document.querySelector('#company');
   

try {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/auriceliomatos', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);

            if (nameElement) nameElement.innerText = data.name;
            if (usernameElement) usernameElement.innerText = data.login;
            if (avatarElement) avatarElement.src = data.avatar_url;
            if (followingElement) followingElement.innerText = data.following;
            if (followersElement) followersElement.innerText = data.followers;
            if (reposElement) reposElement.innerText = data.public_repos;
            if (linkElement) linkElement.href = data.html_url;
            if (bioElement )bioElement.innerText = data.bio;
            if (companyElement) companyElement.innerText = data.company;
            

        } else if (xhr.readyState === 4) {
            console.error('Error fetching data:', xhr.statusText);
        }
    };
    xhr.send();
} catch (error) {
    console.error('Error fetching data:', error.message);
}
});

    //          console.error('Error fetching data:', error.message);
    //      }
    // });
