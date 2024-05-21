const express = require('express');
const morgan = require('morgan');
const route = require('./routes/index');

// Config env
require('dotenv').config()

const app = express();

// HTTP logger
app.use(morgan('combined'))

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.get('/', (req,res) => {
    res.send('Hello');
});

route(app);


const PORT = process.env.PORT || 8888
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);





