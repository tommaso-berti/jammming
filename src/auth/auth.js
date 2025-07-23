export function getAccessToken() {
    return localStorage.getItem('access_token');
}

export function isLoggedIn() {
    return !!getAccessToken();
}

export function logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_in');
    window.location.reload();
}