import express, {Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: express.Application = express();

app.get('/', (req: Request, res: Response)=>{
    res.json('Hello, World!');
});

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});