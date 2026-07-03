import mongoose from "mongoose";
import crypto from "node:crypto";

export function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, storedHash: string): boolean {
  const [salt, hash] = storedHash.split(":");
  if (!salt || !hash) return false;
  const verify = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
  return hash === verify;
}

/**
 * Cached Connection Manager for Mongoose
 * Prevents multiple connections during dev hot-reloads
 */
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  const MONGODB_URI = process.env.MONGODB_URI || (import.meta.env as any).MONGODB_URI || "";
  if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env");
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((m) => {
      console.log("MongoDB connected successfully");
      return m;
    });
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

// ── SCHEMAS & MODELS ──

// 1. Lead Schema
const LeadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  projectType: { type: String, required: true },
  description: { type: String, required: true },
  contactTime: { type: String, required: true },
  status: { type: String, required: true },
  estimatedValue: { type: Number, required: true },
  notes: { type: String, default: "" },
  createdAt: { type: String, required: true },
  photos: { type: [String], default: [] }
});

export const LeadModel = mongoose.models.Lead || mongoose.model("Lead", LeadSchema);

// 2. Review Schema
const ReviewSchema = new mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  author: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, required: true },
  featured: { type: Boolean, default: true },
  replyText: { type: String },
  createdAt: { type: String, required: true },
  photos: { type: [String], default: [] }
});

export const ReviewModel = mongoose.models.Review || mongoose.model("Review", ReviewSchema);

// 3. Chat Session Schema
const ChatMessageSchema = new mongoose.Schema({
  sender: { type: String, enum: ["client", "admin"], required: true },
  text: { type: String, required: true },
  timestamp: { type: String, required: true }
});

const ChatSessionSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  clientCity: { type: String, required: true },
  clientEmail: { type: String, default: "" },
  clientPhone: { type: String, default: "" },
  lastMessage: { type: String, required: true },
  lastMessageTime: { type: String, required: true },
  unread: { type: Boolean, default: false },
  messages: { type: [ChatMessageSchema], default: [] }
});

export const ChatSessionModel = mongoose.models.ChatSession || mongoose.model("ChatSession", ChatSessionSchema);

// 4. Gallery Photo Schema
const GalleryPhotoSchema = new mongoose.Schema({
  url: { type: String, required: true },
  uploadedAt: { type: String, required: true },
  title: { type: String, default: "" },
  category: { type: String, default: "General" },
  caption: { type: String, default: "" }
});

if (mongoose.models.GalleryPhoto) {
  delete mongoose.models.GalleryPhoto;
}
export const GalleryPhotoModel = mongoose.model("GalleryPhoto", GalleryPhotoSchema);

// 5. Gallery Settings Schema
const GallerySettingsSchema = new mongoose.Schema({
  hasSeeded: { type: Boolean, default: false }
});

export const GallerySettingsModel = mongoose.models.GallerySettings || mongoose.model("GallerySettings", GallerySettingsSchema);

// 6. Web Email Schema
const WebEmailSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, default: "" },
  service: { type: String, default: "" },
  message: { type: String, default: "" },
  source: { type: String, default: "website_form" }, // "landing_page", "contact_page", "lets_talk_page"
  createdAt: { type: String, required: true }
});

export const WebEmailModel = mongoose.models.WebEmail || mongoose.model("WebEmail", WebEmailSchema);

// 7. Admin User Schema
const AdminUserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "editor", "viewer"], default: "admin" },
  sessionToken: { type: String, default: "" }
});

export const AdminUserModel = mongoose.models.AdminUser || mongoose.model("AdminUser", AdminUserSchema);

// 8. Lead Settings Schema
const LeadSettingsSchema = new mongoose.Schema({
  hasSeeded: { type: Boolean, default: false }
});

export const LeadSettingsModel = mongoose.models.LeadSettings || mongoose.model("LeadSettings", LeadSettingsSchema);

// 9. Portal Settings Schema
const PortalSettingsSchema = new mongoose.Schema({
  adminEmail: { type: String, default: "robertsa210@icloud.com" },
  officePhone: { type: String, default: "(210) 429-5526" },
  autoSmsTemplate: { type: String, default: "Hi {Name}, thank you for contacting JRM Construction! Robert Thompson will contact you during the {Time} to discuss your {Type} project." },
  sendAutoEmail: { type: Boolean, default: true },
  sendAutoSms: { type: Boolean, default: true },
  hoursWeekday: { type: String, default: "8:00 AM - 5:00 PM" },
  hoursSaturday: { type: String, default: "8:00 AM - 5:00 PM" },
  hoursSunday: { type: String, default: "Closed (Emergency 24/7)" },
  maintenanceMode: { type: Boolean, default: false },
  totalVisits: { type: Number, default: 247 }
});

if (mongoose.models.PortalSettings) {
  delete mongoose.models.PortalSettings;
}
export const PortalSettingsModel = mongoose.model("PortalSettings", PortalSettingsSchema);




