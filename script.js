(function () {
    
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: 'AIzaSyBUpRatLdDyqrMECIrBvRvEbqISMiM7ygY',
    authDomain: 'fir-web-codelab-9cda5.firebaseapp.com',
    projectId: 'fir-web-codelab-9cda5',
    storageBucket: 'fir-web-codelab-9cda5.appspot.com',
    messagingSenderId: '355437734122',
    appId: '1:355437734122:web:49afdac8953a1472a60f93',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    //Get Elements
    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignup = document.getElementById("btnSignup");

    //Add Login Event
    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = firebase.auth();

        //sign in with firebase auth
        auth.signInWithEmailAndPassword(email, password).then(user =>{
            alert("Login Successful :)");
        }).catch(err => {
            alert(err.message);
        });
        
    });

    //Add Signup Event
    btnSignup.addEventListener('click', e => {

        //get email and password
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = firebase.auth();

        //sign in with firebase auth
        const promise = auth.createUserWithEmailAndPassword(email, password).then(user => {
            alert("Signup Successful :)")
        }).catch(err => {
            alert(err.message);
        });

    });


}());
