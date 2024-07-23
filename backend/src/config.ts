import dotenv from 'dotenv';

dotenv.config();

export const config = {
  mongoURI: process.env.MONGO_URI,
  baseUrl: process.env.BASE_URL
};
