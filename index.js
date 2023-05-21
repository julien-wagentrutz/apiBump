import * as dotenv from 'dotenv'
import express from 'express';
import cors from 'cors';
// Routes import
import { apiRouter } from './routes/api/index.js';

//Config
dotenv.config()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Routes
app.use('/api', apiRouter);

app.get('/', (req, res) => {
	res.send("geggge")
})

// Lance le serveur
const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});