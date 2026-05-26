import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import { productRouter } from './routes/product.route';

dotenv.config();

const app: express.Application = express();
app.use(express.json());

app.use('/api/products', productRouter);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});