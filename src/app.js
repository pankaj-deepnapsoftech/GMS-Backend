import express from 'express';
import cors from 'cors';
import routes from './routes/index.route.js';
import { customError, NotFoundError } from './utils/customError.js';
import { StatusCodes } from 'http-status-codes';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173', // React frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type'],
    credentials: true, // Allow sending cookies with requests
  }),
);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.json({ limit: '16kb' }));

app.use('/api/v1', routes);
app.all("*",(req,res,next) => {
  next(new NotFoundError("Route not exist in server", 'app.js file'))
})

// custom error 
app.use((err, _req,res,next) => {
  if (err instanceof customError) {
    res.status(err.statusCodes).json(err.serializeError())
  }
  else{
    res.status(StatusCodes.BAD_GATEWAY).json({
      message:err.message || "something went wrong",
      status:"error",
      error:err.name
    })
  }
  next();
})

export default app;
