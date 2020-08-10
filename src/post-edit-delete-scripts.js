// ADD LOCATION
function addLocation() {
    let name = document.getElementById('name').value
    let description = document.getElementById('description').value
    const accessToken = localStorage.getItem('SessionToken')
    let newLocation = { location: { name: name, description: description }}

    fetch('http://localhost:3000/location/create', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': accessToken
        }),
        body: JSON.stringify(newLocation)
    })
    .then(response => {
        console.log(response.json())
        displayMine();
    })
    .catch((err) => {
        console.log(err);
    })
}


// UPDATE LOCATION
function editLocation(postId) {
    const fetch_url = `http://localhost:3000/location/update/${postId}`
    const accessToken = localStorage.getItem('SessionToken')

    let card = document.getElementById(postId)
    let input = document.createElement('input')

    if (card.childNodes.length < 2) {
        card.appendChild(input)
        input.setAttribute('type', 'text')
        input.setAttribute('id', 'updatedDesc')
        input.setAttribute('placeholder', 'Edit this location\'s description')
    }
    else{
        let updated = document.getElementById('updatedDesc').value
        let updateDesc = { location: {description: updated} };
        const response = fetch(fetch_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': accessToken
            },
            body: JSON.stringify(updateDesc)
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
            displayMine();
        })
        card.removeChild(card.lastChild)
    }
}

// DELETE LOCATION
function deleteLocation(postId) {
    const fetch_url = `http://locatlhost:3000/location/delete/${postId}`;
    const accessToken = localStorage.getItem('SessionToken');

    fetch(fetch_url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        }
    })
    .then(response => {
        console.log(response);
        displayMine();
    })
}