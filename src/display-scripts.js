
/* DISPLAY BY USER */
function displayMine() {
    const accessToken = localStorage.getItem('SessionToken')
    fetch('http://localhost:3000/location/mine', {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': accessToken
        })
    })
    .then(
        function (response) {
            return response.json()
        })
        .catch(
            function (error) {
                console.error('Error:', error)
            }
        )
    .then(function (response) {
        console.log(response)

        let display = document.getElementById('locations')
        for ( i = 0; i = display.childNodes.length; i++) {
            display.removeChild(display.firstChild)
        }

        if (response.length === 0) {
            let display = document.getElementById('locations')
            let header = document.createElement('h5')

            display.appendChild(header)
            header.textContent = "Looks like you haven't added any locations yet!"
            header.setAttribute("class", "noLocations")

        } else {
            for (i = 0; i < response.length; i++) {

                let display = document.getElementById('locations')
                let card = document.createElement('div')
                let body = document.createElement('div')
                let header = document.createElement('h5')
                let subtitle = document.createElement('h6')
                let para = document.createElement('p')
                let editBtn = document.createElement('button')
                let deleteBtn = document.createElement('button')

                let current = response[i]
                let location = current.location;
                let date = current.date;
                let description = current.description;
            }

            display.appendChild(card)
            card.appendChild(body)
            body.appendChild(header)
            body.appendChild(subtitle)
            body.appendChild(para)
            body.appendChild(editBtn)
            body.appendChild(deleteBtn)

            card.setAttribute('id', current.id)
            card.setAttribute('class', 'card')
            body.setAttribute('class', 'card-body')
            header.setAttribute('class', 'card-title')
            subtitle.setAttribute('class', 'card-subtitle')
            para.setAttribute('class', 'card-text')

            editBtn.setAttribute('class', 'editbtn')
            editBtn.setAttribute('type', 'button')
            editBtn.setAttribute('onclick', `editPost(${current.id})`)

            deleteBtn.setAttribute('class', 'deleteBtn')
            deleteBtn.setAttribute('type', 'button')
            deleteBtn.setAttribute('onclick', `deleteLocation(${current.id})`)

            header.textContent = location 
            subtitle.textContent = date
            para.textContent = description
            editBtn.textContent = 'Edit'
            deleteBtn.textContent = 'Delete'
        }}
    )

    /*DISPLAY ALL*/
function displayAll() {
    fetch('http://localhost:3000/location/', {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then(
        function (response) {
            return response.json()
        })
        .catch(
            function (error) {
                console.error('Error:', error)
            }
        )
        .then(function (response) {
            console.log(response)

            let display = document.getElementById('locations')
            for ( i = 0; i = display.childNodes.length; i++) {
                display.removeChild(display.firstChild)
            }
    
            if (response.length === 0) {
                let display = document.getElementById('locations')
                let header = document.createElement('h5')
    
                display.appendChild(header)
                header.textContent = "No locations yet!"
                header.setAttribute("class", "noLocations")
            } else {
                for (i = 0; i < response.length; i++) {
    
                    let display = document.getElementById('locations')
                    let card = document.createElement('div')
                    let body = document.createElement('div')
                    let header = document.createElement('h5')
                    let subtitle = document.createElement('h6')
                    let para = document.createElement('p')
                   
    
                    let current = response[i]
                    let location = current.location;
                    let date = current.date;
                    let description = current.description;
                }
    
                display.appendChild(card)
                card.appendChild(body)
                body.appendChild(header)
                body.appendChild(subtitle)
                body.appendChild(para)
                   
                card.setAttribute('id', current.id)
                card.setAttribute('class', 'card')
                body.setAttribute('class', 'card-body')
                header.setAttribute('class', 'card-title')
                subtitle.setAttribute('class', 'card-subtitle')
                para.setAttribute('class', 'card-text')
    
                header.textContent = location 
                subtitle.textContent = date
                para.textContent = description
            }
        }
    )}
};

/* DISPLAY BY TITLE */
function displayByTitle() {
    let locationTitle = document.getElementById('searchBar').value;
    console.log(locationTitle)
    fetch(`http://localhost:3000/location/${locationTitle}`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then(
        function (response) {
            return response.json()
        })
        .catch(
            function (error) {
                console.error('Error:', error)
            }
        )
        .then(function (response) {
            console.log(response)

            let display = document.getElementById('locations')
            for ( i = 0; i = display.childNodes.length; i++) {
                display.removeChild(display.firstChild)
            }
    
            if (response.length === 0) {
                let display = document.getElementById('locations')
                let header = document.createElement('h5')
    
                display.appendChild(header)
                header.textContent = "No locations yet!"
                header.setAttribute("class", "noLocations")
            } else {
                for (i = 0; i < response.length; i++) {
    
                    let display = document.getElementById('locations')
                    let card = document.createElement('div')
                    let body = document.createElement('div')
                    let header = document.createElement('h5')
                    let subtitle = document.createElement('h6')
                    let para = document.createElement('p')
                   
    
                    let current = response[i]
                    let location = current.location;
                    let date = current.date;
                    let description = current.description;
                }
                display.appendChild(card)
                card.appendChild(body)
                body.appendChild(header)
                body.appendChild(subtitle)
                body.appendChild(para)
                
                card.setAttribute('id', current.id)
                card.setAttribute('class', 'card')
                body.setAttribute('class', 'card-body')
                header.setAttribute('class', 'card-title')
                subtitle.setAttribute('class', 'card-subtitle')
                para.setAttribute('class', 'card-text')
    
                header.textContent = location 
                subtitle.textContent = date
                para.textContent = description                
            }
        }
    )}
