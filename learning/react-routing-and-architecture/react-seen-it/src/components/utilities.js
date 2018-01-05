const appKey = 'kid_By3q9ZwOZ';
const appSecret = 'c110352a91d64512bef00baf23d50742';
const baseUrl = 'https://baas.kinvey.com/';

export function dataCollector(e) {
    return ({[e.target.name]: e.target.value})
}

export function calcTime(dateIsoFormat) {
    let diff = new Date - (new Date(dateIsoFormat));
    diff = Math.floor(diff / 60000);
    if (diff < 1) return 'less than a minute';
    if (diff < 60) return diff + ' minute' + pluralize(diff);
    diff = Math.floor(diff / 60);
    if (diff < 24) return diff + ' hour' + pluralize(diff);
    diff = Math.floor(diff / 24);
    if (diff < 30) return diff + ' day' + pluralize(diff);
    diff = Math.floor(diff / 30);
    if (diff < 12) return diff + ' month' + pluralize(diff);
    diff = Math.floor(diff / 12);
    return diff + ' year' + pluralize(diff);
    function pluralize(value) {
        if (value !== 1) return 's';
        else return '';
    }
}

export function register(e, payload) {
    e.preventDefault()

    return fetch(baseUrl + 'user/' + appKey, {
        method: 'POST',
        headers: {
            Authorization: 'Basic ' + btoa(appKey + ':' + appSecret),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then(res => {
            return res.json()
        })
}

export function login(e, payload) {
    e.preventDefault()

    return fetch(baseUrl + 'user/' + appKey + '/login', {
        method: 'POST',
        headers: {
            Authorization: 'Basic ' + btoa(appKey + ':' + appSecret),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then(res => {
            return res.json()
        })
}

export function getPosts() {
    return fetch(baseUrl + 'appdata/' + appKey + '/posts', {
        headers: {
            Authorization: 'Kinvey ' + localStorage.getItem('token')
        }
    }).then(res => {
        return res.json()
    })
}

export function createPost(e, payload) {
    e.preventDefault()

    return fetch(baseUrl + 'appdata/' + appKey + '/posts', {
        method: 'POST',
        headers: {
            Authorization: 'Kinvey ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => {
        return res.json()
    })
}

export function getPostById(id) {
    return fetch(baseUrl + 'appdata/' + appKey + '/posts/' + id, {
        headers: {
            Authorization: 'Kinvey ' + localStorage.getItem('token')
        }
    }).then(res => {
        return res.json()
    })
}

export function getCurrentPostComments(postId) {

    return fetch(baseUrl + 'appdata/' + appKey + '/comments', {
        headers: {
            Authorization: 'Kinvey ' + localStorage.getItem('token')
        }
    }).then(res => {
        return res.json()
    })
        .then(allComments => {
            let currentPostComments = []

            for (let comment of allComments) {
                if (comment.postId === postId) {
                    currentPostComments.push(comment)
                }
            }

            return currentPostComments
        })
}

export function createComment(e, payload) {
    e.preventDefault()

    return fetch(baseUrl + 'appdata/' + appKey + '/comments', {
        method: 'POST',
        headers: {
            Authorization: 'Kinvey ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => {
        return res.json()
    })
}

export function logout(e) {
    e.preventDefault()

    return fetch(baseUrl + 'user/' + appKey + '/_logout', {
        headers: {
            Authorization: 'Kinvey ' + localStorage.getItem('token')
        }
    })
        .then(res => {
            return res.json()
        })
}