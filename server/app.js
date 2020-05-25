/* ------------------------------------------- Imports ------------------------------------------ */

const express = require('express');
const cors = require('cors');
const auth = require('./auth');
const middlewares = require('./auth/middlewares');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

/* ----------------------------------------- Middleware ----------------------------------------- */

app.use(cors());
app.use(express.json());
app.use(middlewares.checkTokenSetUser);
app.use('/auth', auth);

/* ----------------------------------------- Test Route ----------------------------------------- */

app.get('/', (req, res) => {
    res.json({
        message: 'Check if user exists: ',
        user: req.user,
    });
});

/* --------------------------------------- Error Handling --------------------------------------- */

app.use(function notFound(req, res, next) {
    res.status(404);
    const error = new Error(`Not Found - ${req.originalUrl}`);
    next(error);
});

app.use(function errorHandler(err, req, res, next) {
    res.status(res.statusCode || 500);
    res.json({
        message: err.message,
        stack: err.stack,
    });
});

/* ---------------------------------------- Code Go Vroom --------------------------------------- */

app.listen(port, () => console.log(`App started at http://localhost:${port}`));
