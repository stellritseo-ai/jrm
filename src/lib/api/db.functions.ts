import { createServerFn } from "@tanstack/react-start";
import { INITIAL_LEADS, INITIAL_REVIEWS, INITIAL_CHATS } from "../leads-store";

// ── LEADS FUNCTIONS ──

export const getLeadsFn = createServerFn({ method: "GET" })
  .handler(async () => {
    const { connectDB, LeadModel, LeadSettingsModel } = await import("../db.server");
    await connectDB();
    
    // Check settings
    let settings = await LeadSettingsModel.findOne();
    const hasSeeded = settings ? settings.hasSeeded : false;

    let leads = await LeadModel.find().lean();

    // Seed initial leads if DB is empty and we haven't seeded yet
    if (leads.length === 0 && !hasSeeded) {
      console.log("Seeding initial leads to MongoDB Atlas...");
      const seeded = INITIAL_LEADS.map(l => {
        const { id, ...rest } = l;
        return rest;
      });
      await LeadModel.insertMany(seeded);
      
      if (settings) {
        settings.hasSeeded = true;
        await settings.save();
      } else {
        const newSettings = new LeadSettingsModel({ hasSeeded: true });
        await newSettings.save();
      }
      
      leads = await LeadModel.find().lean();
    } else if (leads.length > 0 && !hasSeeded) {
      // If there are already leads but no settings doc, save settings doc
      if (settings) {
        settings.hasSeeded = true;
        await settings.save();
      } else {
        const newSettings = new LeadSettingsModel({ hasSeeded: true });
        await newSettings.save();
      }
    }

    // Map _id to id for client compatibility
    return leads.map((l: any) => ({
      ...l,
      id: l._id.toString(),
      _id: undefined
    }));
  });

export const addCustomLeadFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: any }) => {
    const { connectDB, LeadModel } = await import("../db.server");
    await connectDB();
    const newLead = new LeadModel({
      ...data,
      createdAt: new Date().toISOString(),
      photos: []
    });
    await newLead.save();
    return { ...newLead.toObject(), id: newLead._id.toString(), _id: undefined };
  });

export const deleteLeadFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { id: string } }) => {
    const { connectDB, LeadModel, LeadSettingsModel } = await import("../db.server");
    await connectDB();
    await LeadModel.findByIdAndDelete(data.id);
    
    // Unconditionally mark hasSeeded as true to prevent auto-seeding if the list becomes empty
    const settings = await LeadSettingsModel.findOne();
    if (settings) {
      settings.hasSeeded = true;
      await settings.save();
    } else {
      const newSettings = new LeadSettingsModel({ hasSeeded: true });
      await newSettings.save();
    }
    
    return { success: true };
  });

export const updateLeadStatusFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { id: string; status: any } }) => {
    const { connectDB, LeadModel } = await import("../db.server");
    await connectDB();
    const updated = await LeadModel.findByIdAndUpdate(
      data.id,
      { status: data.status },
      { new: true }
    ).lean();
    return updated ? { ...updated, id: updated._id.toString(), _id: undefined } : null;
  });

export const updateLeadDetailsFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { id: string; details: any } }) => {
    const { connectDB, LeadModel } = await import("../db.server");
    await connectDB();
    const updated = await LeadModel.findByIdAndUpdate(
      data.id,
      {
        name: data.details.name,
        email: data.details.email,
        phone: data.details.phone,
        address: data.details.address,
        projectType: data.details.projectType,
        description: data.details.description,
        status: data.details.status,
        estimatedValue: data.details.estimatedValue,
        notes: data.details.notes
      },
      { new: true }
    ).lean();
    return updated ? { ...updated, id: updated._id.toString(), _id: undefined } : null;
  });

export const uploadLeadPhotoFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { leadId: string; base64Photo: string } }) => {
    const { connectDB, LeadModel } = await import("../db.server");
    const { uploadImage } = await import("../cloudinary.server");
    await connectDB();

    const imageUrl = await uploadImage(data.base64Photo);
    const updated = await LeadModel.findByIdAndUpdate(
      data.leadId,
      { $push: { photos: imageUrl } },
      { new: true }
    ).lean();

    return updated ? { ...updated, id: updated._id.toString(), _id: undefined } : null;
  });

