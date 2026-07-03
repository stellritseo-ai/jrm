import mongoose from "mongoose";
import { connectDB, LeadModel, ReviewModel, ChatSessionModel, GalleryPhotoModel, WebEmailModel } from "../src/lib/db.server";

const MONGODB_URI = process.env.MONGODB_URI;

async function run() {
  console.log("-----------------------------------------");
  console.log(" TESTING DIRECT DATABASE QUERIES");
  console.log("-----------------------------------------");

  if (!MONGODB_URI) {
    console.error("❌ MONGODB_URI is not set!");
    return;
  }

  try {
    console.log("Connecting...");
    await connectDB();
    console.log("✅ Database connected successfully!");

    console.log("\n1. Testing LeadModel...");
    const leads = await LeadModel.find().lean();
    console.log(`✅ LeadModel.find() succeeded. Count: ${leads.length}`);

    console.log("\n2. Testing ReviewModel...");
    const reviews = await ReviewModel.find().lean();
    console.log(`✅ ReviewModel.find() succeeded. Count: ${reviews.length}`);

    console.log("\n3. Testing ChatSessionModel...");
    const chats = await ChatSessionModel.find().lean();
    console.log(`✅ ChatSessionModel.find() succeeded. Count: ${chats.length}`);

    console.log("\n4. Testing GalleryPhotoModel...");
    const gallery = await GalleryPhotoModel.find().lean();
    console.log(`✅ GalleryPhotoModel.find() succeeded. Count: ${gallery.length}`);

    console.log("\n5. Testing WebEmailModel...");
    const emails = await WebEmailModel.find().lean();
    console.log(`✅ WebEmailModel.find() succeeded. Count: ${emails.length}`);

  } catch (err) {
    console.error("❌ Direct Query Failed:", err);
  } finally {
    await mongoose.disconnect();
    console.log("\nDisconnected.");
    console.log("-----------------------------------------");
  }
}

run();
