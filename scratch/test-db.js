import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

console.log("Using MONGODB_URI:", MONGODB_URI ? "Found" : "NOT FOUND");

if (!MONGODB_URI) {
  process.exit(1);
}

async function test() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI);
    console.log("Connected successfully!");
    
    // Check collections
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log("Collections:", collections.map(c => c.name));
    
    // Check counts
    for (const coll of collections) {
      const count = await mongoose.connection.db.collection(coll.name).countDocuments();
      console.log(`- ${coll.name}: ${count} documents`);
    }
  } catch (err) {
    console.error("Connection failed:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected.");
  }
}

test();