export const removeLeadPhotoFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { leadId: string; photoIndex: number } }) => {
    const { connectDB, LeadModel } = await import("../db.server");
    await connectDB();

    const lead = await LeadModel.findById(data.leadId);
    if (!lead || !lead.photos) return null;

    lead.photos.splice(data.photoIndex, 1);
    await lead.save();

    return { ...lead.toObject(), id: lead._id.toString(), _id: undefined };
  });


// ── REVIEWS FUNCTIONS ──

export const getReviewsFn = createServerFn({ method: "GET" })
  .handler(async () => {
    const { connectDB, ReviewModel } = await import("../db.server");
    await connectDB();
    let reviews = await ReviewModel.find().sort({ createdAt: -1 }).lean();

    // Seed initial reviews if DB is empty
    if (reviews.length === 0) {
      console.log("Seeding initial reviews to MongoDB Atlas...");
      const seeded = INITIAL_REVIEWS.map(r => {
        const { id, ...rest } = r;
        return rest;
      });
      await ReviewModel.insertMany(seeded);
      reviews = await ReviewModel.find().sort({ createdAt: -1 }).lean();
    } else if (reviews.length < INITIAL_REVIEWS.length) {
      // Seed any new INITIAL_REVIEWS that were added after initial seeding
      console.log(`DB has ${reviews.length} reviews, INITIAL_REVIEWS has ${INITIAL_REVIEWS.length}. Inserting new ones...`);
      const newReviews = INITIAL_REVIEWS.slice(reviews.length).map(r => {
        const { id, ...rest } = r;
        return rest;
      });
      await ReviewModel.insertMany(newReviews);
      reviews = await ReviewModel.find().sort({ createdAt: -1 }).lean();
    }

    return reviews.map((r: any) => ({
      ...r,
      id: r._id.toString(),
      _id: undefined
    }));
  });

export const addReviewFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: any }) => {
    const { connectDB, ReviewModel } = await import("../db.server");
    const { uploadImage } = await import("../cloudinary.server");
    await connectDB();

    let photosList: string[] = [];
    if (data.newReviewPhoto) {
      const url = await uploadImage(data.newReviewPhoto);
      photosList.push(url);
    }

    const newReview = new ReviewModel({
      title: data.title,
      text: data.text,
      author: data.author,
      location: data.location,
      rating: data.rating,
      featured: true,
      createdAt: new Date().toISOString(),
      photos: photosList
    });

    await newReview.save();
    return { ...newReview.toObject(), id: newReview._id.toString(), _id: undefined };
  });

export const toggleReviewFeaturedFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { id: string } }) => {
    const { connectDB, ReviewModel } = await import("../db.server");
    await connectDB();

    const review = await ReviewModel.findById(data.id);
    if (!review) return null;

    review.featured = !review.featured;
    await review.save();

    return { ...review.toObject(), id: review._id.toString(), _id: undefined };
  });

export const replyToReviewFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { id: string; replyText: string } }) => {
    const { connectDB, ReviewModel } = await import("../db.server");
    await connectDB();

    const updated = await ReviewModel.findByIdAndUpdate(
      data.id,
      { replyText: data.replyText },
      { new: true }
    ).lean();

    return updated ? { ...updated, id: updated._id.toString(), _id: undefined } : null;
  });


// ── CHATS FUNCTIONS ──

export const getChatSessionsFn = createServerFn({ method: "GET" })
  .handler(async () => {
    const { connectDB, ChatSessionModel } = await import("../db.server");
    await connectDB();
    const chats = await ChatSessionModel.find().lean();

    return chats.map((c: any) => ({
      ...c,
      id: c._id.toString(),
      _id: undefined,
      messages: (c.messages || []).map((m: any) => ({
        ...m,
        id: m._id ? m._id.toString() : m.id,
        _id: undefined
      }))
    }));
  });

