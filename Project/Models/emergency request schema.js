const EmergencySchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
  urgency: { type: String, enum: ['high','medium','low'], required: true },
  status: { type: String, enum: ['pending','accepted','in-progress','completed','cancelled'], default: 'pending' },
  symptoms: { type: String, required: true },
  description: { type: String, required: true },
  location: {
    latitude: Number,
    longitude: Number,
    address: String
  },
  estimatedArrival: Date,
  acceptedAt: Date,
  completedAt: Date
}, { timestamps: true });