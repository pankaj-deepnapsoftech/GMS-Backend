import dotenv from 'dotenv';

dotenv.config();

class Config {
  MONGODB_URL;
  JWT_SECRET;

  constructor() {
    this.MONGODB_URL = process.env.MONGODB_URL;
    this.JWT_SECRET = process.env.JWT_SECRET;
  }
}

export const config = new Config();