export const getChatSessionFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { sessionId: string } }) => {
    const { connectDB, ChatSessionModel } = await import("../db.server");
    await connectDB();
    const chat = await ChatSessionModel.findById(data.sessionId).lean();
    return chat ? {
      ...chat,
      id: chat._id.toString(),
      _id: undefined,
      messages: (chat.messages || []).map((m: any) => ({
        ...m,
        id: m._id ? m._id.toString() : m.id,
        _id: undefined
      }))
    } : null;
  });

export const createChatSessionFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { clientName: string; clientCity: string; clientEmail?: string; clientPhone?: string } }) => {
    const { connectDB, ChatSessionModel } = await import("../db.server");
    await connectDB();

    const newSession = new ChatSessionModel({
      clientName: data.clientName,
      clientCity: data.clientCity || "San Antonio",
      clientEmail: data.clientEmail || "",
      clientPhone: data.clientPhone || "",
      lastMessage: "Chat started",
      lastMessageTime: new Date().toISOString(),
      unread: false,
      messages: []
    });

    await newSession.save();
    const obj = newSession.toObject();
    return {
      ...obj,
      id: obj._id.toString(),
      _id: undefined,
      messages: (obj.messages || []).map((m: any) => ({
        ...m,
        id: m._id ? m._id.toString() : m.id,
        _id: undefined
      }))
    };
  });

export const sendChatMessageFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { sessionId: string; sender: "client" | "admin"; text: string } }) => {
    const { connectDB, ChatSessionModel } = await import("../db.server");
    await connectDB();

    const isoTime = new Date().toISOString();
    const newMsg = {
      sender: data.sender,
      text: data.text,
      timestamp: isoTime
    };

    const updated = await ChatSessionModel.findByIdAndUpdate(
      data.sessionId,
      {
        $push: { messages: newMsg },
        lastMessage: data.text,
        lastMessageTime: isoTime,
        unread: data.sender === "client"
      },
      { new: true }
    ).lean();

    return updated ? {
      ...updated,
      id: updated._id.toString(),
      _id: undefined,
      messages: (updated.messages || []).map((m: any) => ({
        ...m,
        id: m._id ? m._id.toString() : m.id,
        _id: undefined
      }))
    } : null;
  });

export const markChatAsReadFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { sessionId: string } }) => {
    const { connectDB, ChatSessionModel } = await import("../db.server");
    await connectDB();

    const updated = await ChatSessionModel.findByIdAndUpdate(
      data.sessionId,
      { unread: false },
      { new: true }
    ).lean();

    return updated ? { ...updated, id: updated._id.toString(), _id: undefined } : null;
  });

export const deleteChatSessionFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { sessionId: string } }) => {
    const { connectDB, ChatSessionModel } = await import("../db.server");
    await connectDB();
    await ChatSessionModel.findByIdAndDelete(data.sessionId);
    return { success: true };
  });


// ── GALLERY FUNCTIONS ──

