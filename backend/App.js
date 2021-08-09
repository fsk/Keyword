const dotenv = require("dotenv").config();
const express = require("express");
const cors = require('cors');
const router = express.Router();

const WordRouter = require('./routers/WordRouter');

require('./routers/WordRouter')


require('./config/db/Connection');



const app = express();
app.use(cors());
app.use(express.json());





app.use('/word', WordRouter);


app.listen(process.env.PORT, () => {
    console.log(`Server ready on ${process.env.PORT} port`);
})



