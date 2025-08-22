import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};
let client;
let clientPromise;

if (!uri) {
  console.warn("⚠️ Warning: MONGODB_URI is not defined. Please check your .env.local or deployment settings.");
}

// Use a global variable in development to prevent multiple connections
if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
