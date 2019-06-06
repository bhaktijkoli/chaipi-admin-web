require('dotenv').config();
const express = require('express')
const exphbs = require('express-handlebars')
const admin = require('firebase-admin')
const serviceAccount = require('./test-phone-auth-5aea0-firebase-adminsdk-scv66-f4016a5ed9.json')
const   firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://test-phone-auth-5aea0.firebaseio.com'
})

// controllers
const loginPageController = require('./controllers/login')
const dashboardPageController = require('./controllers/dashboard')

const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', loginPageController)
app.get('/index', dashboardPageController)

app.listen(process.env.PORT, () => {
    console.log(`App running on localhost:${process.env.PORT}`);
});