import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import { productRouter } from './routes/product.route';
import path from 'path';

dotenv.config();

const app: express.Application = express();
app.use(express.json());


app.use('/api/products', productRouter);

if (process.env.NODE_ENV === 'production') {
    console.log(__dirname)
    app.use(express.static(path.join(__dirname, '../frontend/dist')));

    app.get(/(.*)/, (req, res) => {
        res.sendFile(
            path.join(__dirname, '../frontend/dist/index.html')
        );
    });
}

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on PORT: ${PORT}`);
    });
});