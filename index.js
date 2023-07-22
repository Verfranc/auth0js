const login = async () => {
    const options = {
        authorizationParams: {
            redirect_uri: AUTH0_REDIRECT_URI,
            audience: AUTH0_AUDIENCE
        }
    };

    await auth0Client.loginWithRedirect(options);
};

const logout = async () => {
    await auth0Client.logout({
        logoutParams: {
            returnTo: AUTH0_RETURN_TO
        }
    });

    sessionStorage.clear();
    localStorage.setItem(AUTH0_HAD_AUTH_KEY, 'false');
};

window.onload = async () => {
    await configureAuth0Client();

    const auth0Authenticated = sessionStorage.getItem(AUTH0_AUTHENTICATED_KEY);
    const authenticated = auth0Authenticated && auth0Authenticated === 'true';

    if (!authenticated) {
        const hadAuth = localStorage.getItem(AUTH0_HAD_AUTH_KEY);

        if (!authenticated && hadAuth && hadAuth === 'true') {
            await login();
            return;
        }
    }

    if (authenticated) {
        document.getElementById("login").hidden = true;
        document.getElementById("logout").hidden = false;
        document.getElementById("profile").style.display = 'block';
    } else {
        document.getElementById("login").hidden = false;
        document.getElementById("logout").hidden = true;
        document.getElementById("profile").style.display = 'none';
    }
};

