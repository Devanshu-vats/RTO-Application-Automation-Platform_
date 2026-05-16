const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid"); // for unique appId

const applicationSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  gender: { type: String, enum: ["male", "female", "other"], required: true },
  submitted: { type: Date, default: Date.now },
  appId: { type: String, default: uuidv4, unique: true },
  documents: {
    aadhaar: { type: String },
    photo: { type: String },
    signature: { type: String },
    marksheet: { type: String },
    blood_group: { type: String },
  },
  notes:{type: String},
  status:{
    type:String,
    default:'pending-review',
    enum:['pending-review', 'in-progress', 'action-required', 'approved', 'rejected']
  },

  payment: {
    mode: { type: String, enum: ["online", "offline"], required: true },
    screenshot: { type: String },
  },

  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Application", applicationSchema);
