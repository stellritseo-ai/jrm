// check-settings.js
import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://robert_db_user:fdzRvfcToXGNF76z@jrmcon.xfigacy.mongodb.net/jrm?appName=JRMCon";

async function check() {
  await mongoose.connect(MONGODB_URI);
  console.log("Connected to DB");
  
  const schema = new mongoose.Schema({}, { strict: false });
  const Model = mongoose.models.PortalSettings || mongoose.model('PortalSettings', schema);
  
  const doc = await Model.findOne();
  console.log("Current PortalSettings Document in DB:");
  console.log(JSON.stringify(doc, null, 2));
  
  await mongoose.disconnect();
}

check();
