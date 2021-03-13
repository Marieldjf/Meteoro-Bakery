const path = require('path');
var firebase = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");
const express = require('express');
const app = express();
const port = 3000;

// static files
app.use(express.static('public')),
app.use('/css', express.static(__dirname + 'public/css')),
app.use('/css', express.static(__dirname + 'public/js')),


app.get('', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

const server = app.listen(3000, () => {
    console.log(`The application started on port ${server.address().port}`);
});


firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://meteoro-bakery-default-rtdb.firebaseio.com/"
});

var db = firebase.database();
var ref = db.ref("Test");

ref.once('value', function(snapshot) {
    console.log(snapshot.val());
});

var usersRef = ref.child("users");
usersRef.set({
    luis: {
        sku: "#49302",
        name: "Brownie",
    }
})