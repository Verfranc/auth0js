const AUTH0_DOMAIN = "the-domain";
const AUTH0_CLIENT_ID = "the-id";
const AUTH0_AUDIENCE = 'the-identifier';
const AUTH0_REDIRECT_URI = window.location.origin + '/auth.html';
const AUTH0_RETURN_TO = window.location.origin;

const AUTH0_HAD_AUTH_KEY = 'auth0HadAuth';
const AUTH0_AUTHENTICATED_KEY = 'auth0Authenticated';
const AUTH0_ACCESS_TOKEN_KEY = 'auth0AccessToken';
const AUTH0_USER_KEY = 'auth0User';

let auth0Client = null;

const configureAuth0Client = async () => {
    auth0Client = await auth0.createAuth0Client({
        domain: AUTH0_DOMAIN,
        clientId: AUTH0_CLIENT_ID
    });
};
