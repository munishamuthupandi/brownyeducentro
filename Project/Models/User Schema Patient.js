const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  role: { type: String, enum: ['patient'], required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  fullName: { type: String }, // computed
  email: { type: String, required: true, match: /.+\@.+\..+/ },
  phone: { type: String, required: true, unique: true },
  phoneVerified: { type: Boolean, default: false },
  avatar: { type: String },
  dateOfBirth: { type: Date },
  age: { type: Number }, // computed
  gender: { type: String, enum: ['male', 'female', 'other'] },
  bloodGroup: { type: String, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] },
  address: {
    street: String,
    city: String,
    state: String,
    pincode: String,
    country: String
  },
  location: {
    latitude: Number,
    longitude: Number
  },
  emergencyContact: {
    name: String,
    relationship: { type: String, enum: ['Spouse', 'Parent', 'Sibling', 'Friend'] },
    phone: String
  },
  medicalHistory: {
    conditions: [String],
    allergies: [String],
    previousSurgeries: [{ surgery: String, date: Date }],
    familyHistory: String
  }
}, { timestamps: true });