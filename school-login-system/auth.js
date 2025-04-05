// auth.js
async function loginUser(credentials) {
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
    }

    const data = await response.json();
    localStorage.setItem('user', JSON.stringify(data.user));
    return data;
}

function isLoggedIn() {
    return !!localStorage.getItem('user');
}

function getUserData() {
    return JSON.parse(localStorage.getItem('user'));
}

