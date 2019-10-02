const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');

const app = express();

const PORT = process.env.PORT || 5000; // default from environment or my port

// app.get('/', (req, res) => {
//     // res.send('Hello World');
//     res.sendFile(path.join(__dirname, 'public','index.html'), (err) => {

//     });
// });

// init middleware
// app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine','handlebars');

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Homepage route
app.get('/', (req, res) => res.render('index', {
    title: 'Member App',
    members
}));

// set a static folder, so it serves noramlly

app.use(express.static(path.join(__dirname, 'public')));

// Members api route
app.use('/api/members', require('./routes/api/members'));






app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);

});