import dotenv from 'dotenv';
dotenv.config();
import express, { Application } from 'express';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './routes/index';
import errorMiddleware from './middleware/error-middleware';
import path from 'path';

const PORT = process.env.PORT || 4000;
const app: Application = express();

app.use(
    cors({
        credentials: true,
    })
);
app.use(express.json());
app.use(fileUpload({}));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use('/api', router);
app.use(errorMiddleware);

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`App is running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
