require('dotenv').config()
const express = require('express')
const cors = require('cors');
const createHttpError = require('http-errors');
const fileUpload = require('express-fileupload');

const app = express()

const orderRouter = require('./router/general.router')

app.use(cors())
app.use(fileUpload({
    createParentPath: true,
}));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/proyecto/v1', orderRouter)


app.use(function (req, res, next) {
    let json_res = {
        url: req.url,
        method: req.method,
        message: createHttpError(404).message
    }
    res.json(json_res)
    //next()
    //next();
})

const port = process.env.EXPOSED_PORT
app.listen(port, () => console.log(`App listening on port ${port}!`));
