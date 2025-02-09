import { MongoClient, ServerApiVersion } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB connection string not defined");
}

const uri = process.env.MONGODB_URI;

let client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1, // Sets the server API version to v1 (available since MongoDB 5.0). Helps maintain compatibility with future versions.
    strict: true, // Prevents the use of deprecated features by throwing errors instead of warnings.
    deprecationErrors: true, // Ensures deprecated features immediately throw errors instead of just logging warnings.
  },
});

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClient) {
    global._mongoClient = new MongoClient(uri, options);
  }
  client = global._mongoClient;
} else {
  client = new MongoClient(uri, options);
}

module.exports = client;