export const getGalleryPhotosFn = createServerFn({ method: "GET" })
  .handler(async () => {
    const { connectDB, GalleryPhotoModel, GallerySettingsModel } = await import("../db.server");
    const { uploadLocalFile } = await import("../cloudinary.server");
    const path = await import("path");
    const fs = await import("fs");
    await connectDB();

    let photos = await GalleryPhotoModel.find().lean();

    // Check if we have already seeded in the past
    const settings = await GallerySettingsModel.findOne();
    const hasSeeded = settings?.hasSeeded ?? false;

    // Seed default photos ONLY if gallery collection is empty AND we have never seeded before
    if (photos.length === 0 && !hasSeeded) {
      console.log("Seeding default portfolio photos to MongoDB Atlas...");

      const defaults = [
        {
          path: "/src/assets/svc-outdoor-kitchens.jpg",
          title: "Luxury Flagstone Kitchen",
          category: "Outdoor Kitchens",
          caption: "Premium built-in grill station with bar seating."
        },
        {
          path: "/src/assets/welcome-pavilion.jpg",
          title: "Cedar Outdoor Pavilion",
          category: "Remodeling",
          caption: "Solid timber framed pavilion with custom lighting."
        },
        {
          path: "/src/assets/faq-pavilion.jpg",
          title: "Modern Backyard Pergola",
          category: "Remodeling",
          caption: "Draped shade pergola with integrated fireplace seating."
        },
        {
          path: "/src/assets/welcome-pool.jpg",
          title: "Stunning Inground Pool Deck",
          category: "Hardscapes",
          caption: "Flagstone coping and travertine pavers pool surround."
        },
        {
          path: "/src/assets/hero-patio.jpg",
          title: "Stamped Concrete Patio",
          category: "Hardscapes",
          caption: "Decorative stained and stamped concrete living area."
        },
        {
          path: "/src/assets/stats-jobsite.jpg",
          title: "Under Construction Site",
          category: "General",
          caption: "Ongoing professional framing work on client property."
        },
        {
          path: "/src/assets/svc-softscapes.jpg",
          title: "Tropical Palm Softscape",
          category: "Landscaping",
          caption: "Drought tolerant custom softscape layout with mulch beds."
        },
        {
          path: "/src/assets/svc-artificial-turf.jpg",
          title: "Premium Synthetic Lawn",
          category: "Artificial Turf",
          caption: "Durable year-round low maintenance artificial grass."
        },
        {
          path: "/src/assets/svc-hardscapes.jpg",
          title: "Custom Paver Walkway",
          category: "Hardscapes",
          caption: "Interlocking stone pavers walk linking driveway to patio."
        },
        {
          path: "/src/assets/svc-fireplace.jpg",
          title: "Custom Stone Fireplace",
          category: "Outdoor Fireplaces",
          caption: "Outdoor fireplace with natural stone finish and rustic mantel."
        },
        {
          path: "/src/assets/svc-fencing.jpg",
          title: "Cedar Privacy Fence",
          category: "Fencing",
          caption: "Horizontal slat cedar privacy fencing surrounding yard."
        },
        {
          path: "/src/assets/svc-new-construction.jpg",
          title: "New Custom Foundation",
          category: "New Construction",
          caption: "Poured structural concrete foundation for residential project."
        },
        {
          path: "/src/assets/svc-house-remodeling.jpg",
          title: "Complete Home Remodel",
          category: "Remodeling",
          caption: "Stunning interior and exterior structural remodeling work."
        }
      ];

      const seedData = [];
      for (const item of defaults) {
        let finalUrl = item.path;
        const localPath = path.join(process.cwd(), item.path);
        if (fs.existsSync(localPath)) {
          try {
            console.log(`Uploading seed asset to Cloudinary: ${item.path}`);
            const cloudinaryUrl = await uploadLocalFile(localPath);
            if (cloudinaryUrl) {
              finalUrl = cloudinaryUrl;
            }
          } catch (err) {
            console.error(`Failed to upload seed asset ${item.path} to Cloudinary:`, err);
          }
        }
        seedData.push({
          url: finalUrl,
          uploadedAt: new Date().toISOString(),
          title: item.title,
          category: item.category,
          caption: item.caption
        });
      }

      await GalleryPhotoModel.insertMany(seedData);

      // Save seeding status
      if (settings) {
        settings.hasSeeded = true;
        await settings.save();
      } else {
        const newSettings = new GallerySettingsModel({ hasSeeded: true });
        await newSettings.save();
      }

      photos = await GalleryPhotoModel.find().lean();
    } else {
      // If there are already photos in the database and we haven't marked it as seeded, mark it now
      if (photos.length > 0 && !hasSeeded) {
        if (settings) {
          settings.hasSeeded = true;
          await settings.save();
        } else {
          const newSettings = new GallerySettingsModel({ hasSeeded: true });
          await newSettings.save();
        }
      }

      // Self-healing: migrate any existing local assets to Cloudinary
      let needsRefetch = false;
      for (const p of photos) {
        if (p.url && p.url.startsWith("/src/assets/")) {
          console.log(`Migrating existing database gallery photo to Cloudinary: ${p.url}`);
          const localPath = path.join(process.cwd(), p.url);
          if (fs.existsSync(localPath)) {
            try {
              const cloudinaryUrl = await uploadLocalFile(localPath);
              if (cloudinaryUrl) {
                await GalleryPhotoModel.findByIdAndUpdate(p._id, { url: cloudinaryUrl });
                needsRefetch = true;
              }
            } catch (err) {
              console.error(`Migration upload failed for ${p.url}:`, err);
            }
          }
        }
      }
      if (needsRefetch) {
        photos = await GalleryPhotoModel.find().lean();
      }
    }

    return photos.map((p: any) => ({
      id: p._id.toString(),
      url: p.url,
      uploadedAt: p.uploadedAt,
      title: p.title || "",
      category: p.category || "General",
      caption: p.caption || ""
    }));
  });

