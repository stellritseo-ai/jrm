import { getLeadsFn, getReviewsFn, getChatSessionsFn, getGalleryPhotosFn, getWebEmailsFn } from "../src/lib/api/db.functions";

async function run() {
  console.log("-----------------------------------------");
  console.log(" TESTING SERVER FUNCTIONS");
  console.log("-----------------------------------------");

  try {
    console.log("Calling getLeadsFn...");
    const leads = await getLeadsFn();
    console.log("✅ getLeadsFn success! Count:", leads.length);
  } catch (err) {
    console.error("❌ getLeadsFn failed:", err);
  }

  try {
    console.log("Calling getReviewsFn...");
    const reviews = await getReviewsFn();
    console.log("✅ getReviewsFn success! Count:", reviews.length);
  } catch (err) {
    console.error("❌ getReviewsFn failed:", err);
  }

  try {
    console.log("Calling getChatSessionsFn...");
    const chats = await getChatSessionsFn();
    console.log("✅ getChatSessionsFn success! Count:", chats.length);
  } catch (err) {
    console.error("❌ getChatSessionsFn failed:", err);
  }

  try {
    console.log("Calling getGalleryPhotosFn...");
    const gallery = await getGalleryPhotosFn();
    console.log("✅ getGalleryPhotosFn success! Count:", gallery.length);
  } catch (err) {
    console.error("❌ getGalleryPhotosFn failed:", err);
  }

  try {
    console.log("Calling getWebEmailsFn...");
    const emails = await getWebEmailsFn();
    console.log("✅ getWebEmailsFn success! Count:", emails.length);
  } catch (err) {
    console.error("❌ getWebEmailsFn failed:", err);
  }

  console.log("-----------------------------------------");
}

run();
