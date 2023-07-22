
window.onload = async () => {
    const auth0Authenticated = sessionStorage.getItem('auth0Authenticated');

    if (!auth0Authenticated && auth0Authenticated !== 'true') {
        window.location.href = '/';
    }

    const user = JSON.parse(sessionStorage.getItem('auth0User'));

    const nameElement = document.getElementById('name');
    nameElement.innerText = user.name;

    const emailElement = document.getElementById('email');
    emailElement.innerText = user.email;
};