export const uploadGalleryPhotoFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { base64Photo: string; title?: string; category?: string; caption?: string } }) => {
    const { connectDB, GalleryPhotoModel } = await import("../db.server");
    const { uploadImage } = await import("../cloudinary.server");
    await connectDB();

    const imageUrl = await uploadImage(data.base64Photo);
    const newPhoto = new GalleryPhotoModel({
      url: imageUrl,
      uploadedAt: new Date().toISOString(),
      title: data.title || "",
      category: data.category || "General",
      caption: data.caption || ""
    });

    await newPhoto.save();
    return {
      id: newPhoto._id.toString(),
      url: newPhoto.url,
      uploadedAt: newPhoto.uploadedAt,
      title: newPhoto.title || "",
      category: newPhoto.category || "General",
      caption: newPhoto.caption || ""
    };
  });

export const removeGalleryPhotoFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { id: string } }) => {
    const { connectDB, GalleryPhotoModel, GallerySettingsModel } = await import("../db.server");
    const { deleteImage } = await import("../cloudinary.server");
    await connectDB();

    // Find the photo first to get its URL for deletion from Cloudinary
    const photo = await GalleryPhotoModel.findById(data.id);
    if (photo && photo.url) {
      await deleteImage(photo.url);
    }

    await GalleryPhotoModel.findByIdAndDelete(data.id);

    // Unconditionally mark hasSeeded as true to prevent auto-seeding if the gallery becomes empty
    const settings = await GallerySettingsModel.findOne();
    if (settings) {
      settings.hasSeeded = true;
      await settings.save();
    } else {
      const newSettings = new GallerySettingsModel({ hasSeeded: true });
      await newSettings.save();
    }

    return { success: true };
  });

export const updateGalleryPhotoDetailsFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { id: string; title: string; category: string; caption: string } }) => {
    const { connectDB, GalleryPhotoModel } = await import("../db.server");
    await connectDB();

    const updated = await GalleryPhotoModel.findByIdAndUpdate(
      data.id,
      {
        title: data.title || "",
        category: data.category || "General",
        caption: data.caption || ""
      },
      { new: true }
    ).lean();

    return updated ? {
      id: updated._id.toString(),
      url: updated.url,
      uploadedAt: updated.uploadedAt,
      title: updated.title || "",
      category: updated.category || "General",
      caption: updated.caption || ""
    } : null;
  });

// ── WEB EMAILS FUNCTIONS ──

export const getWebEmailsFn = createServerFn({ method: "GET" })
  .handler(async () => {
    const { connectDB, WebEmailModel } = await import("../db.server");
    await connectDB();
    const emails = await WebEmailModel.find().sort({ createdAt: -1 }).lean();
    return emails.map((e: any) => ({
      ...e,
      id: e._id.toString(),
      _id: undefined
    }));
  });

export const addWebEmailFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: any }) => {
    const { connectDB, WebEmailModel } = await import("../db.server");
    const { sendNotificationEmail } = await import("../email.server");
    await connectDB();
    const newEmail = new WebEmailModel({
      ...data,
      createdAt: new Date().toISOString()
    });
    await newEmail.save();

    // Fire-and-forget email notification (non-blocking)
    sendNotificationEmail({
      senderName: data.name,
      senderEmail: data.email,
      senderPhone: data.phone,
      service: data.service,
      message: data.message,
      source: data.source || "website_form"
    }).catch((err) => console.error("[addWebEmailFn] Email notify error:", err));

    return { ...newEmail.toObject(), id: newEmail._id.toString(), _id: undefined };
  });

