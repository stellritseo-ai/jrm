import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";

const MONGODB_URI = process.env.MONGODB_URI;
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

console.log("-----------------------------------------");
console.log(" DIAGNOSTIC REPORT: DATABASE & CLOUDINARY");
console.log("-----------------------------------------");
console.log("Environment Variables:");
console.log("- MONGODB_URI:", MONGODB_URI ? "Found" : "Missing");
console.log("- CLOUDINARY_CLOUD_NAME:", CLOUDINARY_CLOUD_NAME ? `Found (${CLOUDINARY_CLOUD_NAME})` : "Missing");
console.log("- CLOUDINARY_API_KEY:", CLOUDINARY_API_KEY ? "Found" : "Missing");
console.log("- CLOUDINARY_API_SECRET:", CLOUDINARY_API_SECRET ? "Found" : "Missing");
console.log("-----------------------------------------");

async function testDatabase() {
  if (!MONGODB_URI) {
    console.log("❌ MongoDB URI is missing. Skipping database test.");
    return;
  }

  try {
    console.log("1. Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI);
    console.log("✅ MongoDB Connected successfully!");

    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();
    console.log(`Found ${collections.length} collections:`);

    for (const col of collections) {
      const count = await db.collection(col.name).countDocuments();
      console.log(`- ${col.name}: ${count} documents`);
      
      if (count > 0) {
        const sample = await db.collection(col.name).findOne();
        console.log(`  Sample document keys: [${Object.keys(sample).join(", ")}]`);
      }
    }
  } catch (err) {
    console.error("❌ MongoDB Test Failed:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB.");
  }
}

async function testCloudinary() {
  if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
    console.log("❌ Cloudinary credentials are missing. Skipping Cloudinary test.");
    return;
  }

  try {
    console.log("\n2. Testing Cloudinary upload...");
    cloudinary.config({
      cloud_name: CLOUDINARY_CLOUD_NAME,
      api_key: CLOUDINARY_API_KEY,
      api_secret: CLOUDINARY_API_SECRET,
    });

    // 1x1 transparent PNG base64
    const dummyImageBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
    
    console.log("Uploading test image...");
    const result = await cloudinary.uploader.upload(dummyImageBase64, {
      folder: "jrm_construction_test",
    });
    
    console.log("✅ Cloudinary Upload successful!");
    console.log("- Public ID:", result.public_id);
    console.log("- Secure URL:", result.secure_url);

    console.log("Cleaning up test image...");
    const deleteResult = await cloudinary.uploader.destroy(result.public_id);
    console.log("- Deletion result:", deleteResult.result);
  } catch (err) {
    console.error("❌ Cloudinary Test Failed:", err);
  }
}

async function run() {
  await testDatabase();
  await testCloudinary();
  console.log("-----------------------------------------");
}

run();
