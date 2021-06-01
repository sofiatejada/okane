import { getUser, setUser, loginUser, getCurrentUser, createUser } from '../local-storage.js';

// createUser('chen', '123', 'Chen');
// createUser('jacky', '345', 'Jack');

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const username = formData.get('username');
    const name = formData.get('first-name');
    const password = formData.get('password');


    createUser(username, name, password);

    window.location.href = '../dashboard/index.html';

})