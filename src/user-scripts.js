/* *************************
*** USER SIGNUP ***
************************** */
function userSignUp() {
    let userEmail = document.getElementById('email').value;
    let userPass = document.getElementById('password').value;
    let newUserData = {user: {email: userEmail, password: userPass}};
    console.log(`NEWUSERDATA ==> ${newUserData.user.email} ${newUserData.user.password}`)

    fetch('http://localhost:3000/user/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserData)
    })
    .then(response => response.json())
    .then(function (response) {
        console.log(response.sessionToken);
        let token = response.sessionToken;
        localStorage.setItem('SessionToken', token);
        // tokenChecker()
    })
    .catch((err) => {
        console.log(err)
    })
}
    
    
    /* *************************
    *** USER LOGIN ***
    ************************** */
    function userLogin() {
        let userEmail = document.getElementById('email').value;
        let userPass = document.getElementById('password').value;
        console.log(userEmail, userPass);

        let userData = {user: {email: userEmail, password: userPass}};
        console.log(`USERDATA ==> ${userData.user.email} ${userData.user.password}`)
    
        fetch('http://localhost:3000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUserData)
        })
        .then(response => response.json())
        .then(function (response) {
            console.log(response.sessionToken);
            let token = response.sessionToken;
            localStorage.setItem('SessionToken', token);
            // tokenChecker()
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    
    /* *************************
    *** USER LOGOUT ***
    ************************** */
    function userLogout() {
        localStorage.setItem('SessionToken', undefined)
        console.log(`sessionToken ==> ${localStorage.sessionToken}`)
        // tokenChecker()
    }
    
    
    /* *************************
     *** TOKEN CHECKER FUNCTION ***
    ************************** */
    // function tokenChecker() {

    //     let display = document.getElementById('')
    //     let header = 
    //     console.log('tokenChecker Function Called')
    // }
    // tokenChecker()
    