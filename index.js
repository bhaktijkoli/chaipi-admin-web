require('dotenv').config();
const express = require('express')
const exphbs = require('express-handlebars')

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