export const deleteWebEmailFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { id: string } }) => {
    const { connectDB, WebEmailModel } = await import("../db.server");
    await connectDB();
    await WebEmailModel.findByIdAndDelete(data.id);
    return { success: true };
  });

export const loginAdminFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { username: string; password: string } }) => {
    const { connectDB, AdminUserModel, hashPassword, verifyPassword } = await import("../db.server");
    await connectDB();
    
    // Seed default admin if none exists
    let admin = await AdminUserModel.findOne({ username: "jrm" });
    if (!admin) {
      admin = new AdminUserModel({
        username: "jrm",
        password: hashPassword("jrm123"),
        role: "admin",
        sessionToken: ""
      });
      await admin.save();
      console.log("[Auth] Default admin user jrm seeded in database with secure hash.");
    }
    
    // Check credentials dynamically against database records
    const user = await AdminUserModel.findOne({ username: data.username.toLowerCase().trim() });
    if (!user) {
      throw new Error("Invalid username or password");
    }

    let isMatch = false;
    if (user.password.includes(":")) {
      // Password is secure pbkdf2 hash
      isMatch = verifyPassword(data.password, user.password);
    } else {
      // Legacy plaintext password - upgrade on successful match
      isMatch = user.password === data.password;
      if (isMatch) {
        user.password = hashPassword(data.password);
        await user.save();
        console.log(`[Auth] Upgraded legacy plaintext password for user '${user.username}' to secure hash.`);
      }
    }

    if (!isMatch) {
      throw new Error("Invalid username or password");
    }
    
    // Generate secure unique session token
    let sessionToken = "";
    if (typeof globalThis !== "undefined" && globalThis.crypto && globalThis.crypto.getRandomValues) {
      const array = new Uint8Array(32);
      globalThis.crypto.getRandomValues(array);
      sessionToken = Array.from(array)
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
    } else {
      sessionToken = Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join("");
    }
    
    user.sessionToken = sessionToken;
    await user.save();
    
    return { success: true, token: sessionToken };
  });

export const verifyAdminTokenFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { token: string } }) => {
    const { connectDB, AdminUserModel } = await import("../db.server");
    await connectDB();
    
    if (!data.token) return { valid: false };
    
    const user = await AdminUserModel.findOne({ sessionToken: data.token });
    if (!user) return { valid: false };
    
    return { 
      valid: true, 
      id: user._id.toString(), 
      username: user.username, 
      role: user.role || "admin" 
    };
  });

export const updateUserCredentialsFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { userId: string; username?: string; currentPassword?: string; newPassword?: string } }) => {
    const { connectDB, AdminUserModel, hashPassword, verifyPassword } = await import("../db.server");
    await connectDB();
    
    const user = await AdminUserModel.findById(data.userId);
    if (!user) {
      throw new Error("User not found");
    }
    
    if (data.username && data.username.trim()) {
      const existing = await AdminUserModel.findOne({ username: data.username.toLowerCase().trim() });
      if (existing && existing._id.toString() !== data.userId) {
        throw new Error("Username already taken");
      }
      user.username = data.username.toLowerCase().trim();
    }
    
    if (data.newPassword && data.newPassword.trim()) {
      if (!data.currentPassword || !data.currentPassword.trim()) {
        throw new Error("Current password is required to change password");
      }
      if (!verifyPassword(data.currentPassword, user.password)) {
        throw new Error("Current password is incorrect");
      }
      user.password = hashPassword(data.newPassword);
    }
    
    await user.save();
    return { success: true, username: user.username };
  });

