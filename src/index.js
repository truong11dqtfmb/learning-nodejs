const express = require('express');
const morgan = require('morgan');
const route = require('./routes/index');

const app = express();
const port = 3000;

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


app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);





