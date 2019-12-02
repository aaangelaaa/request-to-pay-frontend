import Cookies from 'universal-cookie';
import {DEBUG} from '../App';

const API_URL = DEBUG ? 'localhost:8000': 'http://stormy-tor-06010.herokuapp.com';

export const DEFAULT_HANDLER = alert;
export const EVT_SET_ITEM = new Event('set-item');
export const EVT_REMOVE_ITEM = new Event('remove-item');

export const NOOP = () => undefined;

const setItem = (key, val) => {
    localStorage.setItem(key, val);
    dispatchEvent(EVT_SET_ITEM);
}

const removeItem = (key) => {
    localStorage.removeItem(key);
    dispatchEvent(EVT_REMOVE_ITEM);
}

const cookies = new Cookies();


export const get = (href, handler = DEFAULT_HANDLER) => {
    const token = localStorage.getItem('token');
    const csrf = cookies.get('csrftoken')
    let headers = {};
    if (token) {
        headers['Authorization'] = "Token " + token;
    }

    if (csrf) {
        headers['X-CSRFToken'] = csrf;
    }

    return fetch(
            API_URL + href, {
                headers,
                credentials: 'same-origin'
            }
        ).then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error(res.status + " – something went wrong trying to GET " + href);
        })
        .catch(handler);

}

export const post = (href, body, handler = DEFAULT_HANDLER) => {
    let headers = {
        "Content-Type": "application/json"
    };

    const csrf = cookies.get('csrftoken');


    if (csrf) {
        headers['X-CSRFToken'] = csrf;
    }

    return fetch(
        API_URL + href, {
                method: 'POST',
                body: JSON.stringify(body),
                credentials: 'same-origin',
                headers
            }
        ).then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error(res.status + " – something went wrong trying to POST to " + href);
        })
        .catch(handler);
}

export function login(login, password) {
    return post('/accounts/login/', {
        login,
        password,
        ...Array.from(arguments).slice(2)
    }).then(res => {
        setItem('token', res.token);
        return res;
    })
};

export function profile() {
    return get('/accounts/profile/', err => {
        console.log(err);
        if (err.message.startsWith('401')) {
            removeItem('token');
            console.error('fetching user failed. Token removed.')
        }
    })
}

export function logout() {
    return post('/accounts/logout/', {
        revoke_token: true
    }, NOOP).then(() => {
        console.log('token removed');
        
        removeItem('token');
    })
}