export const adminResetUserPasswordFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { adminUserId: string; targetUserId: string; newPassword: string } }) => {
    const { connectDB, AdminUserModel, hashPassword } = await import("../db.server");
    await connectDB();
    
    // Verify admin
    const admin = await AdminUserModel.findById(data.adminUserId);
    if (!admin || admin.role !== "admin") {
      throw new Error("Unauthorized: Only administrators can reset other users' passwords.");
    }
    
    const targetUser = await AdminUserModel.findById(data.targetUserId);
    if (!targetUser) {
      throw new Error("User not found");
    }
    
    targetUser.password = hashPassword(data.newPassword);
    await targetUser.save();
    return { success: true };
  });

export const getPortalUsersFn = createServerFn({ method: "GET" })
  .handler(async () => {
    const { connectDB, AdminUserModel } = await import("../db.server");
    await connectDB();
    
    const users = await AdminUserModel.find().sort({ username: 1 }).lean();
    return users.map((u: any) => ({
      id: u._id.toString(),
      username: u.username,
      role: u.role || "admin"
    }));
  });

export const createPortalUserFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { username: string; password: string; role: string } }) => {
    const { connectDB, AdminUserModel, hashPassword } = await import("../db.server");
    await connectDB();
    
    const usernameClean = data.username.toLowerCase().trim();
    const existing = await AdminUserModel.findOne({ username: usernameClean });
    if (existing) {
      throw new Error("Username already exists");
    }
    
    const newUser = new AdminUserModel({
      username: usernameClean,
      password: hashPassword(data.password),
      role: data.role || "viewer",
      sessionToken: ""
    });
    
    await newUser.save();
    return { success: true, id: newUser._id.toString(), username: newUser.username, role: newUser.role };
  });

export const deletePortalUserFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { userId: string } }) => {
    const { connectDB, AdminUserModel } = await import("../db.server");
    await connectDB();
    
    // Prevent self-deletion or default admin jrm deletion
    const user = await AdminUserModel.findById(data.userId);
    if (!user) {
      throw new Error("User not found");
    }
    if (user.username === "jrm") {
      throw new Error("Cannot delete primary administrator account");
    }
    
    await AdminUserModel.findByIdAndDelete(data.userId);
    return { success: true };
  });

// ── PORTAL SETTINGS FUNCTIONS ──

export const getPortalSettingsFn = createServerFn({ method: "GET" })
  .handler(async () => {
    const { connectDB, PortalSettingsModel } = await import("../db.server");
    await connectDB();
    let settings = await PortalSettingsModel.findOne().lean();
    if (!settings) {
      const newSettings = new PortalSettingsModel({});
      await newSettings.save();
      settings = newSettings.toObject();
    }
    const clean = JSON.parse(JSON.stringify(settings));
    return {
      ...clean,
      id: clean._id,
      _id: undefined
    };
  });

export const updatePortalSettingsFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: any }) => {
    const { connectDB, PortalSettingsModel } = await import("../db.server");
    await connectDB();
    let settings = await PortalSettingsModel.findOne();
    
    const allowedFields = [
      "adminEmail",
      "officePhone",
      "autoSmsTemplate",
      "sendAutoEmail",
      "sendAutoSms",
      "hoursWeekday",
      "hoursSaturday",
      "hoursSunday",
      "maintenanceMode"
    ];

    if (!settings) {
      const filtered: any = {};
      allowedFields.forEach(f => {
        if (data[f] !== undefined) filtered[f] = data[f];
      });
      settings = new PortalSettingsModel(filtered);
    } else {
      allowedFields.forEach(f => {
        if (data[f] !== undefined) {
          settings[f] = data[f];
        }
      });
    }

    await settings.save();
    const updated = settings.toObject();
    const clean = JSON.parse(JSON.stringify(updated));
    return {
      ...clean,
      id: clean._id,
      _id: undefined
    };
  });

export const incrementVisitsFn = createServerFn({ method: "POST" })
  .handler(async () => {
    const { connectDB, PortalSettingsModel } = await import("../db.server");
    await connectDB();
    let settings = await PortalSettingsModel.findOne();
    if (!settings) {
      settings = new PortalSettingsModel({});
    }
    settings.totalVisits = (settings.totalVisits || 247) + 1;
    await settings.save();
    return {
      success: true,
      totalVisits: settings.totalVisits
    };
  });



