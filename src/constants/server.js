const PAYMENT_SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "http://myapidomain.com" // change to heroku
    : "http://localhost:8000";

export default PAYMENT_SERVER_URL;
