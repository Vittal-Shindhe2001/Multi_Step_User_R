const express = require('express')
const cors = require('cors')
const app = express()
const port = 3089
const routes=require('./config/routes')
const config=require('./config/dataBase')

app.use(express.json())
app.use(cors())
config()
app.use(routes)
app.listen(port, () => {
    console.log('server running on port', port);
})

