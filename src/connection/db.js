import mongoose from 'mongoose';
import { config } from '../config/env.config.js';

 const DB_NAME = 'gym';


const connectDB = async () => {
  try {
    await mongoose.connect(`${config.MONGODB_URL}/${DB_NAME}`);
    console.log('MongoDB Connected');
  } catch (error) {
    console.log('mongodb is not connected', error);
  }
};

export { connectDB };
