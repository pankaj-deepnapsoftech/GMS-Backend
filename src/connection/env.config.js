import dotenv from 'dotenv';

dotenv.config();

class Config {
  MONGODB_URL;

  constructor() {
    this.MONGODB_URL = process.env.MONGODB_URL;
  }
}

export const config = new Config();
