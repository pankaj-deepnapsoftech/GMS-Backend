import mongoose from 'mongoose';
import { DB_NAME } from '../../constant.js';
import { config } from '../connection/env.config.js';

const connectDB = async () => {
  try {
    await mongoose.connect(`${config.MONGODB_URL}/${DB_NAME}`);
    console.log('MongoDB Connected');
  } catch (error) {
    console.log('mongodb is not connected', error);
  }
};

export { connectDB };
