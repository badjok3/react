const host = 'http://localhost:5000/';

async function create(name, location, description, numberOfRooms, image, parkingSlots) {
    let res = await fetch(host + 'hotels/create', {
        method: 'POST',
        headers: {
            Authorization: 'bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            location,
            description,
            numberOfRooms,
            image,
            parkingSlots
        })
    });

    return res.json()
}

async function getPage(page) {
    let res = await fetch(host + 'hotels/all?page=' + page);

    return res.json();
}

async function getHotelById(id) {
    let res = await fetch(host + 'hotels/details/' + id, {
        headers: {
            Authorization: 'bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
        }
    });

    return res.json();
}

async function addReview(hotelId, comment, rating) {
    let res = await fetch(host + `hotels/details/${hotelId}/reviews/create`, {
        method: 'POST',
        headers: {
            Authorization: 'bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            author: localStorage.getItem('username'),
            comment: comment,
            rating: rating,
            dateCreated: new Date()
        })
    });

    return res.json();
}

async function getReviews(hotelId) {
    let res = await fetch(host + `hotels/details/${hotelId}/reviews`, {
        headers: {
            Authorization: 'bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
        }
    });

    return res.json();
}

export { create, getPage, getHotelById, addReview, getReviews }