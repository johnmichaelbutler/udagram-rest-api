require('dotenv').config()
export const config = {
  "dev": {
    "username": process.env.DB_USERNAME,
    "database": process.env.DB_DATABASE_NAME,
    "password": process.env.DB_PASSWORD,
    "host": process.env.DB_HOST,
    "dialect": process.env.DIALECT,
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
