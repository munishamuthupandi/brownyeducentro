const DoctorSchema = new mongoose.Schema({
  role: { type: String, enum: ['doctor'], required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  fullName: { type: String },
  email: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  phoneVerified: { type: Boolean, default: false },
  avatar: String,
  gender: { type: String, enum: ['male', 'female', 'other'] },
  specialization: String,
  qualifications: String,
  registrationNumber: { type: String, required: true, unique: true },
  experience: Number,
  rating: Number,
  reviewCount: Number,
  consultationFee: Number,
  bio: { type: String, maxlength: 500 },
  address: {
    clinic: String,
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
  availability: {
    isOnline: Boolean,
    acceptingEmergency: Boolean,
    schedule: [{
      day: { type: String, enum: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'] },
      available: Boolean,
      slots: [{ start: String, end: String }]
    }]
  },
  languages: [String],
  verified: Boolean,
  totalPatients: Number,
  totalAppointments: Number
}, { timestamps: true });