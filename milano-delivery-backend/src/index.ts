import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import routes from './routes';
const cors = require('cors');

const app = express();

app.use(cors({origin: '*'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);


const PORT = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
