import Cookies from 'universal-cookie';
export const DEFAULT_HANDLER = alert;
export const NOOP = () => undefined;

const cookies = new Cookies();

export const get = (href, handler = DEFAULT_HANDLER) => {
    const token = localStorage.getItem('token');
    const csrf = cookies.get('csrftoken')
    let headers = {};
    if (token) {
        headers['Authorization'] = "Token " + token;
    }

    if (csrf){
        headers['X-CSRFToken'] = csrf;
    }

    return fetch(
            href, {
                headers
            }
        ).then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error("something went wrong trying to GET " + href);
        })
        .catch(handler);

}

export const post = (href, body, handler = DEFAULT_HANDLER) => {
    let headers = {
        "Content-Type": "application/json"
    };

    const csrf = cookies.get('csrftoken');

    console.log(csrf);
    

    if (csrf){
        headers['X-CSRFToken'] = csrf;
    }

    return fetch(
            href, {
                method: 'POST',
                body: JSON.stringify(body),
                headers
            }
        ).then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error("something went wrong trying to POST to " + href);
        })
        .catch(handler);
}

export function login(username, password) {
    return post('/userapi/auth/', {
        username,
        password,
        ...Array.from(arguments).slice(2)
    }).then(res => {
        localStorage.setItem('token', res.token);
        return res;
    })
};
export function profile(){
    return get('/userapi/', ...arguments)
}